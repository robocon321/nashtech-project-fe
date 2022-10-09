import { Container } from "@mui/material";
import { FaPlus, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import styles from "./Address.module.css";
import ModalAddress from "./ModalAddress";

const Address = (props) => {
  return (
    <>
      <ModalAddress />
      <Container>      
        <div className={styles["addresses"]}>
          <h1>My Addresses</h1>
          <a className={styles["new-address"]} href="#">
            <FaPlus /> Add new address
          </a>
          <div className={styles["address"]}>
            <div className={styles["address-col"]}>
              <p className={styles["address-row"]}>
                <span className={styles["value-address-row"]}>
                  NGUYỄN THANH NHẬT
                </span>
              </p>
              <p>
                <span className={styles["title-address-row"]}>Address: </span>
                <span className={styles["value-address-row"]}>
                  Ktx Khu B ĐHQG, Phường Đông Hòa, Thị xã Dĩ An, Bình Dương
                </span>
              </p>
              <p>
                <span className={styles["title-address-row"]}>Phone: </span>
                <span className={styles["value-address-row"]}>
                  0354.512.411
                </span>
              </p>
            </div>
            <div className={styles["address-col"]}>
              <button className={styles["btn-edit"]}>
                <FaEdit />
              </button>
              <button className={styles["btn-delete"]}>
                <MdDelete />
              </button>
            </div>
          </div>
          <div className={styles["address"]}>
            <div className={styles["address-col"]}>
              <p className={styles["address-row"]}>
                <span className={styles["value-address-row"]}>
                  NGUYỄN THANH NHẬT
                </span>
              </p>
              <p>
                <span className={styles["title-address-row"]}>Address: </span>
                <span className={styles["value-address-row"]}>
                  Ktx Khu B ĐHQG, Phường Đông Hòa, Thị xã Dĩ An, Bình Dương
                </span>
              </p>
              <p>
                <span className={styles["title-address-row"]}>Phone: </span>
                <span className={styles["value-address-row"]}>
                  0354.512.411
                </span>
              </p>
            </div>
            <div className={styles["address-col"]}>
              <button className={styles["btn-edit"]}>
                <FaEdit />
              </button>
              <button className={styles["btn-delete"]}>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Address;
