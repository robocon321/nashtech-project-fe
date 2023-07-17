import ProductDetail from '@components/client/product-detail/ProductDetail';
import ProductDetailProvider from '@providers/client/ProductDetailProvider';

const ProductDetailPage = (props) => {
  return (
    <main>
      <ProductDetailProvider>
        <ProductDetail />
      </ProductDetailProvider>
    </main>
  )
}

export default ProductDetailPage;