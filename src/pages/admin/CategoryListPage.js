import CategoryList from "@components/admin/category/CategoryList";
import CategoryAdminProvider from "@providers/admin/CategoryAdminProvider";

const CategoryListPage = props => {
  return (
    <main>
      <CategoryAdminProvider>
        <CategoryList />
      </CategoryAdminProvider>
    </main>
  )
}

export default CategoryListPage;