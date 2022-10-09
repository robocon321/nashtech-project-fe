import './App.css';
import { useContext } from 'react';
import { AppContext } from './contexts/providers/AppProvider';
import Loading from './components/common/Loading';
import {
  Routes,
  Route
} from "react-router-dom";
import LayoutAdmin from './pages/admin/LayoutAdmin';
import LayoutClient from './pages/client/LayoutClient';

import NotFound from './pages/404/NotFoundPage';

import HomePage from './pages/client/HomePage';
import ProductPage from './pages/client/ProductPage';
import AboutUsPage from './pages/client/AboutUsPage';
import ProductDetailPage from './pages/client/ProductDetailPage'; 

import Dashboard from './pages/admin/DashboardPage';
import ContactUsPage from './pages/client/ContactUsPage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import WishlistPage from './pages/client/WishlistPage';
import DetailAccountPage  from './pages/client/DetailAccountPage';
import CartPage from './pages/client/CartPage';
import AddressPage from './pages/client/AddressPage';
import OrderHistoryPage from './pages/client/OrderHistoryPage';
import OrderDetailPage from './pages/client/OrderDetailPage';

function App() {
  const { appState } = useContext(AppContext);
  
  if(appState.status.isLoading) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  } else {
    if(appState.role === 'ADMIN') {
      return (
        <Routes>     
          <Route path='/admin' element={<LayoutAdmin />}>
            <Route path='dashboard' element={<Dashboard />}/>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      )
    } else {
      return (
        <Routes>     
          <Route path='/' element={<LayoutClient />}>
            <Route path='' element={<HomePage />}/>
            <Route path='product' element={<ProductPage />} />
            <Route path='product/:id' element={<ProductDetailPage />} />
            <Route path='about-us' element={<AboutUsPage />} />
            <Route path='contact-us' element={<ContactUsPage />} />
            <Route path='wishlist' element={<WishlistPage />} />
            <Route path='detail-account' element={<DetailAccountPage />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='address' element={<AddressPage />} />
            <Route path='order-history' element={<OrderHistoryPage />} />
            <Route path='order-history/:id' element={<OrderDetailPage />} />
          </Route>
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      )
    }
  }

}

export default App;
