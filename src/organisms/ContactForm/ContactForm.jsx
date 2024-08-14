import FormField from "../../molecules/FormField/FormField";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form>
      <FormField label="Name" type="text" placeholder="enter name" />
    </form>
  );
};

export default ContactForm;
