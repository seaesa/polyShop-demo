import { useSearchParams } from 'react-router-dom'
import { vnpay } from '../../config/vnpay';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { historyBuyed } from '../../redux/cart/cartSlice';

export const VerifyPayment = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch()
  if (params.size) {
    useEffect(() => {
      const paymentHistory = vnpay.verifyReturnUrl(Object.fromEntries(params))
      dispatch(historyBuyed({
        code: paymentHistory.vnp_TmnCode,
        amount: paymentHistory.vnp_Amount,
        message: paymentHistory.vnp_OrderInfo,
        payment_code: paymentHistory.vnp_TxnRef,
        date: paymentHistory.vnp_PayDate
      }))
      window.close()
    }, [])
  }
  return (<></>)
}