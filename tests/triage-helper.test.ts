// tests/triage-helper.test.ts
import { describe, it, expect } from 'vitest';
import { classifyTicket } from '../src/triage-helper';

describe('classifyTicket - Triage Helper', () => {
  describe('Phân loại dựa trên số lượng người dùng (Impact-based)', () => {
    it('trả về STANDARD khi số lượng người dùng < 5', () => {
      const result = classifyTicket({ affectedUsers: 3 });

      expect(result).toEqual({
        classOfService: 'STANDARD',
        effectivePriority: 'STANDARD',
        specialTreatment: 'None',
      });
    });

    it('trả về PRIORITY khi số lượng người dùng từ 5 đến 25', () => {
      const result = classifyTicket({ affectedUsers: 15 });

      expect(result).toEqual({
        classOfService: 'PRIORITY',
        effectivePriority: 'PRIORITY',
        specialTreatment: 'Take priority at each stage',
      });
    });

    it('trả về EXPEDITE khi số lượng người dùng > 25', () => {
      const result = classifyTicket({ affectedUsers: 30 });

      expect(result).toEqual({
        classOfService: 'EXPEDITE',
        effectivePriority: 'EXPEDITE',
        specialTreatment: 'Break WIP Limit, emergency resolution, and deployment',
      });
    });
  });

  describe('Phân loại nhóm Fixed Deadline riêng biệt', () => {
    it('giữ nhóm FIXED_DEADLINE và xử lý như EXPEDITE nếu có nguy cơ trễ hạn (LIKELY_MISSED)', () => {
      const result = classifyTicket({
        affectedUsers: 1,
        hasFixedDeadline: true,
        deadlineStatus: 'LIKELY_MISSED',
      });

      expect(result.classOfService).toBe('FIXED_DEADLINE');
      expect(result.effectivePriority).toBe('EXPEDITE');
      expect(result.specialTreatment).toContain('Treated as expedite');
    });

    it('giữ nhóm FIXED_DEADLINE và xử lý như PRIORITY nếu thời hạn không an toàn (UNSAFE)', () => {
      const result = classifyTicket({
        affectedUsers: 2,
        hasFixedDeadline: true,
        deadlineStatus: 'UNSAFE',
      });

      expect(result.classOfService).toBe('FIXED_DEADLINE');
      expect(result.effectivePriority).toBe('PRIORITY');
      expect(result.specialTreatment).toContain('Treated as priority');
    });

    it('giữ nhóm FIXED_DEADLINE và xử lý như STANDARD nếu thời hạn an toàn (SAFE)', () => {
      const result = classifyTicket({
        affectedUsers: 1,
        hasFixedDeadline: true,
        deadlineStatus: 'SAFE',
      });

      expect(result.classOfService).toBe('FIXED_DEADLINE');
      expect(result.effectivePriority).toBe('STANDARD');
      expect(result.specialTreatment).toBe('Otherwise, treated as Standard class');
    });
  });
});