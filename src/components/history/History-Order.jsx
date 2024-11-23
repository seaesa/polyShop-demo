import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

export const HistoryOrder = () => {
  const { buyed } = useSelector(state => state.cart)
  return (
    <>
      <div className="container">
        <div >lịch sử mua hàng trên thiết bị này</div>
        {buyed.length && buyed.map(buy => {
          return (

            <div key={buy.date} className="d-flex flex-column bg-light shadow-lg my-3">
              <div className='d-flex align-items-center'>
                <div className="me-2">
                  <div style={{ width: '100px' }} className="bg-image hover-overlay shadow-1-strong rounded" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid" />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </div>
                </div>

                <div className="">
                  <p className='m-0'>số tiền: <span>{buy.amount}k</span></p>
                  <p className='m-0'>mã giao dịch: <span>{buy.payment_code}</span></p>
                  <p className='m-0'>ngày giao dịch: <span>{dayjs(buy.date).format('YYYY MMMM DD')}</span></p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}