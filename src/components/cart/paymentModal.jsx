import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { vnpay } from '../../config/vnpay'
import { getIpAddress, genarateId } from '../../utils/utils'
import { ProductCode, VnpLocale } from 'vnpay';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setHistory } from '../../redux/cart/cartSlice';
export default function PaymentModal({ modal, setModal, amount }) {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const handlePayment = (data) => {
    const paymentUrl = vnpay.buildPaymentUrl({
      vnp_Amount: amount,
      vnp_IpAddr: getIpAddress(),
      vnp_TxnRef: genarateId(10),
      vnp_OrderInfo: data?.payment_infomation || ' ',
      vnp_OrderType: ProductCode.CardCode,
      vnp_ReturnUrl: vnpay.urlReturn,
      vnp_Locale: VnpLocale.VN,
    });
    window.open(paymentUrl)
  }
  useEffect(() => {
    const listenrEvent = (event) => {
      if (event.key === 'buyed') {
        console.log(event)
        toast.success('Thanh Toán Thành Công')
        setModal(false)
        dispatch(setHistory(JSON.parse(event.newValue)))
      }
    }
    window.addEventListener('storage', listenrEvent)
    return () => window.removeEventListener('storage', listenrEvent)
  }, [])
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#35558a" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100 text-center">
            <MDBCol>
              <MDBModal open={modal} onClose={() => setModal(false)} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalBody className="text-start text-black p-4">
                      <MDBTypography
                        tag="h4"
                        className="mb-5"
                        style={{ color: "#35558a" }}
                      >
                        Cảm ơn bạn đã đặt hàng
                      </MDBTypography>
                      <p className="mb-0" style={{ color: "#35558a" }}>
                        Chi tiết thanh toán
                      </p>
                      <hr
                        className="mt-2 mb-4"
                        style={{
                          height: "0",
                          backgroundColor: "transparent",
                          opacity: ".75",
                          borderTop: "2px dashed #9e9e9e",
                        }}
                      />

                      <div className="d-flex justify-content-between">
                        <p className="fw-bold mb-0">Ether Chair(Qty:1)</p>
                        <p className="text-muted mb-0">{amount}k</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="small mb-0">phí ship</p>
                        <p className="small mb-0">$0</p>
                      </div>

                      <div className="d-flex justify-content-between pb-1">
                        <p className="small">Thuế</p>
                        <p className="small">$0</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">Tổng</p>
                        <p className="fw-bold" style={{ color: "#35558a" }}>
                          {amount}k
                        </p>
                      </div>
                      <MDBInput value={message} onChange={e => setMessage(e.target.value)} label='nhập lời nhắn gửi' />
                    </MDBModalBody>

                    <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
                      <MDBBtn
                        size="lg"
                        style={{ backgroundColor: "#35558a" }}
                        className="mb-1"
                        onClick={handlePayment}
                      >
                        Thanh Toán
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}