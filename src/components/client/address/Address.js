import { Alert, Container, Snackbar } from "@mui/material";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaPlus, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AddressContext } from "../../../contexts/providers/client/AddressProvider";

import styles from "./Address.module.css";
import ModalAddress from "./ModalAddress";

const Address = (props) => {
  const { addressState, resetStatus, setShowModal } =
    useContext(AddressContext);  

  return (
    <>
      <Helmet>
        <title>My Address</title>
        <meta name="description" content="My Address TienDa Store" />
      </Helmet>
      <ModalAddress />
      <Container>
        <div className={styles["addresses"]}>
          <h1>My Addresses</h1>
          <a
            className={styles["new-address"]}
            href="#"
            onClick={() => setShowModal(true)}
          >
            <FaPlus /> Add new address
          </a>
          {addressState.contacts.map((item) => {
            return (
              <div className={styles["address"]} key={item.id}>
                <div className={styles["address-col"]}>
                  <p className={styles["address-row"]}>
                    <span className={styles["value-address-row"]}>
                      <b>{item.fullname}</b>
                    </span>
                  </p>
                  <p>
                    <span className={styles["title-address-row"]}>
                      Address:{" "}
                    </span>
                    <span className={styles["value-address-row"]}>
                      {item.detail}, {item.wardName}, {item.districtName}, {item.provinceName}
                    </span>
                  </p>
                  <p>
                    <span className={styles["title-address-row"]}>Phone: </span>
                    <span className={styles["value-address-row"]}>
                      {item.phone}
                    </span>
                  </p>
                  <p>
                    <span className={styles["title-address-row"]}>Email: </span>
                    <span className={styles["value-address-row"]}>
                      {item.email}
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
            );
          })}
        </div>
      </Container>
      <Snackbar
        open={addressState.status.message}
        onClose={resetStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={resetStatus}
          severity={addressState.status.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {addressState.status.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Address;
