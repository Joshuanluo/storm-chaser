import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase-config";

const DashBoard = () => {
  const [mails, setMails] = useState([]);
  const mailCollectionRef = collection(db, "Mailing-List");
  useEffect(() => {
    const getMails = async () => {
      const data = await getDocs(mailCollectionRef);

      setMails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMails();
  }, [mails]);

  return (
    <div>
      {mails.map((mail) => {
        return (
          <div key={mail.id}>
            <h1>{mail.first_name}</h1>
            <h1>{mail.id}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default DashBoard;
