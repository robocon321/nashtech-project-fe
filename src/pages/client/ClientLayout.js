import { Outlet } from "react-router-dom";

import FooterClient from "@components/client/Footer";
import HeaderClient from "@components/client/Header";
import ClientLayoutProvider from "@providers/client/ClientLayoutProvider";

const ClientLayout = (props) => {

  return (
    <>
      <ClientLayoutProvider>
        <HeaderClient />
        <Outlet />
        <FooterClient />
      </ClientLayoutProvider>
    </>
  );
};

export default ClientLayout;
