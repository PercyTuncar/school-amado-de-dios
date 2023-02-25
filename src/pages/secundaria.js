import React from 'react';
import posed from 'react-pose';
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import '../firebase'
import './secundaria.css'
import GetAreasCurricularesSecundaria from '../components/dataAreasCurricularesSecundaria';
import GetTalleresSecundaria from '../components/dataTalleresSecundaria';


const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});


const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};


export default () => (
  <ListContainer>
       <Navigation/>
       <div className='bannerSecundaria'>
            <div className="banner_container">
                <div className="texto_inicial">
                  <h1 className="text-color-title-left inicial_banner_title">Educación Secundaria</h1>
                  <h3 className="text-color-verde">Lunes a Viernes de 8:00 a. m. a 1:45 p. m.</h3>
                  <p className="text-color inicial_banner_description">Este año 2023 el tipo de prestación de servicio educativo es semipresencial en concordancia con la resolución ministerial   <br/> 531-2021-MINEDU

</p>
                 <br/>
                  <a className="btn btn-outline-light rounded-pill font-weight-bolder px-4"  href="#propuesta_educativa">Conoce más</a>
                </div>
              <div className="foto_banner_inicial">
              <img  src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Assets%20-%20Amado%20de%20Dios%2Falumno-----dent-college-school-education-student-people-graduation-ceremony-university-removebg-preview.png?alt=media&token=36996709-448f-4ea8-973e-8c27b92409e2' alt="conoce mas sobre el colegio"/>
              </div>
            </div>
          </div>
{/* Fin del banner */}
  
<div className="container_objetivos">
<div className="line"></div>
  <h1 className="text-center text-color-title">  CEGNE AMADO DE <span className="dios">DIOS</span> </h1>
  <p className="text-color text-center">Nuestros objetivos - Secundaria</p>
  <div className="objetivos">
    <div className="view overlay hm-black-light objetivo-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Assets%20-%20Amado%20de%20Dios%2Fgive-icon-yellow.png?alt=media&token=12f6fbc1-ff08-4ed7-a4d4-52af73b64f92" alt="objetivo uno de secundaria" className="img-fluid"/>
      <div className="mask flex-center">
        <h4 className="text-color-title text- areas_title">Objetivo N° 1</h4>
        <p className="text-center text-color">Promover en los alumnos el desarrollo personal, el ejercicio de la ciudadnía, la práctica de valores, la sociedad y el conocimiento y su vinculación al mundo del trabajo en un clima, de participación, libertad, respeto a Dios, patria y familia.</p>
      </div>
    </div>
    <div className="view overlay hm-black-light objetivo-item">
    <img src="https://img.icons8.com/bubbles/452/ibooks.png" alt="objetivo dos de secundaria" className="img-fluid"/>
      <div className="mask flex-center">
      <h4 className="text-color-title text-center areas_title">Objetivo N° 2</h4>
        <p className="text-center text-color">Fomentar en nuestros alumnos hábitos positivos a la investigación, la lectura y práctica de valores.</p>
      </div>
    </div>
    <div className="view overlay hm-black-light objetivo-item">
    <img src="https://image.flaticon.com/icons/png/512/1712/1712848.png" alt="objetivo tres de secundaria" className="img-fluid"/>
      <div className="mask flex-center">
      <h4 className="text-color-title text-center areas_title">Objetivo N° 3</h4>
        <p className="text-center text-color">Promover en nuestros alumnos la práctica y participación democrática, iniciándoles en los ejercicios de sus deberes y derechos.</p>
      </div>
    </div>
  </div>
</div>

<div className="line"></div>
    <section className='container-fluid p-0 black_more'>
        <div className='row m-10-hor'>
<div className="areas_curriculares">
<div  className="col-md-6 pr-md-0 ancho">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_reading_list_4boi.svg?alt=media&token=bed4b592-981c-4b37-a99e-f8f7188e0e2f" className="imgslickz" alt="clegio amado de dios I e P"/>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5">
            <div>
            <div className="text-color">Nuestras</div>
              <div className="heading">
              <h1 className="areas_title">  Áreas curriculares</h1>
              </div>
              <ul className="text-color">
              <GetAreasCurricularesSecundaria/>
              </ul>
            {/*
              <Link className='btn' to="">
                <span>Ver más detalles</span>
              </Link>
            */}
            </div>
          </div>

</div>

    
    <div  className="areas_curriculares">
    <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div>
            <div className="text-color">Nuestros</div>
            <div className="text-color-title areas_title">
                <h1> Servicio tutorial y orientación educativa  </h1>
              </div> 
            
            { /* <Link className='btn' to="">
                <span>Más información</span>
              </Link>*/
              }
            </div>
          </div>

          <div className="col-md-6 px-0 ancho">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_audio_conversation_dgtw.svg?alt=media&token=7e71e35d-d3f3-4c65-9017-9058a0113df6" className="imgslickz" alt="#"/>
          </div>
    </div>



     <div  className="areas_curriculares">
     <div className="col-md-6 pr-md-0 ancho">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_Feeling_of_joy_re_cqko.svg?alt=media&token=219b8c97-fd9c-4ba4-91c2-2bb307c1839e" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5">
            <div>
            <div className="text-color">Departamento</div>
            <div className="text-color-title areas_title">
              <h1>Psicopedagógico</h1>
              </div>
              <ul className="text-color">
                <li>Evaluación con fines pedagógicos</li>
                <li>Orientaciones</li>
                <li>Personal Social</li>
                <li>Apoyos Socioemocionales</li>
                <li>Escuela de padres de familia</li>
           
              </ul>
            {/*
              <Link className='btn' to="">
                <span>Ver más detalles</span>
              </Link>
            */}
            </div>
          </div>
     </div>
        </div>
    </section>

<section className='container-fluid black_more'>           
           <div className="instrumentos_de_gestion">
           <h2 className="areas_title text-color-title-left">Instrumentos de Gestión </h2>
           <ul className="text-color">
             <li>PEI   (Proyecto Educativo Institucional)</li>
             <li>PAT (Plan Anual del Trabajo)</li>
             <li>PCI   (Proyecto Curricular Institucional) </li>
             <li>RI     (Reglamento Interno) </li>
           </ul>
           </div>

<div className="line"></div>
        <div className='nota text-center'>
          <div className='heading text-color-title'>Nota:
           </div>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <p className='text-color'>
              "Para acceder a los instrumentos de gestión de nuestra institución educativa solicítelo a través de nuestro correo institucional"
              </p>
              <p className="text-color">Hacer click aquí  <span role="img" aria-label="donut">👇</span></p>
              <Mailto email="cegne@amadodedios.com" subject="Solicito acceso a los instrumentos de gestión" body="Buenos días">
                <span className='correo text-color'>cegne@amadodedios.com</span>
            </Mailto>
            </div>
          </div>
        </div>
<div className="line"></div>
     
       
    </section>
 
<Footer/>
  </ListContainer>
);