import { VNPay, ignoreLogger } from 'vnpay';
import { ENV } from './env';

export const vnpay = new VNPay({
  tmnCode: 'LXTERUI2',
  secureSecret: '8YRZARZP97FYGQ21QI726M9UDS73N12C',
  vnpayHost: 'https://sandbox.vnpayment.vn',
  testMode: true,
  hashAlgorithm: 'SHA512',
  enableLog: true,
  loggerFn: ignoreLogger,
});
vnpay.urlReturn = `${ENV.urlWebsite || ENV.urlWebsite2}/verify-payment`