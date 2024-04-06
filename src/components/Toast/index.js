import './toast.css'
export default function Toast() {
  return (
    <div className="col-xl-5 col-lg-6 mb-2 animation" style={{ position: 'fixed', top: '66px', left: '10px', zIndex: '9999' }}>
      <div style={{ backgroundColor: '#fff' }} className="toast show fade toast-success" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-color="success" data-mdb-autohide="false">
        <div style={{ backgroundColor: '#fff' }} className="toast-header toast-success">
          <i className="fas fa-check fa-lg me-2"></i>
          <strong className="me-auto">Buy success fully</strong>
          <button type="button" className="btn-close" data-mdb-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">Access history for show cart buyed</div>
      </div>
    </div>
  )
}