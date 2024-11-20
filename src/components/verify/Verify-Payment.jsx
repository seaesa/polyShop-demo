import { useSearchParams } from 'react-router-dom'
import { vnpay } from '../../config/vnpay';
import { useEffect } from 'react';

export const VerifyPayment = () => {
  const [params] = useSearchParams();
  useEffect(() => {
    vnpay.verifyReturnUrl(Object.fromEntries(params))
    window.close()
  }, [])
  return (
    <></>
  )
}