import { useSelector } from 'react-redux';
import Login from '../../pages/login/Login';
import SideBar from '../../components/sidebar/SideBar';
import AfterLoginNavBar from '../../components/afterLoginNavBar/AfterLoginNavBar';
import AfterLoginFooter from '../../components/afterLoginFooter/AfterLoginFooter';

const AuthTemplate = (props) => {
  const { isAuthenticated } = useSelector((state) => state.authSlice);
    if (!isAuthenticated) {

        return <Login />;
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