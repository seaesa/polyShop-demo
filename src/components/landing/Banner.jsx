function BannerIncidator(props) {
  return (
    <button
      type="button"
      data-bs-target="#bannerIndicators"
      data-bs-slide-to={props.index}
      className={props.active ? "active" : ""}
      aria-current={props.active}
    />
  );
}

function BannerImage(props) {
  return (
    <div
      className={"carousel-item " + (props.active ? "active" : "")}
      data-bs-interval="5000" >
      <div
        className="ratio"
        style={{ "--bs-aspect-ratio": "50%", maxHeight: "460px", height: '460px' }} >
        <img
          className="d-block w-100 h-100 bg-dark cover"
          alt=""
          src={props.image}
        />
      </div>
      <div className="carousel-caption d-none d-lg-block">
        <h5>Mạng xài thả ga</h5>
        <p>đến với chúng tôi. Ngoài chất lượng cuộc gọi hoàn hảo, bạn sẽ hoàn toàn kiểm soát chi phí kết nối phát sinh.</p>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div
      id="bannerIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ marginTop: "56px" }}
    >
      <div className="carousel-indicators">
        <BannerIncidator index="0" active={true} />
        <BannerIncidator index="1" />
        <BannerIncidator index="2" />
      </div>
      <div className="carousel-inner">
        <BannerImage image='https://viettel-internet.com/img_data/images/285126593615_banner-vt2.png' active={true} />
        <BannerImage image='https://banhangvnpt.vn/Uploads/images/2023/DT90%20Vinaphone.jpg' />
        <BannerImage image='https://viettelinternet.vn/wp-content/uploads/2021/09/st10k-1.jpg' />
      </div>
    </div>
  );
}

export default Banner;
