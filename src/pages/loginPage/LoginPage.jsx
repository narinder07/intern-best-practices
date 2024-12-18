import LogInForm from "../../components/organisms/LogInForm/LogInForm";
import submitLogInForm from "../../services/LogInPageServices";
import { useSelector, useDispatch } from "react-redux";
import { LogInFormValidationSchema } from "../../validations/LogInFormValidationSchema";
import {
  setLoginFormValues,
  setLoginFormErrors,
  clearLoginFormError,
} from "../../components/organisms/LogInForm/LogInForm.slice";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/commonSlices/AuthSlice";

const LoginPage = () => {
  const formValues = useSelector((state) => state.logInFormSlice.formValues);
  const errors = useSelector((state) => state.logInFormSlice.errors);
  //  const userDetails = useSelector((state) => state.authSlice.authData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await LogInFormValidationSchema.validate(formValues, {
        abortEarly: false,
      });
      const result = await submitLogInForm(formValues);

      if (result.errors) {
        dispatch(setLoginFormErrors({ errors: result.errors }));
      } else if (result.status === "success") {
        dispatch(setUserData(result.data));
        navigate("/dashboard");
      }
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      dispatch(setLoginFormErrors({ errors: formattedErrors }));
    }
  };

  const onChangeHandle = async (e) => {
    const { name, value } = e.target;
    dispatch(
      setLoginFormValues({ formValues: { ...formValues, [name]: value } })
    );
    try {
      await LogInFormValidationSchema.validateAt(name, { [name]: value });
      dispatch(clearLoginFormError({ name }));
    } catch (error) {
      dispatch(setLoginFormErrors({ errors: { [name]: error.message } }));
    }
  };

  return (
    <div>
      <LogInForm
        defaultValues={formValues}
        onSubmitLogIn={handleLogIn}
        onChangeEvent={onChangeHandle}
        errors={errors}
      />
    </div>
  );
};

export default LoginPage;
