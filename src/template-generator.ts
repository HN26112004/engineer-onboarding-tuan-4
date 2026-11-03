export interface EmailContext {
  customerName: string;
  ticketId: string;
  issueSummary: string;
  expectedTimeframe?: string;
  rootCause?: string;
  solution?: string;
}

export class TemplateGenerator {
  static initialResponse(context: EmailContext): string {
    const timeframe = context.expectedTimeframe || '2-4 giờ làm việc';
    return `Subject: [Ticket #${context.ticketId}] Tiếp nhận yêu cầu: ${context.issueSummary}

Xin chào ${context.customerName},

Cảm ơn bạn đã liên hệ với đội ngũ Hỗ trợ Kỹ thuật của MindX. Chúng tôi đã ghi nhận sự cố "${context.issueSummary}" của bạn trên hệ thống.

Đội ngũ kỹ thuật đang tiến hành chẩn đoán và xử lý. Dự kiến bạn sẽ nhận được thông tin phản hồi tiếp theo trong vòng ${timeframe}.

Nếu có thêm tài liệu hoặc ảnh chụp màn hình bổ sung, bạn vui lòng phản hồi trực tiếp qua email này.

Trân trọng,
MindX Support Team`;
  }

  static resolution(context: EmailContext): string {
    return `Subject: [Ticket #${context.ticketId}] Giải quyết sự cố: ${context.issueSummary}

Xin chào ${context.customerName},

Đội ngũ kỹ thuật xin thông báo sự cố "${context.issueSummary}" của bạn đã được khắc phục hoàn toàn.

- Nguyên nhân: ${context.rootCause || 'Đã được tối ưu và sửa lỗi từ phía máy chủ'}
- Giải pháp: ${context.solution || 'Cập nhật bản vá và xác thực luồng dữ liệu'}

Bạn vui lòng kiểm tra lại hệ thống và xác nhận giúp chúng tôi xem sự cố đã được xử lý triệt để hay chưa nhé.

Nếu hài lòng, bạn có thể dành 1 phút để lại đánh giá để chúng tôi nâng cao chất lượng dịch vụ.

Trân trọng,
MindX Support Team`;
  }
}