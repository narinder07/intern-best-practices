import "./ContactMe.css";

const ContactMe = (props) => {
  return (
    <>
      <div className="container section-padding">
        <div className="row justify-content-center g-4">
          {props.contact.map((contact, index) => (
            <div key={index} className="col-lg-4">
              <a className="box-href" target="_blank" href={contact.href}>
                <div className="contact-box text-center">
                  <img src={contact.image} alt="#" />
                  <div className="content-text mt-2">
                    <h2>{contact.label}</h2>
                    <h6>{contact.info}</h6>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactMe;
