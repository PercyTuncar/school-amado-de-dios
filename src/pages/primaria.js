import React from 'react';
import posed from 'react-pose';
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import '../firebase'
import './primaria.css'
import GetAreasCurricularesPrimaria from '../components/dataAreasCurricularesPrimaria'
import GetTalleresPrimaria from '../components/dataTalleresPrimaria';



 

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
          <div className='bannerPrimaria'>
            <div className="banner_container">
                <div className="texto_inicial">
                  <h1 className="text-color-title-left inicial_banner_title">Educación Primaria</h1>
                  <h3 className="text-color-verde">Lunes a Viernes de 8:00 a. m. a 1:00 p. m.</h3>
                  <p className="text-color inicial_banner_description">Este año 2022 el tipo de prestación de servicio educativo es semipresencial en concordancia con la resolución  ministerial <br/> 531-2021-MINEDU
</p>
                 <br/>
                  <a className="btn btn-outline-light rounded-pill font-weight-bolder px-4"  href="#propuesta_educativa">Conoce más</a>
                </div>
              <div className="foto_banner_inicial">
              <img  src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Assets%20-%20Amado%20de%20Dios%2Fchildren_lying_reading_book_1-removebg-preview.png?alt=media&token=7a8015a0-2af5-4cfe-b348-d6b576e129d1' alt="foto-de-educacion-primaria"/>
              </div>
            </div>
          </div>
{/* Fin del banner */}

    
    
<div className="sub_banner"></div>
    
     {/*  */}
     
     <div className="container_objetivos">
<div className="line"></div>
  <h1 className="text-center text-color-title">  CEGNE   AMADO DE  <span className="dios">DIOS</span></h1>
  <p className="text-color text-center">Nuestros objetivos - Primaria</p>
  <div className="objetivos">
    <div className="view overlay hm-black-light objetivo-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Assets%20-%20Amado%20de%20Dios%2Fgive-icon-yellow.png?alt=media&token=12f6fbc1-ff08-4ed7-a4d4-52af73b64f92" className="img-fluid" alt="imagen-icono-amado-de-dios"/>
      <div className="mask flex-center">
        <h4 className="text-color-title text-center areas_title">Objetivo N° 1</h4>
        <p className="text-center text-color">Promover en los alumnos el desarrollo personal, el ejercicio de la ciudadnía, la práctica de valores, la sociedad y el conocimiento y su vinculación al mundo del trabajo en un clima, de participación, libertad, respeto a Dios, patria y familia.</p>
      </div>
    </div>
    <div className="view overlay hm-black-light objetivo-item">
    <img src="https://img.icons8.com/bubbles/452/ibooks.png" alt="segundo-objetivo-de-a,madiode-dios" className="img-fluid"/>
      <div className="mask flex-center">
      <h4 className="text-color-title text-center areas_title">Objetivo N° 2</h4>
        <p className="text-center text-color">Fomentar en nuestros alumnos hábitos positivos a la investigación, la lectura y práctica de valores.</p>
      </div>
    </div>
    <div className="view overlay hm-black-light objetivo-item">
    <img src="https://image.flaticon.com/icons/png/512/1712/1712848.png" alt="objetivo tres del colegio" className="img-fluid"/>
      <div className="mask flex-center">
      <h4 className="text-color-title text-center areas_title">Objetivo N° 3</h4>
        <p className="text-center text-color">Promover en nuestros alumnos la práctica y participación democrática, iniciándoles en los ejercicios de sus deberes y derechos.</p>
      </div>
    </div>
  </div>
</div>



    
    
     {/*  */}
     <div className="line"></div>
    <section className='container-fluid p-0 black_more'>
        <div className='row m-10-hor'>

         <div className="areas_curriculares">
         <div className="col-md-6 pr-md-0 ancho">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_Personal_notebook_re_d7dc.svg?alt=media&token=09270a71-85a7-49be-b399-92a30865665b" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5">
            <div>
            <div className="subheading text-color">Nuestras</div>
              <div className="heading">
              <h1 className="areas_title">  Áreas curriculares</h1>
              </div>
              <ul className="text-color">
              <GetAreasCurricularesPrimaria/>
              </ul>
            {/*
              <Link className='btn' to="">
                <span>Ver más detalles</span>
              </Link>
            */}
            </div>
          </div>

         </div>


         { /* 
         <div className="areas_curriculares">
<div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div>
            <div className="subheading text-color">Nuestros</div> 
              <div className="text-color-title areas_title">
                <h1>  Talleres y servicios  (2do - 6to)</h1>
              </div> 
              <ul className="text-color">
              <GetTalleresPrimaria/>
              </ul>
         
            </div>
          </div>

          <div className="col-md-6 px-0 ancho">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_making_art_759c.svg?alt=media&token=2e3b5d07-1c93-4a49-8066-1777c1524383" className="imgslickz" alt="#"/>
          </div>
</div>
         
         */
              }



   <div className="areas_curriculares">       
     <div className="col-md-6 pr-md-0 ancho">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_Smiley_face_re_9uid.svg?alt=media&token=03d775ca-96e8-4e79-943a-a6e60446dc7b" className="imgslickz" alt="#"/>
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