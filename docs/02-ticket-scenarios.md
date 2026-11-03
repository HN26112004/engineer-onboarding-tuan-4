# 02. Kịch bản giải quyết Ticket thực tế (7-Step Process)

### Kịch bản 1: Học viên không xem được video bài giảng (Standard)
1. **Reception:** Ghi nhận lỗi xem video trên Web. 1 user bị ảnh hưởng -> Class: Standard.
2. **Initial Response:** Gửi email xác nhận trong 30 phút, hẹn phản hồi sau 2 giờ.
3. **Diagnosis:** Yêu cầu học viên gửi console log/ảnh chụp; kiểm tra CDN stream.
4. **Resolution:** Phát hiện lỗi cache token CDN hết hạn, tạo mới token.
5. **Communication:** Báo học viên F5 lại trình duyệt và xác nhận xem mượt mà.
6. **Follow-Up:** Thu thập đánh giá CSAT.
7. **Trend Analysis:** Ghi nhận lỗi CDN token để định kỳ refresh phía backend.

### Kịch bản 2: Hệ thống LMS sập toàn bộ vào giờ học (Expedite)
1. **Reception:** > 50 học viên và giảng viên không vào được -> Class: Expedite (> 25 users).
2. **Initial Response:** Phản hồi ngay lập tức cho các bên liên quan và mở kênh hỗ trợ khẩn.
3. **Diagnosis:** Phá vỡ WIP limit; kiểm tra Database connection pool bị nghẽn (spike traffic).
4. **Resolution:** Nâng cấp cấu hình RDS, scale thêm instance server.
5. **Communication:** Thông báo hệ thống đã phục hồi sau 45 phút, xin lỗi vì sự bất tiện.
6. **Follow-Up:** Kiểm tra tải và theo dõi độ ổn định trong 24 giờ tiếp theo.
7. **Trend Analysis:** Đề xuất auto-scaling cho các khung giờ cao điểm.

