// src/triage-helper.ts
export type ClassOfService = 'STANDARD' | 'PRIORITY' | 'EXPEDITE' | 'FIXED_DEADLINE';

export interface TriageInput {
  affectedUsers: number;
  hasFixedDeadline?: boolean;
  deadlineStatus?: 'SAFE' | 'UNSAFE' | 'LIKELY_MISSED';
}

export interface TriageResult {
  classOfService: ClassOfService;
  effectivePriority: 'STANDARD' | 'PRIORITY' | 'EXPEDITE';
  specialTreatment: string;
}

export function classifyTicket(input: TriageInput): TriageResult {
  // 1. Giữ Fixed Deadline là nhóm riêng và xác định mức độ xử lý (effectivePriority)
  if (input.hasFixedDeadline) {
    if (input.deadlineStatus === 'LIKELY_MISSED' || input.affectedUsers > 25) {
      return {
        classOfService: 'FIXED_DEADLINE',
        effectivePriority: 'EXPEDITE',
        specialTreatment: 'Treated as expedite if deadline is likely to be missed (Break WIP Limit)',
      };
    }

    if (input.deadlineStatus === 'UNSAFE' || input.affectedUsers >= 5) {
      return {
        classOfService: 'FIXED_DEADLINE',
        effectivePriority: 'PRIORITY',
        specialTreatment: 'Treated as priority if deadline is unsafe (Take priority at each stage)',
      };
    }

    return {
      classOfService: 'FIXED_DEADLINE',
      effectivePriority: 'STANDARD',
      specialTreatment: 'Otherwise, treated as Standard class',
    };
  }

  // 2. Xử lý theo số lượng người dùng bị ảnh hưởng (Impact-based)
  if (input.affectedUsers > 25) {
    return {
      classOfService: 'EXPEDITE',
      effectivePriority: 'EXPEDITE',
      specialTreatment: 'Break WIP Limit, emergency resolution, and deployment',
    };
  }

  if (input.affectedUsers >= 5) {
    return {
      classOfService: 'PRIORITY',
      effectivePriority: 'PRIORITY',
      specialTreatment: 'Take priority at each stage',
    };
  }

  return {
    classOfService: 'STANDARD',
    effectivePriority: 'STANDARD',
    specialTreatment: 'None',
  };
}