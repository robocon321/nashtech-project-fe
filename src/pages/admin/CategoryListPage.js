import ManageCategoryList from "@components/admin/category/ManageCategoryList";
import CategoryAdminProvider from "@providers/admin/CategoryAdminProvider";

const CategoryListPage = props => {
  return (
    <main>
      <CategoryAdminProvider>
        <ManageCategoryList />
      </CategoryAdminProvider>
    </main>
  )
}

export default CategoryListPage;