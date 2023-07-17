import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

import Header from "@components/admin/Header";
import Sidebar from "@components/admin/Sidebar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AdminLayout = (props) => {
  // const { appState } = useContext(AppContext);
  // const navigation = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   if (
  //     appState.user.id == null ||
  //     appState.user.roles.filter((item) => item.name === "CLIENT").length ===
  //       1
  //   ) {
  //     navigation("/");
  //   }
  // }, [appState.user]);

  return (
    <Box sx={{ display: "flex" }}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
