import React, { useEffect, useState } from "react";

const App = () => {
  const [backendData, setBackEndData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3005/api").then(response => {
      response.json().then((data)=>{
        setBackEndData(data);
      })
    })
  }, []);

  return( 
    <div>
        {(typeof backendData.users === "undefined") ? (
          <p>Loading...</p>
        ): (
          backendData.users.map((user,i)=>{
          return <p key={i}>{user}</p>
          })
        )}
    </div>
  );
};

export default App;
