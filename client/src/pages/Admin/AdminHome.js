import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p className="admincontent">
            As an administrator, you play a crucial role in managing and
            monitoring the Blood Bank system. This dashboard allows you to
            efficiently handle donor records, blood availability, requests, and
            overall system operations. From here, you can: Manage blood donors
            and their details Track available blood groups and stock levels
            Review and process blood requests Monitor system activities to
            ensure smooth operation Your responsibility helps ensure timely
            blood availability and saves lives by maintaining accurate and
            up-to-date records. Use the tools provided to keep the system
            organized, reliable, and responsive. Thank you for your commitment
            to managing the Blood Bank system efficiently. ❤️ 

            
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
