import React from 'react';
import { Link } from '@reach/router';
import posed from 'react-pose';
import './MensajeDeLaDirectora.css'

const mensaje = {
  marginTop: '100px'
}
const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});


export default () => (
<ListContainer style={mensaje}>

  <section className='container'>
        <div className='sub-container'>

          <div className="container-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/directora-colegio-amado-de-dios(1).jpeg?alt=media&token=e8351f66-402e-4f9f-86ba-d56ffccad5a5" className="imgslickz" alt="#"/>
          </div>


          <div className="mesajeresponsive centered container-left">
            <div>
              <div className="subheading"></div>
              <div className="heading  text-color-title">
                <h1>   Mensaje de la directora</h1>
              </div>
              <p className="mt-3 text-color">
              Estimada familia amadina: <br/>
              <br/>
                Estas líneas son para presentarme como Directora del CEGNE Amado de Dios
                 y ponerme a disposición de la Comunidad Educativa.
                Espero que mi trabajo, que asumo con la enorme ilusión y 
                responsabilidad, que conlleva incorporarse a un Proyecto como del 
                CEGNE Amado de Dios, sea útil y contribuya al mantenimiento y 
                ejecución de los objetivos, cuyo fin es lograr el desarrollo integral
                 de los y las estudiantes, basados en el desarrollo de las 
                 potencialidades, capacidades, actitudes y valores fundamentales.

              </p>
         
            </div>
            <div>
           <Link className='btn_global' to="/nosotros">
                <span>Sobre nosotros</span>
              </Link>
           </div>
          </div>


        </div>
  </section>
</ListContainer>

);