import CreateUser from "../../components/admin/create-user/CreateUser";
import NewUserAdminProvider from "../../contexts/providers/admin/NewUserAdminProvider";

const CreateUserPage = props => {
  return (
    <main>
      <NewUserAdminProvider>
        <CreateUser />
      </NewUserAdminProvider>
    </main>
  )
}

export default CreateUserPage;