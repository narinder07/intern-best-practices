// import "./SignUpPage.css";
import { useNavigate } from 'react-router-dom';
import SignUpForm from "../../components/organisms/signUpForm/SignUpForm";  
import { useSelector, useDispatch } from "react-redux";
import { setFormValues, setSignUpErrors, clearSignUpError } from "../../components/organisms/signUpForm/SignupFormSlice"; 
import { setUserData } from "../../redux/commonSlices/AuthSlice"; 
import SubmitSignUpForm  from "../../services/SignUpPageServices";

const SignUpPage = (props) => {


  const formValues = useSelector((state) => state.signUpFormSlice.formValues);
  const errors = useSelector((state) => state.signUpFormSlice.errors);
  const userDetails = useSelector((state) => state.authSlice.authData);

  const dispatch = useDispatch(); // Define the dispatch function to dispatch an action
  const navigate = useNavigate();


  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const result = await SubmitSignUpForm(formValues);
    if (result.errors) dispatch(setSignUpErrors({ errors: result.errors }));
    if(result.status === "success"){
      dispatch(setUserData( result.data ));
      navigate("/dashboard");
    }
  };

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    dispatch(setFormValues({ formValues: { [name]: value } }));
    dispatch(clearSignUpError({ name }));
  };

  return (
    <section className="form-bg-img section-padding">
      <div className="signUp-form-wrapper">
        <h1>{props.formCaption}</h1>
        {(userDetails && userDetails.token) ? <div className="alert alert-success">User {userDetails.displayName} created successfully</div> : ""}
        <SignUpForm
          defaultValues={formValues}
          onChangeEvent={onChangeHandle}
          onSubmitEvent={onSubmitHandle}
          errors={errors}
        />
      </div>  
    </section>
  );
};

export default SignUpPage;
