import Banner from "./Banner";
import FeatureProduct from "./FeatureProduct";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { query, orderBy, limit, getDocs, collection } from "firebase/firestore";
import DB from '../../db/firebase'
export default function Landing() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    (async () => {
      const getQuery = query(collection(DB, "products"), orderBy("timestamp", "desc"), limit(6));
      const data = await getDocs(getQuery);
      setProducts(data.docs.map(doc => ({ ...doc.data(), slug: doc.id })))
    })();
  }, [])
  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5">
          gói cước trả trước được thiết kế phù hợp với người không có nhu cầu nhắn tin nhiều và gọi khoảng từ 30 tới 135 phút/tháng. Ngoài chất lượng cuộc gọi hoàn hảo, bạn sẽ hoàn toàn kiểm soát chi phí kết nối phát sinh.


        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-primary" replace>
            khám phá sản phẩm
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">Mới</h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {products.length > 0 ? products.map((product, index) => <FeatureProduct {...product} key={index} />)
            : <></>
          }
        </div>
      </div>
      <div className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3">Follow us on</h5>
        <div className="d-flex justify-content-center">
          <Link target="_blank" rel="noreferrer" to='https://www.facebook.com/haipeaces/' className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </Link>
          <Link target="_blank" rel="noreferrer" to=''>
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </Link>
          <Link target="_blank" rel="noreferrer" to='' className="ms-3">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </Link>
        </div>
      </div>
    </>
  );
} 
