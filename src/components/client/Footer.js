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

const Footer = (props) => {
  return (
    <footer>
      <div className={styles["top-footer"]}>
        <Container>
          <div className={styles["wrap-top-footer"]}>
            <div className={"flex-center " + styles["col-top-footer"]}>
              <span className={"flex-center " + styles["icon-top-footer"]}>
                <FaEnvelope />
              </span>
              <span>Sign Up For Newsletter</span>
            </div>
            <div className={styles["col-top-footer"]}>
              <div className={styles["mailbox-top-footer"]}>
                <input
                  type="text"
                  placeholder="Enter your email address here..."
                />
                <button>SUBSCRIBE !</button>
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
              <h3>Information</h3>
              <ul>
                <li><a href="#"><span>- </span><span>About Us</span></a></li>
                <li><a href="#"><span>- </span><span>Delivery Information</span></a></li>
                <li><a href="#"><span>- </span><span>Privacy Policy</span></a></li>
                <li><a href="#"><span>- </span><span>Terms & Conditions</span></a></li>
                <li><a href="#"><span>- </span><span>Contact Us</span></a></li>
              </ul>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <h3>Extras</h3>
              <ul>
                <li><a href="#"><span>- </span><span>Brands</span></a></li>
                <li><a href="#"><span>- </span><span>Gift Certificates</span></a></li>
                <li><a href="#"><span>- </span><span>Affiliate</span></a></li>
                <li><a href="#"><span>- </span><span>Specials</span></a></li>
                <li><a href="#"><span>- </span><span>Site Map</span></a></li>
              </ul>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <h3>My Account</h3>
              <ul>
                <li><a href="#"><span>- </span><span>My Account</span></a></li>
                <li><a href="#"><span>- </span><span>Order History</span></a></li>
                <li><a href="#"><span>- </span><span>Wish List</span></a></li>
                <li><a href="#"><span>- </span><span>Newsletter</span></a></li>
                <li><a href="#"><span>- </span><span>Returns</span></a></li>
              </ul>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <div className={"flex-center " + styles["icon-center-footer"]}><FaLocationArrow /></div>
                  <div className={styles["contact-center-footer"]}>
                    <span className={styles["title-center-footer"]}>Address: </span>
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
                    <span className={styles["title-center-footer"]}>Phone: </span>
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
                <span>Site Map</span>
                <span> | </span>
                <span>Returns</span>
                <span> | </span>
                <span>Order History</span>
                <span> | </span>
                <span>Affiliate</span>              
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
