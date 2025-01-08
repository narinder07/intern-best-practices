import { useSelector } from "react-redux";
import LoginPage from "../../pages/loginPage/LoginPage";
import SideBar from "../../components/sidebar/SideBar";
import AfterLoginNavBar from "../../components/afterLoginNavBar/AfterLoginNavBar";
import AfterLoginFooter from "../../components/afterLoginFooter/AfterLoginFooter";

const AuthTemplate = (props) => {
  console.log(props);

  const { isAuthenticated } = useSelector((state) => state.authSlice);
  if (!isAuthenticated) {
    return <LoginPage />;
  }
  return (
    <>
      <AfterLoginNavBar />
      <SideBar />
      {props.children}
      <AfterLoginFooter />
    </>
  );
};

export default AuthTemplate;
