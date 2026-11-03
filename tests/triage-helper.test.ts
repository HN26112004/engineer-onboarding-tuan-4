// tests/triage-helper.test.ts
import { describe, it, expect } from 'vitest';
import { classifyTicket } from '../src/triage-helper';

describe('classifyTicket - Triage Helper', () => {
  describe('Phân loại dựa trên số lượng người dùng (Impact-based)', () => {
    it('trả về STANDARD khi số lượng người dùng < 5', () => {
      const result = classifyTicket({ affectedUsers: 3 });

      expect(result).toEqual({
        classOfService: 'STANDARD',
        specialTreatment: 'None',
      });
    });

    it('trả về PRIORITY khi số lượng người dùng từ 5 đến 25', () => {
      const result = classifyTicket({ affectedUsers: 15 });

      expect(result).toEqual({
        classOfService: 'PRIORITY',
        specialTreatment: 'Take priority at each stage',
      });
    });

    it('trả về EXPEDITE khi số lượng người dùng > 25', () => {
      const result = classifyTicket({ affectedUsers: 30 });

      expect(result).toEqual({
        classOfService: 'EXPEDITE',
        specialTreatment: 'Break WIP Limit, emergency resolution, and deployment',
      });
    });
  });

  describe('Phân loại có Fixed Deadline', () => {
    it('trả về EXPEDITE nếu deadline có nguy cơ bị trễ (LIKELY_MISSED)', () => {
      const result = classifyTicket({
        affectedUsers: 1,
        hasFixedDeadline: true,
        deadlineStatus: 'LIKELY_MISSED',
      });

      expect(result.classOfService).toBe('EXPEDITE');
      expect(result.specialTreatment).toContain('Break WIP Limit');
    });

    it('trả về PRIORITY nếu deadline không an toàn (UNSAFE)', () => {
      const result = classifyTicket({
        affectedUsers: 2,
        hasFixedDeadline: true,
        deadlineStatus: 'UNSAFE',
      });

      expect(result.classOfService).toBe('PRIORITY');
      expect(result.specialTreatment).toBe('Take priority at each stage');
    });

    it('trả về STANDARD nếu deadline ở mức an toàn (SAFE)', () => {
      const result = classifyTicket({
        affectedUsers: 1,
        hasFixedDeadline: true,
        deadlineStatus: 'SAFE',
      });

      expect(result.classOfService).toBe('STANDARD');
      expect(result.specialTreatment).toBe('None');
    });
  });
});