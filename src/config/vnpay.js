import { VNPay, ignoreLogger } from 'vnpay';

export const vnpay = new VNPay({
  tmnCode: 'LXTERUI2',
  secureSecret: '8YRZARZP97FYGQ21QI726M9UDS73N12C',
  vnpayHost: 'https://sandbox.vnpayment.vn',
  testMode: true, // tùy chọn
  hashAlgorithm: 'SHA512', // tùy chọn

  /**
   * Sử dụng enableLog để bật/tắt logger
   * Nếu enableLog là false, loggerFn sẽ không được sử dụng trong bất kỳ phương thức nào
   */
  enableLog: true, // tùy chọn

  /**
   * Hàm `loggerFn` sẽ được gọi để ghi log
   * Mặc định, loggerFn sẽ ghi log ra console
   * Bạn có thể ghi đè loggerFn để ghi log ra nơi khác
   *
   * `ignoreLogger` là một hàm không làm gì cả
   */
  loggerFn: ignoreLogger, // tùy chọn
});