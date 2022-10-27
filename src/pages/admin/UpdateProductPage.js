import UpdateProduct from "../../components/admin/update-product/UpdateProduct";
import UpdateProductAdminProvider from "../../contexts/providers/admin/UpdateProductAdminProvider";

const UpdateProductPage = (props) => {
  return (
    <main>
      <UpdateProductAdminProvider>
        <UpdateProduct />
      </UpdateProductAdminProvider>
    </main>
  )
}

export default UpdateProductPage;