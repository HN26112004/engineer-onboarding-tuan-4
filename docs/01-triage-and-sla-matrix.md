# 01. Bảng phân loại Class of Service & Nguyên tắc Phản hồi

Tài liệu quy định tiêu chuẩn phân loại mức độ ưu tiên dựa trên khung đào tạo MindX CS và Operating Engineer[cite: 20, 31].

## 1. Ma trận Class of Service

| Class of Service | Số lượng người ảnh hưởng | Xử lý đặc biệt (Special Treatment) | Nguyên tắc phản hồi & Cập nhật |
| :--- | :--- | :--- | :--- |
| **Standard** | `< 5 users`[cite: 20, 31] | Không có (`None`) — Xử lý theo luồng chuẩn[cite: 20, 31]. | Ghi nhận `< 15 phút`, phản hồi đầu tiên `< 30 phút`[cite: 14, 30]. Cập nhật định kỳ tối thiểu mỗi `24 giờ`[cite: 16, 30]. |
| **Priority** | `5 - 25 users`[cite: 20, 31] | **Take priority at each stage**: Được ưu tiên xử lý trước ở mọi giai đoạn[cite: 20, 31]. | Phản hồi ngay khi tiếp nhận, hẹn mốc cập nhật tiếp theo ngắn (ví dụ: sau 30–60 phút) để báo tiến độ workaround/chẩn đoán. |
| **Expedite** | `> 25 users`[cite: 20, 31] | **Break WIP Limit**: Phá vỡ giới hạn công việc đang làm, xử lý và triển khai khẩn cấp[cite: 20, 31]. | Báo động khẩn cấp ngay lập tức, thông báo cho Manager/CXO và các bên liên quan, cập nhật liên tục (mỗi 15–30 phút) cho đến khi khôi phục. |
| **Fixed Deadline** | `0 - x users` (Phụ thuộc thời hạn bàn giao)[cite: 20, 31] | • Xử lý như **Priority** nếu thời hạn không an toàn (`unsafe`).<br>• Xử lý như **Expedite** nếu thời hạn có nguy cơ bị trễ (`likely to be missed`)[cite: 20].<br>• Còn lại xử lý như **Standard** (`safe`)[cite: 20, 21]. | Làm rõ phạm vi ngay từ đầu, thống nhất các mốc kiểm tra tiến độ (checkpoint) trước giờ G để đảm bảo bàn giao đúng hạn. |

## 2. Nguyên tắc cam kết thời gian với người dùng
* **Không đánh đồng thời gian phản hồi với thời gian sửa xong (Resolution ETA):** Trong email phản hồi ban đầu và các email cập nhật, kỹ sư **bắt buộc phải có lời hẹn cho lần cập nhật tiếp theo** (ví dụ: *"Em sẽ cập nhật lại tình hình cho anh/chị trước 15:00 chiều nay"*), nhưng **không cam kết cứng thời gian sửa xong triệt để** nếu chưa xác định được nguyên nhân gốc rễ hoặc còn phụ thuộc vào đội Dev/bên thứ ba[cite: 6, 9, 24].
* **Chỉ đóng ticket khi có xác nhận:** Mọi ticket chỉ được chuyển sang trạng thái hoàn tất (Resolved/Closed) sau khi đã cung cấp giải pháp và nhận được phản hồi xác nhận hoạt động ổn định từ chính người dùng[cite: 10, 30].# 01. Bảng phân loại Class of Service & Nguyên tắc Phản hồi

Tài liệu quy định tiêu chuẩn phân loại mức độ ưu tiên dựa trên khung đào tạo MindX CS và Operating Engineer[cite: 20, 31].

## 1. Ma trận Class of Service

| Class of Service | Số lượng người ảnh hưởng | Xử lý đặc biệt (Special Treatment) | Nguyên tắc phản hồi & Cập nhật |
| :--- | :--- | :--- | :--- |
| **Standard** | `< 5 users`[cite: 20, 31] | Không có (`None`) — Xử lý theo luồng chuẩn[cite: 20, 31]. | Ghi nhận `< 15 phút`, phản hồi đầu tiên `< 30 phút`[cite: 14, 30]. Cập nhật định kỳ tối thiểu mỗi `24 giờ`[cite: 16, 30]. |
| **Priority** | `5 - 25 users`[cite: 20, 31] | **Take priority at each stage**: Được ưu tiên xử lý trước ở mọi giai đoạn[cite: 20, 31]. | Phản hồi ngay khi tiếp nhận, hẹn mốc cập nhật tiếp theo ngắn (ví dụ: sau 30–60 phút) để báo tiến độ workaround/chẩn đoán. |
| **Expedite** | `> 25 users`[cite: 20, 31] | **Break WIP Limit**: Phá vỡ giới hạn công việc đang làm, xử lý và triển khai khẩn cấp[cite: 20, 31]. | Báo động khẩn cấp ngay lập tức, thông báo cho Manager/CXO và các bên liên quan, cập nhật liên tục (mỗi 15–30 phút) cho đến khi khôi phục. |
| **Fixed Deadline** | `0 - x users` (Phụ thuộc thời hạn bàn giao)[cite: 20, 31] | • Xử lý như **Priority** nếu thời hạn không an toàn (`unsafe`).<br>• Xử lý như **Expedite** nếu thời hạn có nguy cơ bị trễ (`likely to be missed`)[cite: 20].<br>• Còn lại xử lý như **Standard** (`safe`)[cite: 20, 21]. | Làm rõ phạm vi ngay từ đầu, thống nhất các mốc kiểm tra tiến độ (checkpoint) trước giờ G để đảm bảo bàn giao đúng hạn. |

## 2. Nguyên tắc cam kết thời gian với người dùng
* **Không đánh đồng thời gian phản hồi với thời gian sửa xong (Resolution ETA):** Trong email phản hồi ban đầu và các email cập nhật, kỹ sư **bắt buộc phải có lời hẹn cho lần cập nhật tiếp theo** (ví dụ: *"Em sẽ cập nhật lại tình hình cho anh/chị trước 15:00 chiều nay"*), nhưng **không cam kết cứng thời gian sửa xong triệt để** nếu chưa xác định được nguyên nhân gốc rễ hoặc còn phụ thuộc vào đội Dev/bên thứ ba[cite: 6, 9, 24].
* **Chỉ đóng ticket khi có xác nhận:** Mọi ticket chỉ được chuyển sang trạng thái hoàn tất (Resolved/Closed) sau khi đã cung cấp giải pháp và nhận được phản hồi xác nhận hoạt động ổn định từ chính người dùng[cite: 10, 30].