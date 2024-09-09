import "./SignUpPage.css";
import SignUpForm from "../../components/organisms/SignUpForm/SignUpForm";
import { useSelector, useDispatch } from "react-redux";
import { setFormValues, setSignUpErrors, setUserDetails } from "./SignUpPageSlice"; 
import SubmitSignUpForm  from "../../services/SignUpPageServices";

const SignUpPage = (props) => {
  const { formValues , errors, userDetails} = useSelector((state) => state.signUpFormSlice);
   
  const dispatch = useDispatch(); // Define the dispatch function


  const onSubmitHandle = async(e) => {
    e.preventDefault();
    const result = await SubmitSignUpForm(formValues);
    if (result.errors) dispatch(setSignUpErrors({ errors: result.errors }));
    if(result.status === "success") dispatch(setUserDetails({ userDetails: result.data }));
    console.log("Form Submitted", result);
  }

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    dispatch(setFormValues({ formvalues: { [name]: value }}));
    console.log("handleChange SignUpPage", e.target.name, e.target.value);
  }

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
