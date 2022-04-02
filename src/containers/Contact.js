import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Contact.css";

const styles = {
  padding: "5em 0",
};

function Contact() {
  return (
    <section className="container" style={styles}>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="name" className="validate" type="text" />
            <label htmlFor="name">Name</label>
            <span
              className="helper-text"
              data-error="Please enter a name"
              data-success=""
            ></span>
          </div>
          <div className="input-field col s6">
            <input id="email" className="validate" type="email" />
            <label htmlFor="email">Email</label>
            <span
              className="helper-text"
              data-error="Please enter an email"
              data-success=""
            ></span>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              name="message"
              id="message"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn waves-effect waves-light green"
              type="submit"
              name="action"
            >
              send <FontAwesomeIcon icon={solid("paper-plane")} />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;
