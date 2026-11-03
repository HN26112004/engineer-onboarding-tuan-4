# 02. Thực hành Xử lý 6 Kịch bản Ticket (Quy trình 7 bước & Giao tiếp)

---

## Scenario 01 — Login Issue (Class of Service: Standard)

### Bối cảnh tình huống
* **Người báo:** Chị Lan Nguyễn (Chuyên viên Tư vấn Tuyển sinh - cơ sở Thành Công).
* **Vấn đề:** Không đăng nhập được vào hệ thống CRM/Odoo sáng đầu tuần, màn hình báo *"Tài khoản không tồn tại hoặc đã bị vô hiệu hóa"*.
* **Thời điểm giả định:** 09:00 sáng Thứ Hai.

### Quy trình xử lý 7 bước (Operating Engineer Flow)

#### 1. Reception (09:00 - 09:05)[cite: 5, 30]
* **Ghi nhận:** Log ticket `#TK-401` trên hệ thống hỗ trợ.
* **Đánh giá phạm vi:** Chỉ có 1 nhân sự gặp lỗi (`< 5 users`), các nhân sự khác tại cơ sở vẫn làm việc bình thường.
* **Phân loại (Class of Service):** `Standard`[cite: 20, 31].
* **Người phụ trách:** Hải Nam (Operating Engineer).

#### 2. Initial Response (09:08)[cite: 6, 7, 30]
* **Hành động:** Gửi email xác nhận đã tiếp nhận ticket cho chị Lan, thông báo đang kiểm tra trạng thái tài khoản và hẹn phản hồi kết quả kiểm tra trước **09:45 sáng nay**.
* **Email gửi người dùng (Initial Response):**

