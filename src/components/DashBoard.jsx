import React, { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./Firebase-config";

const DashBoard = () => {
  const [mail, setMail] = useState();
  const mailCollectionRef = collection(db, "Mailing-List");
  useEffect(() => {
    const getMail = async () => {
      const data = await getDocs(mailCollectionRef);
      console.log(data);
      setMail(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(mail);
    };
    getMail();
  }, []);
  return <div>DashBoard</div>;
};

export default DashBoard;
