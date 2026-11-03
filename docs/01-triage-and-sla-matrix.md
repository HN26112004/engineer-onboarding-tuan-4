# 01. Bảng phân loại Class of Service & SLA Matrix

Tài liệu quy định tiêu chuẩn phân loại mức độ ưu tiên và thời gian cam kết dịch vụ (SLA) dựa trên khung đào tạo MindX CS.

| Class of Service | Phạm vi ảnh hưởng | First Response SLA | Resolution SLA | Hành động xử lý đặc biệt |
| :--- | :--- | :--- | :--- | :--- |
| **Standard** | Dưới 5 người dùng (< 5 users) | Trong 30 phút | Trong 24 giờ | Xử lý theo thứ tự thông thường (FIFO). |
| **Priority** | 5 đến 25 người dùng (5 - 25 users) | Trong 15 phút | Trong 4 giờ | Ưu tiên xếp trước ở từng công đoạn chẩn đoán và sửa lỗi. |
| **Expedite** | Trên 25 người dùng (> 25 users) | Ngay lập tức (< 5 phút) | Trong 1 - 2 giờ | **Break WIP Limit**: Gác lại việc khác, huy động nguồn lực xử lý khẩn cấp và deploy hotfix. |
| **Fixed Deadline** | Có hạn chót bàn giao cụ thể | Theo mức độ khẩn cấp | Phải xong trước deadline | Nếu an toàn: Xử lý như Standard. Nếu sát giờ hoặc nguy cơ trễ: Nâng cấp lên Priority / Expedite. |