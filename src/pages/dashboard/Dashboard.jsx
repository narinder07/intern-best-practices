import { useSelector } from "react-redux";
const Dashboard = () => {
  const userDetails = useSelector((state) => state.authSlice.authData);

  return (
    <div>
      <h1>Dashboard page</h1>
      <h2>Welcome {userDetails.username}</h2>
    </div>
  );
};

export default Dashboard;
