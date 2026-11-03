// src/triage-helper.ts
export type ClassOfService = 'STANDARD' | 'PRIORITY' | 'EXPEDITE';

export interface TriageInput {
  affectedUsers: number;
  hasFixedDeadline?: boolean;
  deadlineStatus?: 'SAFE' | 'UNSAFE' | 'LIKELY_MISSED';
}

export interface TriageResult {
  classOfService: ClassOfService;
  specialTreatment: string;
}

export function classifyTicket(input: TriageInput): TriageResult {
  // 1. Ưu tiên xử lý trường hợp có Fixed Deadline trước
  if (input.hasFixedDeadline) {
    if (input.deadlineStatus === 'LIKELY_MISSED') {
      return {
        classOfService: 'EXPEDITE',
        specialTreatment: 'Break WIP Limit, emergency resolution, and deployment',
      };
    }

    if (input.deadlineStatus === 'UNSAFE') {
      return {
        classOfService: 'PRIORITY',
        specialTreatment: 'Take priority at each stage',
      };
    }

    // Trường hợp Fixed Deadline nhưng ở trạng thái SAFE -> Treated as Standard
    return {
      classOfService: 'STANDARD',
      specialTreatment: 'None',
    };
  }

  // 2. Xử lý theo số lượng người dùng bị ảnh hưởng (Impact-based)
  if (input.affectedUsers > 25) {
    return {
      classOfService: 'EXPEDITE',
      specialTreatment: 'Break WIP Limit, emergency resolution, and deployment',
    };
  }

  if (input.affectedUsers >= 5) {
    return {
      classOfService: 'PRIORITY',
      specialTreatment: 'Take priority at each stage',
    };
  }

  return {
    classOfService: 'STANDARD',
    specialTreatment: 'None',
  };
}