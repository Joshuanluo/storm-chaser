import React, { useState } from "react";
import { db } from "./Firebase-config";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import "../formpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import BackIcon from "../BackIcon.svg";

const FormPage = ({ toHome, toThankyou }) => {
  const element = <FontAwesomeIcon icon={faEnvelopeOpenText} size="6x" />;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const validName = /^[a-zA-Z]{3,}$/;
  const validEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

  const mailsCollectionRef = collection(db, "Mailing-List");
  const _handleSubmit = async (event) => {
    event.preventDefault();

    if (!validName.test(firstName) || !validName.test(lastName)) {
      setError(
        "*Your name must contain letters only and at least two letters*"
      );
      return;
    }
    if (!validEmail.test(email)) {
      setError("*Please enter valid email address*");
      return;
    }
    setError(null);
    await addDoc(mailsCollectionRef, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      time: Timestamp.fromDate(new Date()),
    });
    toThankyou();
  };

  return (
    <div className="formpage">
      <img src={BackIcon} alt="Back Icon" onClick={() => toHome()} />
      {element}
      <div className="formpage_title">GET OUR WEEKLY 1-MINUTE NEWSLETTER</div>
      <div className="formpage_content">
        Join thousands of readers and receive weekly emails with warnings for
        QLD, NSW, ACT & VIC with Tropical Cyclone map Australia wide!
      </div>

      <form onSubmit={_handleSubmit}>
        <label className="infolabel1">
          First Name:
          <input
            className="infoinput"
            required
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </label>
        <label className="infolabel2">
          Last Name:
          <input
            className="infoinput"
            required
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </label>
        <label className="infolabel3">
          Email address:
          <input
            className="infoinput"
            required
            type="text"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <button className="infobtn">Submit</button>
        <div className="error-msg">{error}</div>
      </form>
    </div>
  );
};

export default FormPage;
