import React, { useState, useEffect } from "react";
import 'react-animated-slider/build/horizontal.css';


import  firebase from "firebase/app";
import 'firebase/firestore'
// import { v4 as uuidv4 } from "uuid";

function GetAnio() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection("añoEscolar");
  //ONE TIME GET FUNCTION
  function getSchools2() {
    setLoading(true);
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setSchools(items);
      setLoading(false);
    });
  }
  useEffect(() => {
    getSchools2();
    // eslint-disable-next-line
  }, []);

  return (
    <div >
      <h1>
       {loading ? <p  className='text-center text-color'>cargando...</p> : null}
        <div >
        {schools.map((school) => (
                     
                            <div key={1}>
                                    <p>{school.año}</p>
                                    <div className=""> </div>
                                    {console.log('Hola xd')}
                                </div>
                     
              ))}
        </div>  
               
    </h1>
   
    </div>
  );
}

export default GetAnio
