import { useContext } from "react";
import { Alert, Container, Snackbar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free-solid";

import styles from "./Header.module.css";
import { AppContext } from "../../contexts/providers/AppProvider";
import { ClientLayoutContext } from "../../contexts/providers/client/ClientLayoutProvider";

const Header = (props) => {
  const { appState, logout } = useContext(AppContext);
  const { clientState, onSearch, resetStatus, changeLang, t, lang } =
    useContext(ClientLayoutContext);
  const location = useLocation();

  return (
    <header className={styles["header"]}>
      <Snackbar
        open={clientState.status.message !== ""}
        onClose={resetStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={resetStatus}
          severity={clientState.status.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {clientState.status.message}
        </Alert>
      </Snackbar>
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
                <b>{t('phone')}: </b>{" "}
                <span className={styles["content-contact-top-header"]}>
                  0354 512 411
                </span>
              </span>
            </div>
          </div>
          <div className={styles["col-top-header"]}>
            <div className="dropdown">
              {appState.user.id ? (
                <>
                  <span>
                    <FontAwesomeIcon icon="fa-solid fa-user" />{" "}
                    {appState.user.fullname}
                  </span>
                  <div className="dropdown-content bg-white">
                    <Link to="/detail-account">
                      <p>{t('my_account')}</p>
                    </Link>
                    <Link to="/cart">
                      <p>{t('cart')}</p>
                    </Link>
                    <Link to="/wishlist">
                      <p>{t('wishlist')}</p>
                    </Link>
                    <Link to="/order-history">
                      <p>{t('order_history')}</p>
                    </Link>
                    <Link to="/address">
                      <p>{t('my_address')}</p>
                    </Link>
                    <Link to="/">
                      <p onClick={logout}>{t('logout')}</p>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <span>
                    <FontAwesomeIcon icon="fa-solid fa-user" /> {t('my_account')}
                  </span>
                  <div className="dropdown-content bg-white">
                    <Link to="/sign-up">
                      <p>{t('register')}</p>
                    </Link>
                    <Link to="/sign-in">
                      <p>{t('login')}</p>
                    </Link>
                  </div>
                </>
              )}
            </div>
            <span className={styles["divide-top-header"]}> | </span>
            <div className="dropdown">
              <span>
                <FontAwesomeIcon icon="fa-solid fa-globe" /> {t('language')}
              </span>
              <div className="dropdown-content bg-white">
                <p onClick={() => changeLang('vi')}>{t('vietnamese')}</p>
                <p onClick={() => changeLang('en')}>{t('english')}</p>
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
                <span>{t('all_categories')}</span>
                <div
                  className={`dropdown-content bg-white ${styles["dropdown-content"]}`}
                >
                  {clientState.categories.map((item) => (
                    <a href="#" key={item.id}>
                      <p>{item.name}</p>
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles["divide-center-header"]}> | </div>
              <input
                type="text"
                placeholder={t('placeholder_search_store')}
                id="search"
              />
            </div>
            <button
              className={"bg-green " + styles["btn-search"]}
              onClick={onSearch}
            >
              {t('search')}
            </button>
          </div>
          <div className={styles["col-center-header"]}>
            <div className={"bg-blue " + styles["btn-cart-header"]}>
              <Link to="/cart">
              {t('cart')}:{" "}
                {clientState.cart.cartItems
                  ? clientState.cart.cartItems.length
                  : 0}{" "}
                  {t('items')}
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles["bottom-header"]}>
        <Container>
          <ul className={styles["menu-bottom-header"]}>
            <li>
              <Link
                className={location.pathname == "/" ? styles["active"] : ""}
                to="/"
              >
                {t('home')}
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname == "/product" ? styles["active"] : ""
                }
                to="/product"
              >
                {t('shop')}
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname == "/blog" ? styles["active"] : ""}
                to="/blog"
              >
                {t('blog')}
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname == "/about-us" ? styles["active"] : ""
                }
                to="/about-us"
              >
                {t('about_us')}
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname == "/contact-us" ? styles["active"] : ""
                }
                to="/contact-us"
              >
                {t('contact_us')}
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
