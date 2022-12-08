import React from "react";
import {Button, Form} from 'react-bootstrap';

const FormPage = () => {
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" >
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" placeholder="First Name" onChange={(e)=>e.target.value}/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" placeholder="Last Name" onChange={(e)=>e.target.value}/>
				</Form.Group>
				
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={(e)=>e.target.value}/>
				</Form.Group>
                
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default FormPage;
