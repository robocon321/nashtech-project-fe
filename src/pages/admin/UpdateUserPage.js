import UpdateUser from "../../components/admin/update-user/UpdateUser";
import UpdateUserAdminProvider from "../../contexts/providers/admin/UpdateUserAdminProvider";

const UpdateUserPage = props => {
  return (
    <main>
      <UpdateUserAdminProvider>
        <UpdateUser />
      </UpdateUserAdminProvider>
    </main>
  )
}

export default UpdateUserPage;