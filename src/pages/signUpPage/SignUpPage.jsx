// import "./SignUpPage.css";
import SignUpForm from "../../components/organisms/SignUpForm/SignUpForm";
import { useSelector, useDispatch } from "react-redux";
import { setFormValues, setSignUpErrors, clearSignUpError } from "../../components/organisms/SignUpForm/SignUpFormSlice"; 
import { setUserData } from "../../redux/commonSlices/AuthSlice"; 
import SubmitSignUpForm  from "../../services/SignUpPageServices";

const SignUpPage = (props) => {
  const formValues = useSelector((state) => state.signUpFormSlice.formValues);
  const errors = useSelector((state) => state.signUpFormSlice.errors);
  const userDetails = useSelector((state) => state.authSlice.authData);
   
  const dispatch = useDispatch(); // Define the dispatch function to dispatch an action

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const result = await SubmitSignUpForm(formValues);
    if (result.errors) dispatch(setSignUpErrors({ errors: result.errors }));
    if(result.status === "success") dispatch(setUserData( result.data ));
    console.log("Form Submitted", result);
    console.log("userDetails", userDetails);
  };

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    dispatch(setFormValues({ formValues: { [name]: value } }));
    dispatch(clearSignUpError({ name }));
    console.log("handleChange SignUpPage", e.target.name, e.target.value);
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
