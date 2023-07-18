import { Modal, Button } from "@mui/material";

import styles from "./ModalAddress.module.css";
import Input from "@components/common/Input";
import { AddressContext } from "@providers/client/AddressProvider";
import { useContext } from "react";
import CustomTextInput from "@components/common/CustomTextInput";
import CustomSelectInput from "@components/common/CustomSelectInput";
import CustomTextAreaInput from "@components/common/CustomTextAreaInput";

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
          <CustomTextInput
            title="Full name"
            name="fullname"
            id="fullname"
            value={addressState.contact.fullname}
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            required={true}
          />
          <CustomTextInput
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
          <CustomTextInput
            title="Email"
            name="email"
            id="email"
            value={addressState.contact.email}
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            required={true}
          />          
          <CustomSelectInput
            title="Province"
            name="province"
            id="province"
            required={true}
            placeholder="Choose Province"
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            options={{
              data: addressState.provinces,
              key: "ProvinceName",
              value: "ProvinceID",
            }}
          />
          <CustomSelectInput
            title="District"
            name="district"
            id="district"
            placeholder="Choose District"
            required={true}
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            options={{
              data: addressState.districts,
              key: "DistrictName",
              value: "DistrictID",
            }}
          />
          <CustomSelectInput
            title="Ward"
            name="ward"
            id="ward"
            placeholder="Choose Ward"
            required={true}
            onChange={(e) =>
              setFieldContact({ field: e.target.name, value: e.target.value })
            }
            options={{
              data: addressState.wards,
              key: "WardName",
              value: "WardCode",
            }}
          />
          <CustomTextAreaInput
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
