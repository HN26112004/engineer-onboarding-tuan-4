# 04. Runbook: Top 10 Lỗi Phổ Biến & Workarounds

1. **Lỗi 401 Unauthorized:** Token hết hạn -> Hướng dẫn user đăng xuất, xóa cookie hoặc cấp lại JWT.
2. **Lỗi CORS khi gọi API:** Thiếu header allow-origin -> Thêm origin domain vào danh sách whitelist của API Gateway.
3. **Video bài giảng bị giật (Buffering):** Đường truyền mạng yếu -> Hướng dẫn hạ độ phân giải xuống 720p hoặc đổi DNS sang `8.8.8.8`.
4. **Không nhận được email kích hoạt:** Email rơi vào hòm Spam/Promotions -> Kiểm tra log SendGrid/SES, hướng dẫn kiểm tra thư rác.
5. **Lỗi 500 Internal Server Error:** Null pointer hoặc logic crash -> Kiểm tra CloudWatch/Sentry log, rollback hoặc vá hotfix.
6. **Học viên không nộp được bài tập:** File đính kèm vượt quá 25MB -> Hướng dẫn nén zip hoặc gắn link Google Drive/GitHub.
7. **Dữ liệu khóa học hiển thị sai lệch:** Dữ liệu cũ còn lưu trong LocalStorage -> Hướng dẫn nhấn `Ctrl + Shift + R` (Hard Reload).
8. **Lỗi thanh toán bị trừ tiền nhưng chưa kích hoạt khóa học:** Webhook từ cổng thanh toán bị timeout -> Tra soát mã giao dịch trên cổng thanh toán và kích hoạt thủ công.
9. **Lỗi không đăng nhập được qua Google/OAuth:** Popup bị trình duyệt chặn -> Hướng dẫn bật quyền mở pop-up cho website.
10. **Lỗi micro/camera không hoạt động trên lớp học trực tuyến:** Chưa cấp quyền thiết bị -> Hướng dẫn vào cài đặt quyền riêng tư của trình duyệt để cấp quyền.