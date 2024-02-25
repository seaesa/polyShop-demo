import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from '../../assets/image/logo.png';
import { useSelector } from 'react-redux';
import { selectCart } from './../../redux/cart/cartSlice'
export default function Header() {
  const cartQuantity = useSelector(selectCart)
  return (
    <header className="">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" >
            <div style={{ width: '100px' }}>
              <img className="mw-100" src={logo} alt="Logo Poly Shop" />
            </div>
          </Link>
          <div className={"navbar-collapse offcanvas-collapse"}>
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/products" className="nav-link" replace >
                  Explore
                </Link>
              </li>
            </ul>
            <Link to='/cart'>
              <button type="button" className="btn btn-outline-dark me-3 d-none d-lg-inline">
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                <span className="ms-3 badge rounded-pill bg-dark">{cartQuantity.length}</span>
              </button>
            </Link>
            <ul className="navbar-nav mb-2 mb-lg-0">
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
                    <Link to="/" className="dropdown-item" >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item" >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin" className="dropdown-item" >
                      Admin
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}