import ManageUserList from "@components/admin/user/ManageUserList";
import UserAdminProvider from "@providers/admin/UserAdminProvider";

const UserListPage = props => {
  return (
    <main>
      <UserAdminProvider>
        <ManageUserList />
      </UserAdminProvider>
    </main>
  )
}

export default UserListPage;