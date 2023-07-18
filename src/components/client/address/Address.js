import { Alert, Container, Snackbar } from "@mui/material";
import { AddressContext } from "@providers/client/AddressProvider";
import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import styles from "./Address.module.css";
import ModalAddress from "./ModalAddress";

const Address = (props) => {
  const { addressState, resetStatus, setShowModal } =
    useContext(AddressContext);  
    const { t } =
    useContext(ClientLayoutContext);

  return (
    <>
      <Helmet>
        <title>{t('my_address')}</title>
        <meta name="description" content="My Address TienDa Store" />
      </Helmet>
      <ModalAddress />
      <Container>
        <div className={styles["addresses"]}>
          <h1>My Addresses</h1>
          <div
            className={styles["new-address"]}
            onClick={() => setShowModal(true)}
          >
            <FaPlus /> Add new address
          </div>
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
        open={!addressState.status.success}
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
