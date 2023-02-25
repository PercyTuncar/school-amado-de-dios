import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './sliderhome.css'

const content = [
  {
    title: "Bienvenidos a la familia Amadina!",
    description:
      "Somos una institución educativa con 33 años de experiencia brindando un Servicio Educativo que promueve el desarrollo integral y pleno de nuestros estudiantes",
    image: "https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Assets%20-%20Amado%20de%20Dios%2FNi%C3%B1os-levantando-la-mano%202(1).jpg?alt=media&token=6d4f2bf1-18f7-4293-9df1-4879676ac2d2"
  },
  {
    title: "Nuestra misión institucional",
    description:
      "Lograr que todas y todos los estudiantes de la I.E.P. culminen la escolaridad de los niveles de inicial, primaria y secundaria exitosamente para convertirse en ciudadanos que aporten a la sociedad y forjen un mejor futuro.",
  
    image: "https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Assets%20-%20Amado%20de%20Dios%2FGrandeE-studiantes-de-colegio-manos(1).jpg?alt=media&token=0e912936-1ff9-4023-ae71-712c67f703c3"
  },
  {
    title: "Nuestra visión compartida",
    description:
      "Ser reconocidos como una IEP que contribuye a que todos nuestros estudiantes desarrollen su potencial desde el nivel inicial hasta el nivel secundario.",
   
    image: "https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Assets%20-%20Amado%20de%20Dios%2FONOni%C3%B1os-levantando-la-mano(1).jpg?alt=media&token=1732a523-93f6-449b-89c5-c9981455f3ba"
  }
];

export default () => (
  <Slider className="slider-wrapper" autoplay={6000}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center`, backgroundSize: '100%' }}
              >
                <div className="inner textSlide">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
               {/*
                     <button onClick={()=> window.open(item.link, "_blank")}>
                     <span>
                       {item.button}
                     </span>
                   </button> 
               */ }
     
                </div>
              </div>
            ))}
        </Slider>
);