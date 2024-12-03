import LogInForm from "../../components/organisms/LogInForm/LogInForm";
import submitLogInForm from "../../services/LogInPageServices";
import { useSelector, useDispatch } from "react-redux";
import { SignUpValidationSchema } from "../../validations/SignUpFormValidationSchema";
import {
  setFormValues,
  setSignUpErrors,
  clearSignUpError,
} from "../../components/organisms/signUpForm/SignUpFormSlice";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/commonSlices/AuthSlice";

const LoginPage = () => {
  const formValues = useSelector((state) => state.signUpFormSlice.formValues);
  const errors = useSelector((state) => state.signUpFormSlice.errors);
  // const userDetails = useSelector((state) => state.authSlice.authData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await SignUpValidationSchema.validate(formValues, { abortEarly: false });
      const result = await submitLogInForm(formValues);

      if (result.errors) {
        dispatch(setSignUpErrors({ errors: result.errors }));
      } else if (result.status === "success") {
        dispatch(setUserData(result.data));
        navigate("/dashboard");
      }
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
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
    <div>
      <LogInForm
        defaultValues={formValues}
        handleLogIn={handleLogIn}
        onChangeEvent={onChangeHandle}
        errors={errors}
      />
    </div>
  );
};

export default LoginPage;
