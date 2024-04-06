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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-primary" replace>
            Browse products
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>
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
          <a target="_blank" rel="noreferrer" href={process.env.REACT_APP_FACEBOOK} className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a target="_blank" rel="noreferrer" href={process.env.REACT_APP_INSTAGRAM}>
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a target="_blank" rel="noreferrer" href={process.env.REACT_APP_TWITTER} className="ms-3">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
} 
