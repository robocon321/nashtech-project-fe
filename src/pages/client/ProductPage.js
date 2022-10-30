import Product from "../../components/client/product/Product";
import ProductProvider from "../../contexts/providers/client/ProductProvider";

const ProductPage = (props) => {
  return (
    <main>
      <ProductProvider>
        <Product />
      </ProductProvider>
    </main>
  )
}

export default ProductPage;