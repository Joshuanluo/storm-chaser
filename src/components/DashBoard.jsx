import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase-config";
import "../dashboard.css";
import Table from "react-bootstrap/Table";

const DashBoard = ({ toHome }) => {
	const [mails, setMails] = useState([]);
	const mailCollectionRef = collection(db, "Mailing-List");
	useEffect(() => {
		const getMails = async () => {
			const data = await getDocs(mailCollectionRef);
			console.log(data);
			setMails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getMails();
	}, []);

	return (
		<div className="dash_main">
			<div className="dash_table">
      <h1>Dashboard</h1>
				<Table striped bordered hover>
					<thead>
						<tr>
							<td>Name</td>
							<td>Email</td>
						</tr>
					</thead>
					<tbody>
						{mails.map((mail) => {
							return (
								<tr key={mail.id}>
									<td>
										{mail.first_name} {mail.last_name}
									</td>
									<td>{mail.email}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default DashBoard;
