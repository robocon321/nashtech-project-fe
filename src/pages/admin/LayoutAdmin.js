import { Outlet } from 'react-router-dom';
import HeaderAdmin from '../../components/admin/Header';
import FooterAdmin from '../../components/admin/Footer';

const LayoutAdmin = props => {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </>
  )
}

export default LayoutAdmin;