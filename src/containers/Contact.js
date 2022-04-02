import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Contact.css";

const styles = {
  padding: "5em 0",
};

// Needed to get label to move out of the way of the inputs
const onFocus = (e) => {
  const targetId = e.target.getAttribute("id");
  const labelEl = document.querySelector(`[for=${targetId}]`);
  labelEl.setAttribute("class", "active");
};

// Allows the label to move back into position with no data
const onBlur = (e) => {
  const value = e.target.value;
  const targetId = e.target.getAttribute("id");
  const labelEl = document.querySelector(`[for=${targetId}]`);
  if (value) {
    labelEl.setAttribute("class", "active");
  } else {
    labelEl.removeAttribute("class");
  }
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="container" style={styles}>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onFocus={onFocus}
              onBlur={onBlur}
              className="validate"
              type="text"
            />
            <label htmlFor="name">Name</label>
            <span
              className="helper-text"
              data-error="Please enter a name"
              data-success=""
            ></span>
          </div>
          <div className="input-field col s6">
            <input
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onFocus={onFocus}
              onBlur={onBlur}
              className="validate"
              type="email"
            />
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
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onFocus={onFocus}
              onBlur={onBlur}
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="message" className="">
              Message
            </label>
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
