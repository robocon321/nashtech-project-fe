import UserList from "../../components/admin/user/UserList";
import UserAdminProvider from "../../contexts/providers/admin/UserAdminProvider";

const UserListPage = props => {
  return (
    <main>
      <UserAdminProvider>
        <UserList />
      </UserAdminProvider>
    </main>
  )
}

export default UserListPage;