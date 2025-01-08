import LogInForm from "../../components/organisms/LogInForm/LogInForm";
import submitLogInForm from "../../services/LogInPageServices";
import { useSelector, useDispatch } from "react-redux";
import { LogInFormValidationSchema } from "../../validations/LogInFormValidationSchema";
import { useNavigate } from "react-router-dom";
import {
  setFormValues,
  setFormErrors,
  clearFormErrors,
} from "../../redux/FormSlice";
import { setUserData } from "../../redux/commonSlices/AuthSlice";

const LoginPage = () => {
  const formValues = useSelector(
    (state) => state.formSlice.logInForm.formValues
  );

  const errors = useSelector((state) => state.formSlice.logInForm.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // when we submit the form
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await LogInFormValidationSchema.validate(formValues, {
        abortEarly: false,
      });
      const result = await submitLogInForm(formValues);

      if (result.errors) {
        dispatch(
          setFormErrors({ formName: "logInForm", errors: result.errors })
        );
      } else if (result.status === "success") {
        dispatch(setUserData(result.data));
        navigate("/dashboard");
      }
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      dispatch(
        setFormErrors({ formName: "logInForm", errors: formattedErrors })
      );
    }
  };

  // onChange handle
  const onChangeHandle = async (e) => {
    const { name, value } = e.target;
    dispatch(
      setFormValues({
        formName: "logInForm",
        formValues: { ...formValues, [name]: value },
      })
    );
    try {
      await LogInFormValidationSchema.validateAt(name, { [name]: value });
      dispatch(clearFormErrors({ formName: "logInForm", name }));
    } catch (error) {
      dispatch(
        setFormErrors({
          formName: "logInForm",
          errors: { [name]: error.message },
        })
      );
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
