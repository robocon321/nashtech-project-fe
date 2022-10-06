import { Container } from "@mui/material";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free-solid";

const Header = (props) => {
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
              <span>
                <FontAwesomeIcon icon="fa-solid fa-user" /> My Account
              </span>
              <div className="dropdown-content bg-white">
                <p>Register</p>
                <p>Login</p>
              </div>
            </div>
            <span className={styles["divide-top-header"]}> | </span>
            <div>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-heart" /> Wishlist
              </span>
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
              src="images/logo.png"
              alt="Not found"
            />
          </div>
          <div className={styles["col-center-header"]}>
            <div className={styles["filterbox-center-header"]}>
              <div className={`dropdown ${styles["category-center-header"]}`}>
                <span>All categories</span>
                <div className="dropdown-content bg-white">
                  <p>Category 1</p>
                  <p>Category 2</p>
                  <p>Category 3</p>
                  <p>Category 4</p>
                </div>
              </div>
              <div className={styles["divide-center-header"]}> | </div>
              <input type="text" placeholder="Search entire store here" />
            </div>
            <button className={"bg-green " + styles["btn-search"]}>
              Search
            </button>
          </div>
          <div className={styles["col-center-header"]}>
            <div className={"bg-blue " + styles["btn-cart-header"]}>
              <span>CART: 0 item(s)</span>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles["bottom-header"]}>
        <Container>
        <ul className={styles["menu-bottom-header"]}>
            <li><a className={styles['active']} href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
