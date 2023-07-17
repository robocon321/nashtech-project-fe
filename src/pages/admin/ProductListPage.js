import ProductList from "@components/admin/product/ProductList";
import ProductAdminProvider from "@providers/admin/ProductAdminProvider";

const ProductListPage = (props) => {
  return (
    <main>
      <ProductAdminProvider>
        <ProductList />
      </ProductAdminProvider>
    </main>
  )
}

export default ProductListPage;