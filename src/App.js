import "./App.css";
import { useContext } from "react";
import { AppContext } from "@providers/AppProvider";
import Loading from "@components/common/Loading";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "@pages/admin/AdminLayout";
import ClientLayout from "@pages/client/ClientLayout";

import NotFound from "@pages/404/NotFoundPage";
import SignInPage from "@pages/auth/SignInPage";
import SignUpPage from "@pages/auth/SignUpPage";
import ForgotPasswordPage from "@pages/auth/ForgotPasswordPage";

import HomePage from "@pages/client/HomePage";
import ProductPage from "@pages/client/ProductPage";
import AboutUsPage from "@pages/client/AboutUsPage";
import ProductDetailPage from "@pages/client/ProductDetailPage";
import ContactUsPage from "@pages/client/ContactUsPage";
import WishlistPage from "@pages/client/WishlistPage";
import DetailAccountPage from "@pages/client/DetailAccountPage";
import CartPage from "@pages/client/CartPage";
import AddressPage from "@pages/client/AddressPage";
import OrderHistoryPage from "@pages/client/OrderHistoryPage";
import OrderDetailPage from "@pages/client/OrderDetailPage";

import ProductListPage from "@pages/admin/ProductListPage";
import Dashboard from "@pages/admin/DashboardPage";
import CreateProductPage from "@pages/admin/CreateProductPage";
import CategoryListPage from "@pages/admin/CategoryListPage";
import UserListPage from "@pages/admin/UserListPage";
import CreateUserPage from "@pages/admin/CreateUserPage";
import UpdateProductPage from "@pages/admin/UpdateProductPage";
import UpdateUserPage from "@pages/admin/UpdateUserPage";
import OAuth2RedirectPage from "@pages/auth/OAuth2RedirectPage";

function App() {
  const { appState } = useContext(AppContext);

  if (appState.status.isLoading) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  } else {
    if (
      appState.user != null &&
      appState.user.roles.filter((item) => item.name === "ADMIN").length ===
        1
    ) { 
      return (
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ProductListPage />} />
            <Route path="products/create" element={<CreateProductPage />} />
            <Route path="products/:slug" element={<UpdateProductPage />} />
            <Route path="categories" element={<CategoryListPage />} />
            <Route path="users" element={<UserListPage />} />
            <Route path="users/create" element={<CreateUserPage />} />
            <Route path="users/:id" element={<UpdateUserPage />} />
          </Route>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/social-redirect" element={<OAuth2RedirectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      );      
    } else if (
      appState.user != null &&
      appState.user.roles.filter((item) => item.name === "CLIENT").length ===
        1
    ) { 
      return (
        <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="product/:slug" element={<ProductDetailPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="detail-account" element={<DetailAccountPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="address" element={<AddressPage />} />
          <Route path="order-history" element={<OrderHistoryPage />} />
          <Route path="order-history/:id" element={<OrderDetailPage />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/social-redirect" element={<OAuth2RedirectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      ) 
    } else {
      return (
        <Routes>
          <Route path="/" element={<ClientLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="product/:slug" element={<ProductDetailPage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="contact-us" element={<ContactUsPage />} />
          </Route>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />          
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/social-redirect" element={<OAuth2RedirectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
  
    }
  }
}

export default App;
