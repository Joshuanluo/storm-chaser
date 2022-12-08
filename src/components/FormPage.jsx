import React, { useState } from "react";
import { db } from "./Firebase-config";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import "../formpage.css";

const FormPage = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const mailsCollectionRef = collection(db, "Mailing-List");
	const _handleSubmit = async (event) => {
		event.preventDefault();
		await addDoc(mailsCollectionRef, { first_name: firstName, last_name: lastName, email: email, time: Timestamp.fromDate(new Date()) });
	};

	return (
		<div className="formpage">
			<div className="formpage_title">GET OUR WEEKLY 1-MINUTE NEWSLETTER</div>
			<div className="formpage_content">
				Join thousands of readers and receive weekly emails with warnings for QLD, NSW, ACT & VIC with Tropical Cyclone map Australia wide!
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
					<input className="infoinput" required type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
				</label>
				<label className="infolabel3">
					Email address:
					<input className="infoinput" required type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
				</label>
				<button className="infobtn">Submit</button>
			</form>
		</div>
	);
};

export default FormPage;
