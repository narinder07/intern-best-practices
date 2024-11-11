import LogInForm from "../../components/organisms/LogInForm/LogInForm";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const userDetails = useSelector((state) => state.authSlice.authData);

  const handleLogIn = (e) => {
    e.preventDefault();
    if (!userDetails.email) {
      return alert("Please enter your correct email address");
    }
  };

  return (
    <div>
      <LogInForm handleLogIn={handleLogIn} />
      {userDetails.displayName}
    </div>
  );
};

export default LoginPage;
