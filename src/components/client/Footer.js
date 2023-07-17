import { Container, Grid } from "@mui/material";
import styles from "./Footer.module.css";
import {
  FaEnvelope,
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhoneAlt
} from "react-icons/fa";
import { useContext } from "react";
import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";

const Footer = (props) => {
  const { changeLang, t, lang } =
  useContext(ClientLayoutContext);

  return (
    <footer>
      <div className={styles["top-footer"]}>
        <Container>
          <div className={styles["wrap-top-footer"]}>
            <div className={"flex-center " + styles["col-top-footer"]}>
              <span className={"flex-center " + styles["icon-top-footer"]}>
                <FaEnvelope />
              </span>
              <span>{t('sign_up_for')}</span>
            </div>
            <div className={styles["col-top-footer"]}>
              <div className={styles["mailbox-top-footer"]}>
                <input
                  type="text"
                  placeholder={t('placeholder_enter_email')}
                />
                <button>{t('subscribe')}</button>
              </div>
            </div>
            <div className={styles["col-top-footer"]}>
              <ul className={"flex-center " + styles["social-top-footer"]}>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGooglePlusG />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles["center-footer"]}>
        <Container>
          <Grid container>
            <Grid item md={3} sm={6} xs={12}>
              <h3>{t('information')}</h3>
              <ul>
                <li><a href="#"><span>- </span><span>{t('about_us')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('delivery_information')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('privacy_policy')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('terms_conditions')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('contact_us')}</span></a></li>
              </ul>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <h3>{t('extras')}</h3>
              <ul>
                <li><a href="#"><span>- </span><span>{t('brands')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('sign_up_for')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('affiliate')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('specials')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('site_map')}</span></a></li>
              </ul>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <h3>{t('my_account')}</h3>
              <ul>
                <li><a href="#"><span>- </span><span>{t('my_account')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('order_history')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('wishlist')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('newsletter')}</span></a></li>
                <li><a href="#"><span>- </span><span>{t('return')}</span></a></li>
              </ul>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <div className={"flex-center " + styles["icon-center-footer"]}><FaLocationArrow /></div>
                  <div className={styles["contact-center-footer"]}>
                    <span className={styles["title-center-footer"]}>{t('address')}: </span>
                    <span className={styles["content-center-footer"]}>123 Main Street, Anytown,CA 12345 USA.</span>
                  </div>
                </li>
                <li>
                  <div className={"flex-center " + styles["icon-center-footer"]}><FaEnvelope /></div>
                  <div className={styles["contact-center-footer"]}>
                    <span className={styles["title-center-footer"]}>Email: </span>
                    <span className={styles["content-center-footer"]}>robocon321n@gmail.com</span>
                  </div>
                </li>
                <li>
                  <div className={"flex-center " + styles["icon-center-footer"]}><FaPhoneAlt /></div>
                  <div className={styles["contact-center-footer"]}>
                    <span className={styles["title-center-footer"]}>{t('phone')}: </span>
                    <span className={styles["content-center-footer"]}>0354512411</span>
                  </div>
                </li>
              </ul>
            </Grid>        
          </Grid>
        </Container>
      </div>
      <div className={styles["bottom-footer"]}>
        <Container>
          <div className={styles["wrap-bottom-footer"]}>
            <div className={"flex-center" + styles["col-bottom-footer"]}>
              <div className={styles["service-bottom-footer"]}>
                <span>{t('site_map')}</span>
                <span> | </span>
                <span>{t('return')}</span>
                <span> | </span>
                <span>{t('order_history')}</span>
                <span> | </span>
                <span>{t('affiliate')}</span>              
              </div>
              <div className={styles["copyright-bottom-footer"]}>
                <p>Copyright © 2018 PlazaThemes. All Right Reserved.</p>
              </div>
            </div>
            <div className={styles["col-bottom-footer"]}>
              <img src="/images/payment.png" alt="Not found" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
