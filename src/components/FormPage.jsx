import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormPage = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const _handleSubmit = (event) => {
		event.preventDefault();
		console.log(firstName, lastName, email);
	};

	return (
		<div>
			<Form onSubmit={_handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default FormPage;
