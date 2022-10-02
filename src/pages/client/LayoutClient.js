import { Outlet } from 'react-router-dom';
import HeaderClient from '../../components/client/Header';
import FooterClient from '../../components/client/Footer';

const LayoutClient = props => {
  return (
    <>
      <HeaderClient />
      <Outlet />
      <FooterClient />
    </>
  )
}

export default LayoutClient;