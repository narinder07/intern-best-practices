import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/organisms/signUpForm/SignUpForm";
import { useSelector, useDispatch } from "react-redux";
import {
  setFormValues,
  setSignUpErrors,
  clearSignUpError,
} from "../../components/organisms/signUpForm/SignUpFormSlice";
import { setUserData } from "../../redux/commonSlices/AuthSlice";
import SubmitSignUpForm from "../../services/SignUpPageServices";
import { SignUpValidationSchema } from "../../validations/SignUpFormValidationSchema";

const SignUpPage = () => {
  const formValues = useSelector((state) => state.signUpFormSlice.formValues);
  const errors = useSelector((state) => state.signUpFormSlice.errors);
  const userDetails = useSelector((state) => state.authSlice.authData);

  const dispatch = useDispatch(); // Define the dispatch function to dispatch an action
  const navigate = useNavigate();

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      await SignUpValidationSchema.validate(formValues, { abortEarly: false }); //formValues has inputValues like userName,displayName,password etc and we are checking if formValues matched the  SignUpValidationSchema validation it will be pass if they don't matched it will throw the error
      const result = await SubmitSignUpForm(formValues); //basically we send formValues to the server by using SubmitSignUpForm to create  a new user account basically The formValues has stored the data that the user entered when signing up (e.g., username, email, password).
      if (result.errors) {
        // checking if we get a error we dispatch the setSignUpErrors
        dispatch(setSignUpErrors({ errors: result.errors }));
      } else if (result.status === "success") {
        // if result is success we dispatch setUserData and navigate dashboard page
        dispatch(setUserData(result.data));
        navigate("/dashboard");
      }
    } catch (validationErrors) {
      // if our validation is failed
      //
      const formattedErrors = {}; // formattedErrors is an error empty object we are storing errors in formattedErrors
      validationErrors.inner.forEach((error) => {
        // to show all errors in each fields by using forEach
        formattedErrors[error.path] = error.message;
      });
      dispatch(setSignUpErrors({ errors: formattedErrors })); // dispatch the setSignUpErrors from redux errors and set into the formattedErrors
    }
  };

  const onChangeHandle = async (e) => {
    const { name, value } = e.target;
    dispatch(setFormValues({ formValues: { ...formValues, [name]: value } }));
    try {
      await SignUpValidationSchema.validateAt(name, { [name]: value });
      dispatch(clearSignUpError({ name }));
    } catch (error) {
      dispatch(setSignUpErrors({ errors: { [name]: error.message } }));
    }
  };

  return (
    <section className="form-bg-img">
      <div className="signUp-form-wrapper">
        {userDetails && userDetails.token ? (
          <div className="alert alert-success">
            User {userDetails.displayName} created successfully
          </div>
        ) : (
          ""
        )}
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
