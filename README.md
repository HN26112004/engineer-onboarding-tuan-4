# Engineer Onboarding - Week 4: Customer Support & Ticket Handling

Repository tổng hợp bài thực hành xử lý 6 tình huống Customer Support theo quy trình 7 bước của Operating Engineer và giao tiếp chuyên nghiệp với người dùng[cite: 30, 33].

## Cấu trúc tài liệu chính (`docs/`)

1. **`docs/01-triage-and-sla-matrix.md`**: Ma trận phân loại `Class of Service` (`Standard`, `Priority`, `Expedite`, `Fixed Deadline`) và nguyên tắc hẹn thời gian phản hồi thực tế[cite: 20, 31].
2. **`docs/02-ticket-scenarios.md`**: Chi tiết giải quyết **6 kịch bản thực tế** theo quy trình 7 bước kèm chuỗi email/tin nhắn trao đổi cho từng đối tượng:
   - **Scenario 01 — Login (`Standard`)**: Kiểm tra trạng thái tài khoản, xác minh với HR trước khi kích hoạt lại, không tự ý mở quyền truy cập.
   - **Scenario 02 — Performance (`Priority`)**: Xử lý sự cố tải chậm cho lớp 15 học viên, khoanh vùng API nghẽn, cung cấp link bài tập dự phòng (workaround) và phối hợp Dev Team.
   - **Scenario 03 — Critical Bug (`Expedite`)**: Xử lý khẩn cấp sự cố > 50 học viên không nộp được bài thi, báo cáo Manager/CXO, khôi phục hàng đợi và đối soát xác nhận 100% bài thi.
   - **Scenario 04 — Feature Request (`Standard`)**: Tiếp nhận đề xuất xuất báo cáo biểu đồ, cung cấp file mẫu tự động (workaround), chuyển Product Team và không hứa hẹn lịch triển khai.
   - **Scenario 05 — Multi-user Video (`Priority`)**: Gom nhóm các báo cáo cùng thời điểm, bóc tách 3 nhánh nguyên nhân (A: Mạng phòng Lab, B: Quyền nhúng Video 403, C: Trình duyệt Safari) và xử lý theo từng nhánh.
   - **Scenario 06 — Fixed Deadline (`Fixed Deadline`)**: Làm rõ phạm vi báo cáo Quý 3 cho Operations Director trước giờ họp BOD, chốt thứ tự ưu tiên bàn giao, xin duyệt dữ liệu Kế toán và xử lý sự cố khuyết dữ liệu phát sinh đúng hạn.
3. **`docs/03-email-templates.md`**: Chuẩn hóa cách xưng hô theo từng đối tượng nhận và cấu trúc email tiếp nhận, hỏi thông tin dễ hiểu, cập nhật tiến độ và xin xác nhận trước khi đóng ticket.
4. **`docs/04-common-issues-runbook.md`**: Sổ tay tra cứu nhanh 10 sự cố phổ biến và hướng xử lý không xâm lấn (Non-invasive workarounds)[cite: 14, 30].

## Công cụ bổ trợ (`src/` & `tests/`)
* Module `src/triage-helper.ts` và `src/template-generator.ts` hỗ trợ phân loại nhanh `Class of Service` (giữ nguyên nhóm `FIXED_DEADLINE` riêng biệt) kèm bộ Unit Test trên Vitest (`npm test`).