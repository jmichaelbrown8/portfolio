import React, { FocusEventHandler, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import { validateEmail as isValidEmail } from "../utils/validateEmail";

export const Contact = () => {
  // formspree id
  const [state, handleSubmit] = useForm("xoqrywrn");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateRequired: FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target: element }) => {
    element.value
      ? element.classList.toggle("invalid", false)
      : element.classList.toggle("invalid", true);
  };

  const validateEmail: FocusEventHandler<HTMLInputElement> = ({
    target: element,
  }) => {
    isValidEmail(email)
      ? element.classList.toggle("invalid", false)
      : element.classList.toggle("invalid", true);
  };

  if (state.succeeded) {
    return (
      <section className="container">
        <h5 style={{ textAlign: "center" }}>
          Thanks for your message, {name}!
        </h5>
      </section>
    );
  }

  return (
    <section className="container">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onBlur={validateRequired}
              className="validate"
              type="text"
            />
            <label htmlFor="name">Name</label>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <span
              className="helper-text"
              data-error="Please enter a name"
              data-success=""
            ></span>
          </div>
          <div className="input-field col s6">
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onBlur={validateEmail}
              className="validate"
              type="email"
            />
            <label htmlFor="email">Email</label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <span
              className="helper-text"
              data-error="Please enter a valid email address"
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
              onBlur={validateRequired}
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="message" className="">
              Message
            </label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <span
              className="helper-text"
              data-error="Please enter a message"
              data-success=""
            ></span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn waves-effect waves-light blue"
              type="submit"
              name="action"
              disabled={state.submitting}
            >
              send <FontAwesomeIcon icon={solid("paper-plane")} />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
