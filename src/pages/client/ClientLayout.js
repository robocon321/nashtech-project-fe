import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import HeaderClient from "../../components/client/Header";
import FooterClient from "../../components/client/Footer";
import { AppContext } from "../../contexts/providers/AppProvider";
import ClientLayoutProvider from "../../contexts/providers/client/ClientLayoutProvider";

const ClientLayout = (props) => {
  const { appState } = useContext(AppContext);
  const navigation = useNavigate();

  useEffect(() => {
    if (
      appState.user.id != null &&
      appState.user.roles.filter((item) => item.name === "ADMIN").length ===
        1
    ) {
      navigation("/admin/dashboard");
    }
  }, [appState.user]);

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
