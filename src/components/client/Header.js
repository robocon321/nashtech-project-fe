import { useContext } from "react";
import { Container } from "@mui/material";
import {  Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free-solid";

import styles from "./Header.module.css";
import { AppContext } from "../../contexts/providers/AppProvider";
import { ClientLayoutContext } from "../../contexts/providers/client/ClientLayoutProvider";

const Header = (props) => {
  const { appState, logout } = useContext(AppContext);
  const { clientState, onSearch } = useContext(ClientLayoutContext);
  
  return (
    <header className={styles["header"]}>
      <Container>
        <div className={styles["top-header"]}>
          <div className={styles["col-top-header"]}>
            <div className={styles["contact-top-header"]}>
              <span className={styles["icon-top-header"]}>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
              </span>
              <span>
                <b>Email: </b>{" "}
                <span className={styles["content-contact-top-header"]}>
                  robocon321n@gmail.com
                </span>
              </span>
            </div>
            <div className={styles["contact-top-header"]}>
              <span className={styles["icon-top-header"]}>
                <FontAwesomeIcon icon="fa-solid fa-phone" />
              </span>
              <span>
                <b>Phone: </b>{" "}
                <span className={styles["content-contact-top-header"]}>
                  0354 512 411
                </span>
              </span>
            </div>
          </div>
          <div className={styles["col-top-header"]}>
            <div className="dropdown">
              {
                appState.user.id ? 
                (
                  <>
                  <span>
                    <FontAwesomeIcon icon="fa-solid fa-user" /> {appState.user.fullname}
                  </span>
                  <div className="dropdown-content bg-white">
                    <Link to="/detail-account"><p>My account</p></Link>
                    <Link to="/cart"><p>Cart</p></Link>
                    <Link to="/wishlist"><p>Wishlist</p></Link>
                    <Link to="/order-history"><p>Order history</p></Link>
                    <Link to="/address"><p>My address</p></Link>
                    <Link to="/"><p onClick={logout}>Logout</p></Link>
                  </div>
                  </>
                )
                :
                (
                  <>
                    <span>
                      <FontAwesomeIcon icon="fa-solid fa-user" /> My Account
                    </span>
                    <div className="dropdown-content bg-white">
                      <Link to="/sign-up"><p>Register</p></Link>
                      <Link to="/sign-in"><p>Login</p></Link>
                    </div>
                  </>
                )
              }
            </div>
            <span className={styles["divide-top-header"]}> | </span>
            <div className="dropdown">
              <span>
                <FontAwesomeIcon icon="fa-solid fa-globe" /> Language
              </span>
              <div className="dropdown-content bg-white">
                <p>Vietnamese</p>
                <p>English</p>
              </div>
            </div>
            <span className={styles["divide-top-header"]}> | </span>
            <div className="dropdown">
              <span>
                <FontAwesomeIcon icon="fa-solid fa-dollar-sign" /> USD
              </span>
              <div className="dropdown-content bg-white">
                <p>VND</p>
                <p>USD</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles["center-header"]}>
          <div className={styles["col-center-header"]}>
            <img
              className="logo-center-header"
              src="/images/logo.png"
              alt="Not found"
            />
          </div>
          <div className={styles["col-center-header"]}>
            <div className={styles["filterbox-center-header"]}>
              <div className={`dropdown ${styles["category-center-header"]}`}>
                <span>All categories</span>
                <div className={`dropdown-content bg-white ${styles["dropdown-content"]}`}>
                  {
                    clientState.categories.map(item => (
                      <a href="#" key={item.id}><p>{item.name}</p></a>                      
                    ))
                  }
                </div>
              </div>
              <div className={styles["divide-center-header"]}> | </div>
              <input type="text" placeholder="Search entire store here" id="search" />
            </div>
            <button className={"bg-green " + styles["btn-search"]} onClick={onSearch}>
              Search
            </button>
          </div>
          <div className={styles["col-center-header"]}>
            <div className={"bg-blue " + styles["btn-cart-header"]}>
              <Link to="/cart">CART: 0 item(s)</Link>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles["bottom-header"]}>
        <Container>
        <ul className={styles["menu-bottom-header"]}>
            <li><Link className={styles['active']} to="/">Home</Link></li>
            <li><Link to="/product">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
