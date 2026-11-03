# engineer-onboarding-tuan-4
# Tuần 4: Customer Support - Ticket Handling, Triage & Communication

Repository hoàn thiện các tiêu chuẩn vận hành kỹ thuật và tự động hóa quy trình hỗ trợ khách hàng theo chuẩn MindX Onboarding.

## Nội dung triển khai
- **Tài liệu nghiệp vụ (`docs/`):**
  - Ma trận Class of Service & SLA (`01-triage-and-sla-matrix.md`)
  - Giải quyết 6 kịch bản sự cố chi tiết theo 7 bước (`02-ticket-scenarios.md`)
  - Bộ template email chuyên nghiệp theo từng giai đoạn (`03-email-templates.md`)
  - Runbook giải quyết Top 10 lỗi kỹ thuật phổ biến (`04-common-issues-runbook.md`)
- **Tự động hóa bằng mã nguồn (`src/`):**
  - `triage-helper.ts`: Tự động phân loại Class of Service và tính toán SLA response/resolution.
  - `template-generator.ts`: Điền nhanh các mẫu email phản hồi khách hàng.
  - `tests/triage-helper.test.ts`: Bộ unit test TDD đạt 100% Pass.

## Kiểm thử
```bash
npm install
npm test