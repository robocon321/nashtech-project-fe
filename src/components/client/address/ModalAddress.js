import { useState } from "react";
import { Modal, Button } from "@mui/material";

import styles from "./ModalAddress.module.css";
import Input from "../../common/Input";

const ModalAddress = (props) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles["modal-address"]}>
          <Input 
            type="text" 
            title="Full name" 
            name="full_name"
            id="full_name"
            required={true} />
          <Input 
            type="text" 
            title="Phone" 
            name="phone"
            id="phone"
            required={true} />
          <Input 
            type="select" 
            title="Province" 
            name='province' 
            id='province'
            required={true} 
            placeholder='Choose Province'
            props={{
              data: []
            }}
            />
          <Input 
            type="select" 
            title="District" 
            name='district'
            id='district'
            placeholder="Choose District"
            required={true} 
            props={{
              data: [],
              key: 'label',
              value: 'value'
            }}
            />
          <Input 
            type="select" 
            title="Street" 
            name='street'
            id='street'
            placeholder="Choose Street"
            required={true} 
            props={{
              data: [],
              key: 'label',
              value: 'value'
            }}
            />
          <Input 
            type="textarea" 
            title="Detail address" 
            name='detail'
            id='detail'
            placeholder="Enter your detail address"
            required={true} 
            props={{
              rows: 5
            }}
            />
            <div className={styles['actions']}>
              <Button variant="contained">Save</Button>
              <Button variant="contained" color='error'>Close</Button>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAddress;
