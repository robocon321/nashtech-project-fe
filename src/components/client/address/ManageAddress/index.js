import { AddressContext } from "@providers/client/AddressProvider";
import { useContext } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import styles from "@components/client/address/ManageAddress/index.module.css";

const Index = props => {
    const { addressState, setShowModal } =
    useContext(AddressContext);  

    return (
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

    )
}
export default Index;