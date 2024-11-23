import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from '../../assets/image/logo.png';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cart/cartSlice'
export default function Header() {
  const { cart } = useSelector(selectCart)
  return (
    <header className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" >
          <div style={{ width: '100px' }}>
            <img className="mw-100" src={logo} alt="Logo Poly Shop" />
          </div>
        </Link>
        <div className='d-flex flex-grow-1 justify-content-center align-items-center'>
          <ul className="me-auto mb-0">
            <li className="nav-item">
              <Link to="/products" className="nav-link" replace >
                Khám phá
              </Link>
            </li>
          </ul>
          <div className='d-flex align-items-center'>
            <Link to='/cart'>
              <button type="button" className="btn btn-outline-dark me-3 d-inline">
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                <span className="ms-3 badge rounded-pill bg-dark">{cart.length}</span>
              </button>
            </Link>
            <ul className="m-0">
              <li className="nav-item dropdown">
                <a href="!#" className="nav-link dropdown-toggle" data-toggle="dropdown" id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={["fas", "user-alt"]} />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown" >
                  <li>
                    <Link to="/admin" className="dropdown-item" >
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link to="/history" className="dropdown-item" >
                      History
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}