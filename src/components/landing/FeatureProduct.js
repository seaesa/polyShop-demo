import { Link } from "react-router-dom";

export default function FeatureProduct({ images, name, slug, detailPrice }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={images[0]}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text text-center text-muted">{detailPrice}</p>
          <div className="d-grid gap-2">
            <Link to={`/products/${slug}`} className="btn btn-outline-dark" replace>
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}