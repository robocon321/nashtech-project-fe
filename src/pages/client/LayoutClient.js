import { Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import HeaderClient from '../../components/client/Header';
import FooterClient from '../../components/client/Footer';
import { AppContext } from '../../contexts/providers/AppProvider';

const LayoutClient = props => {
  const { appState } = useContext(AppContext);
  const navigation = useNavigate();

  if(appState.user.id != null && appState.user.roleDTOs.filter(item => item.name === 'ADMIN').length === 1) {
    navigation("/admin/dashboard");
  } else {
    return (
      <>
      <HeaderClient />
      <Outlet />
      <FooterClient />
    </>

    );  
  }
}

export default LayoutClient;