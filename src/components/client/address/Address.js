import { Alert, Container, Snackbar } from "@mui/material";
import { AddressContext } from "@providers/client/AddressProvider";
import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet";

import ManageAddress from "@components/client/address/ManageAddress/index";
import ModalAddress from "@components/client/address/ModalAddress/index";


const Address = (props) => {
  const { addressState, resetStatus } =
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
        <ManageAddress />
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
