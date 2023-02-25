import React, { useState, useEffect } from "react";
import 'react-animated-slider/build/horizontal.css';



import  firebase from "firebase/app";
import 'firebase/firestore'
// import { v4 as uuidv4 } from "uuid";
const style ={
  'color':'#A3A9AC'
}
function GetTalleresPrimaria() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection("talleresPrimaria");
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
    <span>
       {loading ? <h4  className='text-center text-color'>cargando...</h4> : null}
        <p >
        {schools.map((school) => (
               <li style={style}>{school.nombre}</li>
              ))}
        </p>  
 
   
    </span>
  );
}

export default GetTalleresPrimaria
