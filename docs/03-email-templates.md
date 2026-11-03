# 03. Bộ khung Email Giao tiếp theo Đối tượng & Giai đoạn

Tài liệu cung cấp quy chuẩn xưng hô và cấu trúc email cho từng giai đoạn trong quy trình 7 bước. Khi áp dụng vào từng tình huống cụ thể (xem chi tiết tại `docs/02-ticket-scenarios.md`), kỹ sư cần điều chỉnh ngữ cảnh tương ứng.

## 1. Quy tắc xưng hô nhất quán theo đối tượng nhận
* **Với Học viên / Phụ huynh:** *"Chào bạn [Tên]"* (xưng *mình - bạn*) hoặc *"Kính gửi Quý phụ huynh [Tên]"* (xưng *em/nhà trường - anh/chị*). Tuyệt đối không trộn lẫn *"Kính gửi"* ở đầu thư với *"bạn"* ở thân thư.
* **Với Giáo viên / Nhân viên các cơ sở:** *"Chào thầy/cô [Tên]"* hoặc *"Chào anh/chị [Tên]"* (xưng *em - thầy/cô/anh/chị*).
* **Với Ban Giám đốc (CXO / Director / Trưởng bộ phận):** *"Kính gửi anh/chị [Tên]"* (xưng *em - anh/chị*), văn phong ngắn gọn, đi thẳng vào mức độ ảnh hưởng, phương án hành động và mốc báo cáo tiếp theo.

---

## 2. Khung Email theo từng giai đoạn xử lý

### Mẫu 1: Tiếp nhận yêu cầu (Initial Response)[cite: 6, 7]
*Lưu ý: Luôn nêu rõ việc đang thực hiện và hẹn mốc thời gian phản hồi tiếp theo cụ thể (không cam kết bừa thời gian sửa xong khi chưa rõ nguyên nhân).*

> Subject: [MindX Support #Mã-Ticket] Đã tiếp nhận yêu cầu hỗ trợ: [Tên vấn đề ngắn gọn]
>
> Chào anh/chị [Tên],
>
> Em là [Tên kỹ sư] từ bộ phận Kỹ thuật Vận hành MindX. Em đã nhận được thông tin của anh/chị về vấn đề [mô tả ngắn sự cố/yêu cầu].
>
> Hiện tại em đang tiến hành kiểm tra [trạng thái tài khoản / nhật ký hệ thống / cấu hình lớp học]. Em sẽ cập nhật lại nguyên nhân hoặc phương án hỗ trợ tạm thời cho anh/chị trước **[Giờ cụ thể, ví dụ: 10:30 sáng nay]** ạ.
>
> Trân trọng,  
> [Tên kỹ sư] — MindX Operating Engineer

### Mẫu 2: Hỏi thêm thông tin từ người dùng phổ thông (Clarifying Questions)[cite: 8]
*Lưu ý: Không yêu cầu người dùng phổ thông tự mở công cụ kỹ thuật như DevTools Console; chỉ xin ảnh chụp màn hình, thời điểm và thiết bị.*

> Subject: Re: [MindX Support #Mã-Ticket] Xin bổ sung thông tin để kiểm tra sự cố [Tên vấn đề]
>
> Chào anh/chị [Tên],
>
> Để giúp đội kỹ thuật khoanh vùng chính xác tình trạng lỗi trên máy của mình, nhờ anh/chị gửi thêm giúp em một vài thông tin ngắn gọn sau nhé:
> 1. Ảnh chụp toàn màn hình lúc xuất hiện thông báo lỗi.
> 2. Tên bài học/trang web anh/chị đang mở và khoảng thời gian gặp lỗi.
> 3. Thiết bị và trình duyệt anh/chị đang sử dụng (ví dụ: Chrome trên máy tính Windows hoặc Safari trên MacBook).
>
> Ngay khi nhận được thông tin, em sẽ kiểm tra và phản hồi lại hướng xử lý cho anh/chị trong vòng **30 phút** tiếp theo ạ.
>
> Trân trọng,  
> [Tên kỹ sư] — MindX Operating Engineer

### Mẫu 3: Cập nhật tiến độ định kỳ & Gửi phương án tạm thời (Status Update / Workaround)[cite: 9, 10, 16]
*Lưu ý: Gửi đúng mốc giờ đã hẹn ngay cả khi đội Dev chưa sửa xong code lõi.*

> Subject: Re: [MindX Support #Mã-Ticket] Cập nhật tiến độ xử lý & Phương án hỗ trợ tạm thời
>
> Chào anh/chị [Tên],
>
> Em xin cập nhật tình hình xử lý phiếu hỗ trợ #[Mã-Ticket] như đã hẹn ạ:
> - **Tình trạng hiện tại:** Qua kiểm tra, nguyên nhân xuất phát từ [mô tả ngắn gọn, dễ hiểu] và em đã chuyển thông tin cho bộ phận Phát triển phần mềm (Dev Team) để xử lý triệt để.
> - **Phương án sử dụng tạm thời (Workaround):** Để công việc/buổi học của anh/chị không bị gián đoạn, em xin gửi [link tài liệu dự phòng / hướng dẫn thao tác thay thế] tại đây: [Link/Hướng dẫn].
>
> Em vẫn đang theo sát tiến độ cùng đội Dev và sẽ cập nhật lại cho anh/chị vào lúc **[Mốc thời gian tiếp theo, tối đa không quá 24h]** ạ.
>
> Trân trọng,  
> [Tên kỹ sư] — MindX Operating Engineer

### Mẫu 4: Thông báo kết quả & Nhờ người dùng xác nhận trước khi đóng Ticket (Resolution & Confirmation)[cite: 10]
*Lưu ý: Nêu rõ việc đã thực hiện và luôn chờ người dùng xác nhận trước khi đóng ticket.*

> Subject: Re: [MindX Support #Mã-Ticket] Đã xử lý xong sự cố [Tên vấn đề] — Nhờ anh/chị kiểm tra xác nhận
>
> Chào anh/chị [Tên],
>
> Em xin thông báo sự cố [Tên vấn đề] của anh/chị đã được đội ngũ kỹ thuật xử lý xong thông qua việc [nêu ngắn gọn hành động đã làm: kích hoạt lại tài khoản / cấp lại quyền truy cập video / cập nhật dữ liệu].
>
> Nhờ anh/chị thử đăng nhập/kiểm tra lại trên máy của mình xem mọi thứ đã hoạt động ổn định chưa và phản hồi lại giúp em qua email này nhé. Sau khi nhận được xác nhận từ anh/chị, em xin phép được hoàn tất và đóng phiếu hỗ trợ #[Mã-Ticket] ạ.
>
> Trân trọng,  
> [Tên kỹ sư] — MindX Operating Engineer