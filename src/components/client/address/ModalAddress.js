import { Modal, Button } from "@mui/material";

import styles from "./ModalAddress.module.css";
import Input from "@components/common/Input";
import { AddressContext } from "@providers/client/AddressProvider";
import { useContext } from "react";

const ModalAddress = (props) => {
  const { addressState, setShowModal, setFieldContact, submit } =
    useContext(AddressContext);
  return (
    <div>
      <Modal
        open={addressState.isShowModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles["modal-address"]}>
          <Input
            type="text"
            title="Full name"
            name="fullname"
            id="fullname"
            value={addressState.contact.fullname}
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            required={true}
          />
          <Input
            type="text"
            title="Phone"
            name="phone"
            id="phone"
            value={addressState.contact.phone}
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            required={true}
          />
          <Input
            type="text"
            title="Email"
            name="email"
            id="email"
            value={addressState.contact.email}
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            required={true}
          />          
          <Input
            type="select"
            title="Province"
            name="province"
            id="province"
            required={true}
            placeholder="Choose Province"
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            props={{
              data: addressState.provinces,
              key: "ProvinceName",
              value: "ProvinceID",
            }}
          />
          <Input
            type="select"
            title="District"
            name="district"
            id="district"
            placeholder="Choose District"
            required={true}
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            props={{
              data: addressState.districts,
              key: "DistrictName",
              value: "DistrictID",
            }}
          />
          <Input
            type="select"
            title="Ward"
            name="ward"
            id="ward"
            placeholder="Choose Ward"
            required={true}
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            props={{
              data: addressState.wards,
              key: "WardName",
              value: "WardCode",
            }}
          />
          <Input
            type="textarea"
            title="Detail address"
            name="detail"
            id="detail"
            value={addressState.contact.detail}
            placeholder="Enter your detail address"
            required={true}
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            props={{
              rows: 5,
            }}
          />
          <div className={styles["actions"]}>
            <Button variant="contained" onClick={submit}>
              Save
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAddress;