Subject: [MindX Support #TK-401] Đã tiếp nhận yêu cầu hỗ trợ đăng nhập hệ thống Odoo

Chào chị Lan,

Em là Nam từ bộ phận Kỹ thuật Vận hành (Operating Engineer). Em đã nhận được thông tin về việc tài khoản của chị không đăng nhập được vào hệ thống Odoo sáng nay.

Hiện tại em đang kiểm tra trạng thái tài khoản và nhật ký đăng nhập trên hệ thống. Em sẽ cập nhật lại nguyên nhân và hướng xử lý cho chị trước 09:45 sáng nay ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

#### 3. Diagnosis (09:10 - 09:25)[cite: 8, 30, 32]
* **Điều tra hệ thống (Dữ liệu giả lập từ Log & Admin):**
  * Kiểm tra trên **Azure App Insights**: Không có lỗi 500 hay sự cố sập dịch vụ xác thực (Auth service hoạt động 100%).
  * Kiểm tra trang quản trị **Odoo User Management**: Phát hiện tài khoản `lan.nt@mindx.edu.vn` đang ở trạng thái `Inactive` (Bị vô hiệu hóa). Lịch sử audit log ghi nhận tài khoản bị tắt tự động vào tối Chủ Nhật do hệ thống đồng bộ danh sách nhân sự nghỉ phép/điều chuyển từ bộ phận Nhân sự (HR).
* **Quyết định quan trọng (Boundary & Security Awareness):** 
  * Tuyệt đối **không tự ý bật lại (reactivate) quyền truy cập** ngay lập tức vì có thể vi phạm quy trình bảo mật nếu nhân sự đã nghỉ việc hoặc đang trong diện tạm khóa quyền theo yêu cầu quản lý.
  * Cần xác minh với bộ phận HR trước khi mở lại tài khoản.

#### 4. Resolution (09:25 - 09:50)[cite: 9, 30, 32]
* **Tin nhắn trao đổi nội bộ với HR (09:25):**

Chào chị Mai (HR Team), em là Nam bên Operating Engineer. Hiện tại chị Lan Nguyễn (`lan.nt@mindx.edu.vn` - CS Thành Công) có báo không đăng nhập được Odoo (Ticket #TK-401). Em kiểm tra log thấy tài khoản vừa chuyển sang trạng thái Inactive từ đợt đồng bộ tối qua. Nhờ chị xác nhận giúp em xem chị Lan có đang làm việc bình thường hay có quyết định điều chuyển/tạm ngưng quyền nào không để bên em mở lại tài khoản đúng quy định nhé ạ. Em cảm ơn chị!

* **Kết quả xác minh & Khắc phục:**
  * Lúc 09:35, do HR đang họp chưa phản hồi xong, kỹ sư gửi email cập nhật tiến độ đúng hẹn cho chị Lan để chị yên tâm.
  * Lúc 09:48, HR xác nhận chị Lan vừa kết thúc kỳ nghỉ thai sản/nghỉ phép dài ngày và đi làm lại từ hôm nay nhưng phiếu cập nhật trạng thái trên phần mềm HR bị duyệt trễ.
  * Kỹ sư thực hiện kích hoạt lại (`Reactivate`) tài khoản trên Odoo, giữ nguyên phân quyền cơ sở Thành Công và gửi link đặt lại mật khẩu[cite: 32].

#### 5. Communication (09:35 & 09:55)[cite: 10, 30]
* **Email cập nhật tiến độ (09:35 - khi đang chờ HR xác nhận):**

Subject: Re: [MindX Support #TK-401] Cập nhật tiến độ hỗ trợ đăng nhập hệ thống Odoo

Chào chị Lan,

Em xin cập nhật tình hình xử lý ticket #TK-401 của chị ạ. Qua kiểm tra hệ thống, em thấy tài khoản của chị đang ở trạng thái tạm khóa tự động sau đợt nghỉ phép vừa rồi. 

Theo quy trình bảo mật của công ty, em đã liên hệ với bộ phận Nhân sự (HR) để xác nhận thông tin kích hoạt lại tài khoản cho chị. Ngay khi HR phản hồi, em sẽ mở lại tài khoản ngay và cập nhật lại cho chị chậm nhất trước 10:30 sáng nay nhé ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

* **Email thông báo kết quả & Nhờ xác nhận (09:55):**

Subject: Re: [MindX Support #TK-401] Đã kích hoạt lại tài khoản đăng nhập hệ thống Odoo

Chào chị Lan,

Bộ phận HR đã xác nhận thông tin làm việc trở lại của chị và em đã kích hoạt lại tài khoản `lan.nt@mindx.edu.vn` trên hệ thống Odoo, đồng thời gửi một email khôi phục mật khẩu về hộp thư của chị.

Chị vui lòng kiểm tra hộp thư, đặt lại mật khẩu mới và đăng nhập thử vào hệ thống xem đã truy cập được đầy đủ dữ liệu cơ sở chưa nhé. Chị phản hồi lại giúp em qua email này để em xác nhận hoàn tất phiếu hỗ trợ ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

#### 6. Follow-Up (10:15)[cite: 10, 11, 30]
* **Ghi nhận xác nhận:** Lúc 10:10, chị Lan phản hồi email: *"Chị đã đổi mật khẩu và vào lại được Odoo bình thường rồi, cảm ơn Nam nhé!"*.
* **Đóng ticket:** Ghi chú lại biên bản xác nhận của HR kèm phản hồi của chị Lan vào lịch sử ticket `#TK-401`, chuyển trạng thái sang `Resolved/Closed` và gửi khảo sát CSAT[cite: 11].

#### 7. Trend Analysis[cite: 12, 30, 32]
* **Bài học / Nguyên nhân gốc rễ:** Quy trình nhân sự đi làm lại sau nghỉ phép dài ngày thường bị trễ bước cập nhật trạng thái `Active` trên hệ thống HR trước giờ làm việc sáng Thứ Hai.
* **Hành động phòng ngừa:** Bổ sung vào Runbook nội bộ mục *"Quy trình xác minh với HR khi gặp tài khoản Inactive"* và đề xuất tạo luồng nhắc tự động cho HR vào chiều Thứ Sáu đối với danh sách nhân sự quay lại làm việc vào tuần kế tiếp[cite: 30, 32].

---

## Scenario 02 — Performance Issue (Class of Service: Priority)

### Bối cảnh tình huống
* **Người báo:** Thầy Minh Hoàng (Giảng viên lớp Web Fullstack - K18).
* **Vấn đề:** Cả lớp gồm 15 học viên đang trong ca học tối (19:30 - 21:30) truy cập vào trang bài tập thực hành trên LMS cực kỳ chậm, quay vòng tải trang hơn 1 phút rồi báo lỗi *504 Gateway Timeout*.
* **Thời điểm giả định:** 19:40 tối.

### Quy trình xử lý 7 bước (Operating Engineer Flow)

#### 1. Reception (19:40 - 19:43)[cite: 5, 30]
* **Ghi nhận:** Tạo ticket `#TK-402`.
* **Đánh giá phạm vi:** Ảnh hưởng trực tiếp đến 15 học viên và 1 giảng viên đang trong giờ học (`5 - 25 users`).
* **Phân loại (Class of Service):** `Priority` — được ưu tiên xử lý ở mọi bước để không làm hỏng buổi học[cite: 20, 31].
* **Người phụ trách:** Hải Nam (Operating Engineer).

#### 2. Initial Response (19:46)[cite: 6, 7, 30]
* **Hành động:** Phản hồi ngay cho thầy Hoàng để xác nhận đã nắm thông tin, xin thêm tên module bài học đang mở và hẹn sẽ gửi phương án học thay thế tạm thời (workaround) trong vòng **15 phút (trước 20:00)**.
* **Email gửi giảng viên (Initial Response):**

Subject: [MindX Support #TK-402] Tiếp nhận khẩn: Sự cố tải chậm trang bài tập lớp Web Fullstack K18

Chào thầy Hoàng,

Em là Nam từ đội ngũ Kỹ thuật Vận hành. Em đã nhận được thông báo của thầy về việc 15 bạn học viên lớp Web Fullstack K18 đang bị chậm và báo lỗi khi mở trang bài tập thực hành.

Em đã nâng mức độ ưu tiên của phiếu hỗ trợ lên mức Cao (Priority) để kiểm tra ngay và chuẩn bị sẵn đường dẫn tài liệu dự phòng cho lớp mình. Em sẽ phản hồi lại phương án hỗ trợ tạm thời để lớp tiếp tục làm bài trước 20:00 tối nay (trong 15 phút tới) ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

#### 3. Diagnosis (19:46 - 19:55)[cite: 8, 30, 33]
* **Xác định phạm vi & Điều tra trên Monitoring (Giả lập dữ liệu Azure App Insights):**
  * Kiểm tra tổng thể hệ thống LMS: Các lớp khác vẫn vào trang chủ và xem video bình thường $\rightarrow$ Sự cố **không phải sập toàn hệ thống**, mà khu trú ở API tải danh sách đề bài tập lớn (`GET /api/v1/assignments/fullstack-module-3`).
  * Quan sát trên **Azure App Insights**: Thời gian phản hồi (Response time) của endpoint này vọt lên `> 30,000ms` khi có 15 người cùng bấm tải một lúc do câu truy vấn cơ sở dữ liệu chưa được đánh index và kèm theo file tài nguyên nặng.
* **Phân biệt giả thuyết vs dữ liệu:** Dữ liệu log xác nhận nghẽn ở tầng query của API `/assignments/fullstack-module-3` chứ không phải do mạng Wi-Fi tại phòng học. Do nguyên nhân nằm ở câu lệnh truy vấn trong source code (ràng buộc Non-invasive không tự sửa code)[cite: 25, 30], cần cung cấp workaround lấy đề bài ngoài hệ thống cho lớp học ngay, đồng thời escalate sang Dev Team để tối ưu query[cite: 24, 32].

#### 4. Resolution (19:55 - 20:10)[cite: 9, 30, 32]
* **Phương án hỗ trợ tạm thời (Workaround - 19:56):** Trích xuất bộ đề bài tập và file starter-kit của buổi học số 3 đưa lên thư mục Google Drive/GitHub dự phòng, gửi ngay cho thầy Hoàng để phát cho 15 học viên làm bài trên máy cá nhân mà không cần chờ trang LMS tải xong[cite: 24, 25].
* **Phối hợp & Escalate sang Dev Team (20:05):** Tạo phiếu leo thang nội bộ kèm trace log gửi cho nhóm Backend Dev.
* **Tin nhắn nội bộ gửi Dev Team (Escalation):**

@backend-dev-team [Escalation - Priority Ticket #TK-402]
- **Vấn đề:** Endpoint `GET /api/v1/assignments/fullstack-module-3` bị timeout (504) khi 15 học viên lớp K18 truy cập đồng thời lúc 19:40.
- **Dữ liệu từ Azure App Insights:** Request duration trung bình 32.4s, dependency call tới PostgreSQL bị lock/full table scan (Operation ID: `8a9f2b1c-4d3e`).
- **Workaround đã áp dụng:** Đã gửi bộ đề và starter-kit qua Google Drive cho giảng viên để lớp tiếp tục học bình thường.
- **Nhờ Dev Team:** Kiểm tra tối ưu lại query hoặc bật caching cho endpoint này trước buổi học tiếp theo của lớp.

#### 5. Communication (19:58 & 10:00 sáng hôm sau)[cite: 10, 16, 30]
* **Email gửi Workaround cho giảng viên (19:58):**

Subject: Re: [MindX Support #TK-402] Phương án truy cập bài tập tạm thời cho lớp Web Fullstack K18

Chào thầy Hoàng,

Qua kiểm tra nhanh, em xác định nguyên nhân do trang bài tập của Học phần 3 đang chứa tệp dữ liệu lớn khiến hệ thống phản hồi chậm khi cả lớp 15 bạn truy cập cùng lúc.

Để không làm gián đoạn thời gian thực hành tối nay của lớp, em gửi thầy đường dẫn Google Drive chứa sẵn toàn bộ đề bài và tệp mẫu của buổi học hôm nay tại đây: [Link Tài Liệu Dự Phòng]. Thầy nhờ các bạn tải trực tiếp từ link này để làm bài nhé ạ.

Hiện em đã chuyển thông tin kỹ thuật sang bộ phận Phát triển phần mềm (Dev Team) để tối ưu tốc độ tải trang. Em sẽ kiểm tra lại với thầy sau khi ca học kết thúc và cập nhật kết quả khắc phục trên hệ thống trước 10:00 sáng mai ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

* **Email cập nhật kết quả sau khi Dev đã tối ưu xong (09:45 sáng hôm sau):**

Subject: Re: [MindX Support #TK-402] Cập nhật kết quả tối ưu trang bài tập lớp Web Fullstack K18

Chào thầy Hoàng,

Em xin cập nhật tiến độ xử lý sự cố tải chậm trang bài tập tối qua ạ. Sáng nay đội ngũ Dev đã hoàn tất việc tối ưu hóa dữ liệu và bổ sung bộ nhớ đệm (cache) cho trang bài tập Học phần 3. Em đã kiểm thử lại và tốc độ tải trang hiện chỉ mất dưới 1 giây.

Nhờ thầy khi thuận tiện truy cập thử lại vào trang bài tập của lớp trên LMS và phản hồi xác nhận giúp em xem trang đã mở nhanh và ổn định chưa để em hoàn tất đóng phiếu hỗ trợ #TK-402 nhé ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

#### 6. Follow-Up (11:20 sáng hôm sau)[cite: 10, 11, 30]
* **Ghi nhận xác nhận:** Thầy Hoàng phản hồi lúc 11:15: *"Thầy vừa vào kiểm tra lại thấy trang bài tập mở nhanh rồi, tối qua các bạn dùng link Drive cũng hoàn thành xong bài. Cảm ơn em!"*.
* **Đóng ticket:** Đính kèm xác nhận của thầy Hoàng và đóng ticket `#TK-402`[cite: 10, 11].

#### 7. Trend Analysis[cite: 12, 30]
* **Bài học:** Các học phần có đính kèm tệp thực hành dung lượng lớn trực tiếp trong API chi tiết bài học rất dễ gây nghẽn cổ chai khi cả lớp truy cập cùng lúc vào đầu giờ thực hành.
* **Đề xuất:** Đưa danh sách các link tài liệu học tập dự phòng (Backup Drive) vào cẩm nang trực ca tối của Operating Engineer để có thể gửi ngay cho giảng viên trong vòng 5 phút khi gặp sự cố tương tự[cite: 11, 12].

---

## Scenario 03 — Critical Bug (Class of Service: Expedite)

### Bối cảnh tình huống
* **Người báo:** Nhiều giám thị và giảng viên từ 3 cơ sở báo về cùng lúc (đại diện đầu mối: Cô Thu Hà - Trưởng ban Khảo thí).
* **Vấn đề:** Hơn 50 học viên đang làm bài thi cuối kỳ tập trung thì nút *"Nộp bài (Submit)"* bị đơ, bấm vào báo lỗi *"Hệ thống không thể lưu bài thi lúc này"*. Thời gian làm bài chỉ còn 20 phút.
* **Thời điểm giả định:** 10:10 sáng Thứ Bảy.

### Quy trình xử lý 7 bước (Operating Engineer Flow)

#### 1. Reception (10:10 - 10:12)[cite: 5, 30]
* **Ghi nhận:** Tạo Master Ticket `#TK-403` và liên kết các báo cáo trùng lặp từ các phòng thi vào cùng một đầu mối.
* **Đánh giá phạm vi:** Hơn 50 học viên (`> 25 users`) đang bị chặn luồng thi cử trọng yếu[cite: 20, 31].
* **Phân loại (Class of Service):** `Expedite` — Phá vỡ giới hạn WIP (`Break WIP Limit`), gác lại toàn bộ ticket thường để xử lý khẩn cấp ngay lập tức[cite: 20, 31].
* **Người phụ trách:** Hải Nam (Operating Engineer) phối hợp cùng Tech Lead/Dev On-call và báo cáo trực tiếp cho Line Manager / CXO.

#### 2. Initial Response (10:14)[cite: 6, 7, 30]
* **Hành động:** 
  1. Gửi thông báo khẩn cấp cho Cô Thu Hà (Trưởng ban Khảo thí) kèm hướng dẫn trấn an học viên **không tắt trình duyệt** (để giữ bài làm trên máy) và hẹn cập nhật phương án thu bài trong **10 phút (lúc 10:25)**.
  2. Gửi tin nhắn báo cáo sự cố nghiêm trọng (Escalation Alert) tới Engineering Manager và CXO/Director.
* **Email gửi Trưởng ban Khảo thí (10:14):**

Subject: [KHẨN CẤP - MindX Support #TK-403] Tiếp nhận sự cố nộp bài thi cuối kỳ & Hướng dẫn giữ bài tại phòng thi

Kính gửi chị Thu Hà và Ban Giám thị,

Em là Hải Nam từ bộ phận Kỹ thuật Vận hành. Đội ngũ kỹ thuật đã ghi nhận sự cố hơn 50 học viên không bấm nộp được bài thi cuối kỳ và đã kích hoạt quy trình xử lý khẩn cấp cao nhất (Expedite).

Trong lúc đội kỹ thuật đang khôi phục luồng nhận bài (dự kiến trong 10 - 15 phút tới), nhờ chị Hà và các thầy cô giám thị thông báo ngay cho học viên tại các phòng thi:
1. Tuyệt đối KHÔNG đóng tab trình duyệt hoặc đăng xuất để bài làm hiện tại vẫn được lưu trên màn hình.
2. Đội ngũ kỹ thuật đang đồng thời mở cổng thu bài dự phòng và gia hạn thêm thời gian nộp bài trên hệ thống để đảm bảo quyền lợi cho tất cả thí sinh.

Em sẽ cập nhật lại tình trạng khôi phục hoặc gửi link thu bài dự phòng cho chị chậm nhất vào lúc 10:25 sáng nay (sau 10 phút nữa) ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

* **Tin nhắn báo cáo khẩn cho Manager / CXO (10:15):**

[INCIDENT ALERT - EXPEDITE #TK-403]
Kính gửi anh/chị (Engineering Manager & CXO),
- **Sự cố:** Lỗi không nộp được bài thi cuối kỳ trên hệ thống Exam Portal, đang ảnh hưởng đến > 50 học viên tại các phòng thi (ghi nhận lúc 10:10).
- **Trạng thái hiện tại:** Đã hướng dẫn giám thị giữ nguyên màn hình làm bài của học viên, chuẩn bị sẵn Form thu bài dự phòng và đang cùng Dev On-call kiểm tra dịch vụ lưu bài thi trên Azure.
- **Cập nhật tiếp theo:** Em sẽ báo cáo lại kết quả khôi phục vào lúc 10:25 ạ.

#### 3. Diagnosis (10:15 - 10:20)[cite: 8, 30, 33]
* **Điều tra qua Azure App Insights & AKS Logs (Dữ liệu giả lập):**
  * Kiểm tra `exceptions` trên Azure App Insights: Hàng loạt request `POST /api/exam/submit` trả về lỗi `500 Internal Server Error` với thông báo `Redis connection quota exceeded / OOM` (Hàng đợi Redis dùng để đệm bài nộp đồng thời bị đầy bộ nhớ do cấu hình giới hạn memory quá thấp).
* **Nhận định:** Đây là lỗi nghẽn tài nguyên dịch vụ đệm (Redis cache/queue) trên môi trường vận hành khi có hơn 50 bài nộp chứa hình ảnh/code đẩy lên cùng một giây.

#### 4. Resolution (10:20 - 10:28)[cite: 9, 30, 32]
* **Khôi phục nhanh phía vận hành & Phối hợp Dev On-call:**
  * Phối hợp cùng Dev On-call/Infra giải phóng các key rác trên Redis, tăng giới hạn bộ nhớ và khởi động lại pod xử lý hàng đợi (`exam-submission-worker`) trên **Azure Kubernetes Service (AKS)** lúc 10:22[cite: 68].
  * Gia hạn thời gian đóng cổng bài thi trên trang quản trị thêm **30 phút** (từ 10:30 lên 11:00) để học viên thoải mái nộp lại bài.
  * Chuẩn bị sẵn Google Form thu bài dự phòng cho bất kỳ trường hợp máy cá nhân nào bị văng khỏi trình duyệt.

#### 5. Communication (10:24 & 11:05)[cite: 10, 30]
* **Email cập nhật khôi phục hệ thống cho Trưởng ban Khảo thí (10:24 - đúng hẹn 10:25):**

Subject: Re: [KHẨN CẤP - MindX Support #TK-403] Hệ thống nộp bài đã khôi phục & Đã gia hạn thêm 30 phút làm bài

Kính gửi chị Thu Hà và Ban Giám thị,

Em xin cập nhật: Vào lúc 10:23, đội ngũ kỹ thuật đã khắc phục xong tình trạng nghẽn hàng đợi lưu bài thi và đã gia hạn thời gian đóng đề thi thêm 30 phút (đến 11:00) trên hệ thống.

Nhờ các thầy cô giám thị hướng dẫn các bạn học viên bấm lại nút "Nộp bài (Submit)" ngay trên màn hình hiện tại (không cần tải lại trang). Với các bạn có bài làm dạng file rời nếu gặp bất kỳ trở ngại nào trên trình duyệt, giám thị có thể cho học viên nộp qua cổng dự phòng tại đây: [Link Cổng Nộp Bài Dự Phòng].

Em vẫn đang trực theo dõi trực tiếp lưu lượng bài nộp trên hệ thống và sẽ gửi báo cáo đối soát số lượng bài nộp thành công cho chị vào lúc 10:45 ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

* **Email đối soát và xin xác nhận sau ca thi (10:45):**

Subject: Re: [KHẨN CẤP - MindX Support #TK-403] Đối soát kết quả 54/54 bài thi đã nộp thành công

Kính gửi chị Thu Hà,

Theo dữ liệu em vừa đối soát trên hệ thống lúc 10:42, toàn bộ 54/54 học viên của ca thi sáng nay đều đã nộp bài thành công và dữ liệu bài làm đã được lưu trữ đầy đủ.

Nhờ chị Hà kiểm tra lại danh sách bài thu được trên trang Quản lý Khảo thí và phản hồi xác nhận giúp em xem số lượng bài của các phòng thi đã khớp 100% chưa để em hoàn tất báo cáo đóng sự cố nhé ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

* **Tin nhắn báo cáo hoàn tất cho Manager / CXO (11:15):**

[RESOLVED - EXPEDITE #TK-403]
Kính gửi anh/chị (Engineering Manager & CXO),
- Sự cố nộp bài thi cuối kỳ đã được khắc phục hoàn toàn lúc 10:23 (sau 13 phút kể từ khi ghi nhận) bằng cách giải phóng hàng đợi Redis và scale worker trên AKS.
- Toàn bộ 54/54 thí sinh đã nộp bài thành công. Chị Thu Hà (Trưởng ban Khảo thí) đã xác nhận đủ 100% dữ liệu bài thi lúc 11:10.
- Đội kỹ thuật sẽ tiến hành họp Post-mortem để cấu hình ngưỡng cảnh báo (Alert) cho Redis trước các kỳ thi tiếp theo.

#### 6. Follow-Up (11:10)[cite: 10, 11, 30]
* **Ghi nhận xác nhận:** Cô Thu Hà xác nhận qua email lúc 11:10: *"Chị đã kiểm tra trên trang Khảo thí, đủ 54 bài của 3 phòng thi rồi. Cảm ơn đội kỹ thuật đã xử lý rất nhanh!"*.
* **Đóng ticket:** Lưu toàn bộ timeline xử lý, log đối soát 54 bài thi và đóng ticket `#TK-403`.

#### 7. Trend Analysis[cite: 12, 30]
* **Nguyên nhân gốc rễ:** Chưa thiết lập cảnh báo (Alert) trên Azure App Insights khi bộ nhớ Redis vượt ngưỡng 80% trong các khung giờ thi tập trung[cite: 68].
* **Phòng ngừa:** Thiết lập Alert tự động trên Azure Monitor và bổ sung quy trình *"Checklist kiểm tra tải hạ tầng trước kỳ thi cuối kỳ (> 30 thí sinh)"*.

---

## Scenario 04 — Feature Request (Class of Service: Standard)

### Bối cảnh tình huống
* **Người báo:** Chị Phương Thảo (Quản lý Vận hành Cơ sở - Center Manager).
* **Vấn đề:** Đề xuất thêm nút *"Xuất báo cáo chuyên cần tự động theo tuần ra file Excel có biểu đồ màu"* ngay trên giao diện của giáo viên để đỡ tốn công tổng hợp thủ công.
* **Thời điểm giả định:** 14:00 chiều Thứ Tư.

### Quy trình xử lý 7 bước (Operating Engineer Flow)

#### 1. Reception (14:00 - 14:08)[cite: 5, 30]
* **Ghi nhận:** Tạo ticket `#TK-404` thuộc danh mục `Feature Request`.
* **Đánh giá phạm vi:** Yêu cầu cải tiến tính năng mới từ 1 quản lý cơ sở, hệ thống hiện tại không bị lỗi vận hành (`< 5 users`).
* **Phân loại (Class of Service):** `Standard`[cite: 20, 31].
* **Người phụ trách:** Hải Nam (Operating Engineer).

#### 2. Initial Response (14:15)[cite: 6, 7, 30]
* **Hành động:** Gửi email cảm ơn ý kiến đóng góp của chị Thảo, cho biết đang tổng hợp nhu cầu để chuyển sang bộ phận Sản phẩm (Product Team) đồng thời chuẩn bị hướng dẫn cách xuất dữ liệu kết hợp mẫu Excel có sẵn (Workaround), hẹn phản hồi chi tiết trước **16:30 chiều nay**.
* **Email gửi người dùng (Initial Response):**

Subject: [MindX Support #TK-404] Tiếp nhận đề xuất tính năng xuất báo cáo chuyên cần có biểu đồ

Chào chị Thảo,

Em là Nam từ bộ phận Kỹ thuật Vận hành. Cảm ơn chị đã gửi đề xuất rất thực tế về tính năng "Xuất báo cáo chuyên cần tự động kèm biểu đồ màu ra file Excel" cho hệ thống.

Em đã ghi nhận yêu cầu này vào phiếu hỗ trợ #TK-404. Hiện em đang chuẩn bị một giải pháp hỗ trợ tạm thời bằng mẫu bảng tính tự động sẵn có để cơ sở mình sử dụng ngay, đồng thời chuyển đề xuất của chị sang bộ phận Phát triển Sản phẩm (Product Team). Em sẽ gửi hướng dẫn thao tác tạm thời và thông tin phiếu đề xuất cho chị trước 16:30 chiều nay nhé ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

#### 3. Diagnosis (14:20 - 15:00)[cite: 8, 30]
* **Kiểm tra khả năng đáp ứng hiện tại của hệ thống:**
  * Hệ thống Odoo/LMS hiện tại đã có tính năng xuất danh sách điểm danh ra file `.csv` thô, nhưng chưa có tính năng tự vẽ biểu đồ màu trong file xuất ra.
  * Việc xây dựng tính năng xuất file `.xlsx` kèm biểu đồ đòi hỏi thay đổi code backend và nằm trong lộ trình của **Product Team** (ngoài phạm vi can thiệp của Operating Engineer)[cite: 24, 25, 26].
* **Quyết định xử lý:**
  1. Thiết kế một file Google Sheets / Excel Template có cài sẵn công thức và biểu đồ màu (chỉ cần paste dữ liệu `.csv` thô vào tab `Raw_Data` là tab `Dashboard` tự động cập nhật biểu đồ) để làm Workaround cho chị Thảo[cite: 24, 25].
  2. Chuyển giao (Forward/Escalate) yêu cầu tính năng sang Product Team và **tuyệt đối không hứa hẹn lịch triển khai cụ thể** với người dùng.

#### 4. Resolution (15:00 - 15:45)[cite: 9, 30]
* **Chuyển bộ phận Sản phẩm (15:10):** Tạo thẻ đề xuất `#PROD-112` trên bảng backlog của Product Team (Mentor HuyNQ / Product Owner)[cite: 69] kèm mô tả bài toán của cơ sở.
* **Chuẩn bị Workaround (15:30):** Hoàn thiện file mẫu Excel/Google Sheets tự động vẽ biểu đồ từ file CSV điểm danh chuẩn của hệ thống.

#### 5. Communication (15:50)[cite: 10, 30]
* **Email gửi hướng dẫn Workaround & Thông báo đã chuyển Product Team (15:50):**

Subject: Re: [MindX Support #TK-404] Hướng dẫn mẫu báo cáo biểu đồ tạm thời & Chuyển đề xuất tới Product Team

Chào chị Thảo,

Em xin cập nhật kết quả xử lý cho đề xuất tại ticket #TK-404 của chị như sau ạ:

1. **Về đề xuất tính năng trên hệ thống:** Em đã chuyển toàn bộ mô tả nhu cầu của cơ sở mình sang bộ phận Sản phẩm (Product Team - mã đề xuất #PROD-112) để đội ngũ đưa vào danh sách đánh giá cải tiến sản phẩm. Vì lộ trình phát triển tính năng mới cần Product Team cân đối tổng thể theo từng quý nên hiện tại em chưa thể cam kết thời gian tính năng này được triển khai chính thức trên hệ thống, mong chị thông cảm ạ.
2. **Phương án hỗ trợ sử dụng ngay (Workaround):** Để giúp các thầy cô tại cơ sở tiết kiệm thời gian ngay trong tuần này, em đã thiết lập sẵn một file Mẫu Báo Cáo Chuyên Cần Tự Động tại đây: [Link File Mẫu Excel/Google Sheets]. Chị chỉ cần xuất file CSV điểm danh hiện có trên hệ thống và dán vào sheet "Dữ liệu gốc", sheet "Biểu đồ tuần" sẽ tự động hiển thị đầy đủ màu sắc và tỷ lệ chuyên cần mà không cần chỉnh sửa thủ công.

Chị Thảo thử tải dữ liệu cơ sở mình vào file mẫu xem đã đáp ứng tốt nhu cầu báo cáo hiện tại chưa và phản hồi lại giúp em để em xác nhận hoàn tất phiếu hỗ trợ này nhé ạ!

Trân trọng,
Hải Nam — MindX Operating Engineer

#### 6. Follow-Up (16:40)[cite: 10, 11, 30]
* **Ghi nhận xác nhận:** Chị Thảo phản hồi lúc 16:35: *"File mẫu tiện quá Nam ơi, chị dán thử dữ liệu tuần này vào thấy lên biểu đồ đẹp luôn rồi. Khi nào bên Product có thông tin gì mới thì báo thêm cho chị nhé. Em đóng ticket giúp chị nha!"*.
* **Đóng ticket:** Ghi nhận xác nhận của chị Thảo, liên kết mã `#PROD-112` vào ticket `#TK-404` và chuyển trạng thái sang `Closed`.

#### 7. Trend Analysis[cite: 12, 30]
* **Bài học:** Nhiều cơ sở có nhu cầu trực quan hóa dữ liệu từ các file xuất CSV thô của hệ thống.
* **Hành động:** Đưa file *"Mẫu Báo Cáo Chuyên Cần Tự Động"* vào kho tài liệu hướng dẫn chung (Knowledge Base) để các Operating Engineer khác có thể chia sẻ ngay khi gặp yêu cầu tương tự[cite: 11, 25].

---

## Scenario 05 — Multi-user Video Issue (Class of Service: Priority)

### Bối cảnh tình huống
* **Người báo:** Trong vòng 20 phút (từ 14:00 đến 14:20), hệ thống nhận liên tiếp 4 ticket từ các cơ sở và học viên khác nhau báo lỗi *"Không xem được video bài giảng khóa Data Analytics"* (tổng cộng khoảng 18 người dùng bị ảnh hưởng).
* **Chi tiết các báo cáo gửi về:**
  * Báo cáo 1 (8 học viên tại phòng Lab cơ sở Nguyễn Chí Thanh): Video quay vòng tròn liên tục, không tải được hình.
  * Báo cáo 2 (7 học viên học online tại nhà): Mở Bài 4 chương SQL đều hiện thông báo đen màn hình *"Video Error: 403 / Playback Restricted"*.
  * Báo cáo 3 (3 học viên lẻ dùng trình duyệt Safari trên MacBook): Video có tiếng nhưng không bấm tua hoặc bật toàn màn hình được.

### Quy trình xử lý 7 bước (Operating Engineer Flow)

#### 1. Reception (14:00 - 14:22)[cite: 5, 30]
* **Gom nhóm báo cáo (Ticket Grouping):** Nhận thấy nhiều ticket báo lỗi video đổ về cùng lúc với tổng số người ảnh hưởng là **18 học viên** (`5 - 25 users`), kỹ sư lập tức tạo một **Master Ticket `#TK-405`** và gom (merge/link) các ticket lẻ vào để quản lý tập trung.
* **Phân loại (Class of Service):** `Priority`[cite: 20, 31].
* **Người phụ trách:** Hải Nam (Operating Engineer).

#### 2. Initial Response (14:25)[cite: 6, 7, 30]
* **Hành động:** Gửi phản hồi cho các đầu mối báo lỗi (Quản lý lớp & Học viên), xin bổ sung ảnh chụp màn hình thông báo lỗi kèm tên bài học và thiết bị đang dùng (không yêu cầu người dùng mở DevTools kỹ thuật phức tạp), đồng thời hẹn cập nhật hướng khắc phục trước **15:15 chiều nay**.
* **Email gửi đại diện Giáo vụ / Học viên (14:25):**

Subject: [MindX Support #TK-405] Đã tiếp nhận sự cố xem video bài giảng khóa Data Analytics

Chào anh/chị và các bạn học viên,

Em là Nam từ bộ phận Kỹ thuật Vận hành MindX. Hệ thống đã ghi nhận thông tin về việc một số học viên khóa Data Analytics đang gặp lỗi khi xem video bài giảng chiều nay.

Em đã đặt mức độ ưu tiên Cao (Priority) để kiểm tra ngay. Để giúp em khoanh vùng chính xác hơn cho từng trường hợp, nếu thuận tiện anh/chị và các bạn phản hồi giúp em:
1. Ảnh chụp màn hình hiển thị thông báo lỗi.
2. Tên bài học cụ thể đang mở và thiết bị đang sử dụng (máy tính tại cơ sở hay máy cá nhân ở nhà).

Đội kỹ thuật đang kiểm tra máy chủ phát video và sẽ gửi đường dẫn xem bài giảng dự phòng cùng kết quả kiểm tra trước 15:15 chiều nay ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

#### 3. Diagnosis — Phân biệt Nhánh A / B / C bằng dấu hiệu thực tế (14:25 - 14:50)[cite: 8, 30]
Qua đối chiếu ảnh chụp màn hình người dùng gửi về và kiểm tra log trên **Azure App Insights** cùng cổng quản trị Video CDN (Vimeo/Cloudflare Stream), kỹ sư bóc tách sự cố thành **3 nhánh nguyên nhân khác nhau** thay vì đánh đồng là một lỗi:

* **Nhánh A — Sự cố mạng cục bộ / ISP tại cơ sở (Nhóm 8 học viên tại Lab Nguyễn Chí Thanh):**
  * *Dấu hiệu thực tế:* Chỉ xảy ra tại 1 phòng Lab duy nhất; ảnh chụp màn hình báo `ERR_CONNECTION_TIMED_OUT` khi tải domain của Video CDN; kiểm tra từ mạng ngoài và 4G thì video bài đó vẫn chạy mượt mà.
  * *Nguyên nhân:* Đường truyền mạng hoặc cấu hình DNS tại router phòng Lab cơ sở Nguyễn Chí Thanh đang bị chặn/nghẽn kết nối tới máy chủ phân phối video quốc tế.
* **Nhánh B — Lỗi cấu hình quyền / Hết hạn Token nguồn phát Video (Nhóm 7 học viên mở Bài 4 SQL ở các nơi khác nhau):**
  * *Dấu hiệu thực tế:* Tất cả người dùng ở các mạng khác nhau khi mở đúng **Bài 4 chương SQL** đều gặp mã lỗi `403 Forbidden / Domain-level privacy error` trên khung phát video, trong khi Bài 1, 2, 3 vẫn xem bình thường.
  * *Nguyên nhân:* Video Bài 4 mới được đội học thuật tải lại lên hệ thống lưu trữ nhưng quên cấu hình cho phép nhúng (embed whitelist) trên tên miền `lms.mindx.edu.vn`.
* **Nhánh C — Lỗi tương thích trình duyệt / Thiết bị người dùng (Nhóm 3 học viên dùng Safari bản cũ trên macOS):**
  * *Dấu hiệu thực tế:* Chỉ xảy ra trên trình duyệt Safari phiên bản cũ (macOS chưa cập nhật) do cơ chế chặn tự động phát và chính sách cookie chéo (Cross-site tracking) của Safari làm kẹt trình điều khiển player.

#### 4. Resolution — Hướng xử lý phù hợp cho từng nhánh (14:50 - 15:10)[cite: 9, 30, 32]
* **Xử lý Nhánh A (Mạng cơ sở):** Phối hợp với IT cơ sở Nguyễn Chí Thanh đổi cấu hình DNS trên máy Lab/Router sang `8.8.8.8` / `1.1.1.1` và chuyển sang đường truyền cáp quang dự phòng của cơ sở.
* **Xử lý Nhánh B (Lỗi 403 Bài 4 SQL):** Vào trang quản trị Video CMS/Odoo cập nhật lại quyền nhúng domain (Embed Whitelist) cho video Bài 4 chương SQL và làm mới (purge) cache. Đồng thời cung cấp link xem video dự phòng trên Google Drive trong trường hợp cache ở một số khu vực chưa kịp cập nhật.
* **Xử lý Nhánh C (Lỗi trình duyệt Safari):** Hướng dẫn 3 học viên chuyển sang sử dụng trình duyệt **Google Chrome / Microsoft Edge** hoặc tắt tùy chọn *"Prevent cross-site tracking"* trong cài đặt Safari.

#### 5. Communication (15:10)[cite: 10, 30]
* **Email cập nhật kết quả và hướng dẫn chi tiết theo từng nhóm (15:10 - đúng hẹn trước 15:15):**

Subject: Re: [MindX Support #TK-405] Kết quả khắc phục sự cố xem video bài giảng khóa Data Analytics

Chào anh/chị Giáo vụ và các bạn học viên,

Qua quá trình kiểm tra hệ thống, đội ngũ kỹ thuật đã xác định được nguyên nhân cụ thể cho từng nhóm lỗi và hoàn tất xử lý như sau ạ:

1. **Đối với lỗi không mở được video Bài 4 chương SQL (Báo lỗi màn hình đen 403):** Đội kỹ thuật đã cấp lại quyền hiển thị cho video này trên hệ thống. Các bạn vui lòng tải lại trang (nhấn phím F5) để xem bình thường. Ngoài ra, em gửi kèm link video dự phòng của Bài 4 tại đây để các bạn có thể xem ngay nếu trình duyệt còn lưu bộ nhớ cũ: [Link Video Dự Phòng Bài 4].
2. **Đối với phòng Lab tại cơ sở Nguyễn Chí Thanh (Video quay vòng tải chậm):** Đội kỹ thuật đã phối hợp cùng IT cơ sở chuyển sang đường truyền mạng tối ưu hơn. Các bạn tại phòng Lab vui lòng tải lại trang bài học nhé.
3. **Đối với các bạn dùng trình duyệt Safari trên máy Mac:** Do trình duyệt Safari bản cũ giới hạn khung phát video, các bạn vui lòng mở bài học bằng trình duyệt **Google Chrome** để xem mượt mà và sử dụng đầy đủ nút tua/toàn màn hình ạ.

Nhờ anh/chị Giáo vụ và các bạn học viên kiểm tra lại trên máy của mình và phản hồi xác nhận giúp em qua email này để em hoàn tất đóng phiếu hỗ trợ #TK-405 nhé!

Trân trọng,
Hải Nam — MindX Operating Engineer

#### 6. Follow-Up (16:00)[cite: 10, 11, 30]
* **Ghi nhận xác nhận:** Quản lý lớp tại cơ sở Nguyễn Chí Thanh và đại diện các học viên học online đã phản hồi xác nhận xem được video Bài 4 cũng như xem tốt trên Chrome lúc 15:50.
* **Đóng ticket:** Cập nhật trạng thái hoàn tất cho Master Ticket `#TK-405` và toàn bộ các sub-tickets liên quan[cite: 10, 11].

#### 7. Trend Analysis[cite: 12, 30]
* **Bài học:** Khi có nhiều ticket báo cùng một triệu chứng ("không xem được video"), không được vội kết luận chỉ có 1 nguyên nhân duy nhất mà phải phân loại theo dấu hiệu (Mã lỗi 403 vs Timeout mạng vs Trình duyệt).
* **Phòng ngừa:** Viết script tự động kiểm tra quyền Embed của toàn bộ video mới upload lên CMS hàng ngày để ngăn chặn triệt để lỗi Nhánh B[cite: 30, 32].

---

## Scenario 06 — Fixed Deadline Request (Class of Service: Fixed Deadline)

### Bối cảnh tình huống
* **Người báo:** Anh Trần Quốc Tuấn (Operations Director / Giám đốc Vận hành).
* **Vấn đề:** Lúc 13:30 chiều, anh Tuấn gửi yêu cầu trích xuất và tổng hợp *"Báo cáo đối soát tỷ lệ hoàn thành khóa học, điểm đánh giá giảng viên và doanh thu thực thu của toàn bộ 12 cơ sở trong Quý 3"* để trình bày trong cuộc họp Hội đồng Quản trị (BOD) vào lúc **17:00 chiều cùng ngày**.
* **Thời điểm giả định:** 13:30 chiều Thứ Năm (Còn 3 tiếng 30 phút trước giờ họp).

### Quy trình xử lý 7 bước (Operating Engineer Flow)

#### 1. Reception (13:30 - 13:35)[cite: 5, 30]
* **Ghi nhận:** Tạo ticket `#TK-406`.
* **Phân loại (Class of Service):** `Fixed Deadline` (Hạn chót cố định lúc 17:00 chiều nay)[cite: 20, 31]. 
  * *Đánh giá mức độ rủi ro của Deadline:* Khối lượng dữ liệu gồm 3 mảng lớn trên 12 cơ sở trong khi chỉ còn 3.5 tiếng $\rightarrow$ Thời hạn ở mức **Không an toàn (`Unsafe`)**, cần xử lý với độ ưu tiên tương đương **Priority** (và sẵn sàng nâng lên **Expedite** nếu phát sinh lỗi dữ liệu)[cite: 20, 21].
* **Người phụ trách:** Hải Nam (Operating Engineer).

#### 2. Initial Response & Làm rõ phạm vi, chốt nội dung ưu tiên (13:42)[cite: 6, 7, 8, 30]
* **Quyết định vận hành:** Thay vì cắm đầu vào xuất dữ liệu ngay và có nguy cơ trễ hạn lúc 17:00 hoặc xuất sai ý lãnh đạo, kỹ sư phản hồi ngay để:
  1. Làm rõ phạm vi dữ liệu (định nghĩa "hoàn thành khóa học" và "doanh thu thực thu").
  2. Đề xuất **chốt thứ tự ưu tiên bàn giao theo từng phần (Incremental delivery)**: Bàn giao trước 2 phần cốt lõi dễ trích xuất nhất trước 15:00, phần doanh thu cần xin quyền phê duyệt dữ liệu tài chính sẽ bàn giao trước 16:15.
* **Email gửi Operations Director (13:42):**

Subject: [MindX Support #TK-406] Tiếp nhận & Thống nhất phạm vi Báo cáo Quý 3 phục vụ họp BOD (Deadline 17:00)

Kính gửi anh Tuấn,

Em là Hải Nam từ bộ phận Kỹ thuật Vận hành. Em đã tiếp nhận yêu cầu trích xuất bộ Báo cáo Quý 3 của 12 cơ sở để phục vụ cuộc họp BOD lúc 17:00 chiều nay của anh.

Để đảm bảo số liệu chính xác tuyệt đối và kịp tiến độ trước giờ họp, em xin phép làm rõ nhanh phạm vi và đề xuất lộ trình bàn giao theo thứ tự ưu tiên như sau ạ:

1. **Làm rõ tiêu chí dữ liệu:**
   - Phần "Tỷ lệ hoàn thành khóa học": Mình tính theo số lớp đã kết thúc trong Quý 3 (từ 01/07 đến 30/09) trên hệ thống LMS đúng không ạ?
   - Phần "Doanh thu thực thu": Do dữ liệu này nằm trên phân hệ Kế toán hạn chế quyền truy cập, em sẽ gửi yêu cầu xin phê duyệt trích xuất tới chị Hương (Kế toán trưởng) và cc anh trong email để được duyệt nhanh nhất ạ.
2. **Thống nhất các mốc tiến độ bàn giao (Timeline):**
   - **Mốc 1 (Trước 15:00):** Em gửi trước cho anh bảng dữ liệu Tỷ lệ hoàn thành khóa học & Điểm đánh giá giảng viên của 12 cơ sở.
   - **Mốc 2 (Trước 16:15):** Em hoàn tất ghép nối phần Doanh thu thực thu sau khi Kế toán duyệt và gửi bản tổng hợp cuối cùng để anh có 45 phút rà soát trước giờ họp.

Anh Tuấn xác nhận giúp em tiêu chí trên để em tiến hành trích xuất ngay nhé ạ. Em sẽ gửi bản cập nhật đầu tiên cho anh trước 15:00 chiều nay.

Trân trọng,
Hải Nam — MindX Operating Engineer

#### 3. Diagnosis & Xin phê duyệt dữ liệu (13:50 - 15:15)[cite: 8, 30]
* **Xác nhận từ Director (13:48):** Anh Tuấn phản hồi đồng ý với tiêu chí và lộ trình 2 mốc bàn giao.
* **Xin phê duyệt dữ liệu (Data Approval - 13:50):** Gửi tin nhắn/email xin phép Kế toán trưởng (Finance Manager) cấp quyền đọc view báo cáo doanh thu Quý 3 trên Odoo (có đính kèm xác nhận của Operations Director). Kế toán trưởng phê duyệt lúc 14:15.
* **Kiểm tra dữ liệu & Phát hiện vấn đề phát sinh (14:15 - 15:10):**
  * **Mốc 1 (14:55):** Đã trích xuất xong dữ liệu Hoàn thành khóa học và Đánh giá giảng viên của 12/12 cơ sở từ Odoo Dashboard, gửi đúng hẹn lúc 14:55 cho anh Tuấn.
  * **Vấn đề phát sinh ở Mốc 2 (15:10):** Khi chạy truy vấn tổng hợp Doanh thu thực thu Quý 3, phát hiện dữ liệu tháng 9 của **2 cơ sở mới mở (Cơ sở 11 và 12)** chưa được đồng bộ tự động từ cổng thanh toán sang bảng tổng hợp của Odoo (bị khuyết mất 15 ngày cuối tháng 9).
* **Quyết định khi gặp rủi ro trễ hạn:** Nâng mức xử lý lên **Expedite**[cite: 20]. Không chờ đội Dev sửa job đồng bộ tự động (vì sẽ trễ giờ họp 17:00), mà chủ động thông báo ngay cho anh Tuấn về vấn đề phát sinh kèm phương án xử lý: xuất dữ liệu chuẩn của 10 cơ sở trước, còn 2 cơ sở bị thiếu sẽ kết xuất trực tiếp từ bảng đối soát gốc của bộ phận Kế toán để ghép vào.

#### 4. Resolution (15:15 - 16:10)[cite: 9, 30]
* **Cập nhật rủi ro & Phương án dự phòng (15:15):** Báo ngay cho anh Tuấn và phối hợp cùng chuyên viên Kế toán lấy file chốt sổ tháng 9 đã kiểm toán của Cơ sở 11 & 12 để chuẩn hóa và gộp vào báo cáo tổng.
* **Hoàn tất bộ báo cáo (16:05):** Kiểm tra chéo (cross-check) toàn bộ con số của 12 cơ sở, định dạng bảng biểu rõ ràng để anh Tuấn đưa thẳng vào slide họp BOD.

#### 5. Communication (14:55, 15:15 & 16:10)[cite: 10, 30]
* **Email bàn giao Mốc 1 đúng hẹn (14:55):**

Subject: Re: [MindX Support #TK-406] [Mốc 1/2] Bàn giao dữ liệu Hoàn thành khóa học & Đánh giá giảng viên Quý 3

Kính gửi anh Tuấn,

Đúng theo lộ trình đã thống nhất, em xin gửi anh trước Phần 1 và Phần 2 của báo cáo (bao gồm Tỷ lệ hoàn thành khóa học và Điểm đánh giá giảng viên Quý 3 của toàn bộ 12 cơ sở) trong file đính kèm ạ.

Hiện tại chị Hương (Kế toán trưởng) đã duyệt quyền dữ liệu tài chính và em đang tiến hành tổng hợp tiếp Phần 3 (Doanh thu thực thu). Em sẽ cập nhật lại cho anh chậm nhất vào lúc 15:30 chiều nay ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

* **Email thông báo vấn đề phát sinh & Phương án xử lý (15:15):**

Subject: Re: [MindX Support #TK-406] Cập nhật xử lý dữ liệu Doanh thu của 2 cơ sở mới & Phương án đảm bảo tiến độ 16:15

Kính gửi anh Tuấn,

Trong quá trình tổng hợp dữ liệu Doanh thu Quý 3, em phát hiện số liệu 15 ngày cuối tháng 9 của 2 cơ sở mới (Cơ sở 11 và 12) chưa được đồng bộ tự động lên bảng Dashboard chung, trong khi số liệu của 10 cơ sở còn lại đã đầy đủ 100%.

Để không làm ảnh hưởng đến thời gian chuẩn bị họp lúc 17:00 của anh, em xin phép áp dụng phương án sau:
1. Em đính kèm ngay trong email này bản báo cáo đã có đủ doanh thu của 10 cơ sở lớn để anh xem trước.
2. Với 2 cơ sở mới, em đang trực tiếp lấy bảng sổ cái đã khóa sổ từ bộ phận Kế toán để ghép thủ công vào báo cáo tổng.

Em cam kết sẽ gửi bản báo cáo hoàn chỉnh đủ 12/12 cơ sở cho anh đúng mốc 16:15 như đã hẹn ạ.

Trân trọng,
Hải Nam — MindX Operating Engineer

* **Email bàn giao bản hoàn chỉnh trước Deadline (16:10):**

Subject: Re: [MindX Support #TK-406] [Hoàn tất] Bàn giao trọn bộ Báo cáo Đối soát Quý 3 (Đủ 12/12 cơ sở)

Kính gửi anh Tuấn,

Em đã phối hợp cùng bộ phận Kế toán bổ sung và đối soát khớp hoàn toàn số liệu doanh thu tháng 9 của Cơ sở 11 và 12. Em xin gửi anh bản Báo cáo Tổng hợp Quý 3 hoàn chỉnh của cả 12/12 cơ sở trong file đính kèm (gồm cả bản Excel chi tiết và bảng tóm tắt để chèn vào Slide).

Anh Tuấn kiểm tra qua số liệu trong file xem đã đầy đủ theo đúng yêu cầu trình bày với BOD chưa và phản hồi xác nhận giúp em nhé ạ. Em vẫn trực máy từ giờ đến hết cuộc họp 17:00 để hỗ trợ anh ngay nếu cần trích xuất thêm bất kỳ chỉ số phụ nào.

Trân trọng,
Hải Nam — MindX Operating Engineer

#### 6. Follow-Up (16:30)[cite: 10, 11, 30]
* **Ghi nhận xác nhận:** Lúc 16:28, anh Tuấn phản hồi: *"Anh đã xem file tổng hợp cuối cùng, số liệu rõ ràng và kịp giờ anh đưa vào slide họp BOD rồi. Cảm ơn em đã chủ động xử lý nhanh phần dữ liệu của 2 cơ sở mới nhé!"*.
* **Đóng ticket:** Lưu trữ các email phê duyệt dữ liệu của Kế toán trưởng, xác nhận của anh Tuấn và đóng ticket `#TK-406`[cite: 10, 11].

#### 7. Trend Analysis[cite: 12, 30, 33]
* **Nguyên nhân gốc rễ:** Luồng đồng bộ doanh thu tự động từ cổng thanh toán về Odoo Dashboard chưa được cấu hình mã chi nhánh cho 2 cơ sở mới mở (Cơ sở 11 và 12).
* **Phòng ngừa & Tự động hóa:** Tạo ticket cho đội Data/Backend bổ sung mapping cho 2 cơ sở mới; đồng thời xây dựng sẵn mẫu Dashboard "Báo cáo Tổng hợp Quý dành cho BOD" trên Odoo để các kỳ họp quý sau có thể xuất dữ liệu chỉ bằng 1 cú nhấp chuột[cite: 33].