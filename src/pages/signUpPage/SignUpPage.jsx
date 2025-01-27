import SignUpForm from "../../components/organisms/signUpForm/SignUpForm";
import SubmitSignUpForm from "../../services/SignUpPageServices";
import { useSelector, useDispatch } from "react-redux";
import { SignUpValidationSchema } from "../../validations/SignUpFormValidationSchema";
import {
  setFormValues,
  setFormErrors,
  clearFormErrors,
} from "../../redux/FormSlice";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/commonSlices/AuthSlice";
import { useState } from "react";

const SignUpPage = () => {
  const formValues = useSelector(
    (state) => state.formSlice.signUpForm.formValues
  );
  const errors = useSelector((state) => state.formSlice.signUpForm.errors);
  const userDetails = useSelector((state) => state.authSlice.authData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmitHandle = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await SignUpValidationSchema.validate(formValues, { abortEarly: false });
      const result = await SubmitSignUpForm(formValues);

      if (result.errors) {
        dispatch(
          setFormErrors({ formName: "signUpForm", errors: result.errors })
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
        setFormErrors({ formName: "signUpForm", errors: formattedErrors })
      );
    } finally {
      setLoading(false);
    }
  };

  const onChangeHandle = async (e) => {
    const { name, value } = e.target;
    dispatch(
      setFormValues({
        formName: "signUpForm",
        formValues: { [name]: value },
      })
    );
    try {
      await SignUpValidationSchema.validateAt(name, { [name]: value });
      dispatch(clearFormErrors({ formName: "signUpForm", name }));
    } catch (error) {
      dispatch(
        setFormErrors({
          formName: "signUpForm",
          errors: { [name]: error.message },
        })
      );
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
          loading={loading}
        />
      </div>
    </section>
  );
};

export default SignUpPage;
