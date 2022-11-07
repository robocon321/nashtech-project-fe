import { Helmet } from "react-helmet";

const DashboardPage = (props) => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard TienDa Store" />
      </Helmet>
      <div>Dashboard Page</div>
    </>
  );
};

export default DashboardPage;
