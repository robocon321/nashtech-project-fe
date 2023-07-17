import CreateProduct from "@components/admin/create-product/CreateProduct";
import NewProductAdminProvider from "@providers/admin/NewProductAdminProvider";

const CreateProductPage = (props) => {
  return (
    <main>
      <NewProductAdminProvider>
        <CreateProduct />
      </NewProductAdminProvider>      
    </main>
  )
}

export default CreateProductPage;