import React from 'react';
import posed from 'react-pose';
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import '../firebase'
import './inicial.css'
import GetAreasCurricularesInicial from '../components/dataAreasCurricularesInicial'
import GetTalleresInicial from '../components/dataTalleresInicial'
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
          <div className='bannerInicial'>
            <div className="banner_container">
                <div className="texto_inicial">
                  <h1 className="text-color-title-left inicial_banner_title">Educación Inicial</h1>
                  <h3 className="text-color-verde">Lunes a Viernes de 8:00 a. m. a 12:00 p. m.</h3>
                  <p className="text-color inicial_banner_description">Este año 2023 el tipo de prestación de servicio educativo es semipresencial en concordancia con la resolución ministerial <br/>  531-2021-MINEDU
                  </p>
                 <br/>
                  <a className="btn btn-outline-light rounded-pill font-weight-bolder px-4"  href="#propuesta_educativa">Conoce más</a>
                </div>
              <div className="foto_banner_inicial">
              <img  src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Assets%20-%20Amado%20de%20Dios%2Falumno-nivel-inicial-colegio-amado-de-duios-removebg-preview.png?alt=media&token=46fcb11b-8f29-4dea-907a-08549d5880c1' alt="amado-de-dios.appspot.com"/>
              </div>
            </div>
          </div>
{/* Fin del banner */}

<div className="sub_banner"></div>
      <section className='container_CEGNE'>
       

          <div className='CEGNE_content'>
            <div className='text-color'>
            CEGNE
            </div>
            <div className='text-color-title-left'>
                <h1>AMADO DE <span className="dios">DIOS</span></h1>
            </div>
          </div>

          <div className='CEGNE_description'>
            <div className='text-color'>
            Desarrollamos sus capacidades académicas, sociales y su sentido de responsabilidad. Asimismo incentivamos su pensamiento crítico, analítico y creativo para formar a los futuros líderes que nuestra sociedad necesita.
            </div>
            <div className='text-color'>
            Buscamos la formación integral e intelectual en sus tres niveles, logrando que
            el niño experimente un aprendizaje significativo y se integre a un mundo de
            experiencias directas.
            </div>
          </div>

    </section>

    <section className='container-fluid p-0 black_more'>
        <div className='row m-10-hor'>
<div className="line" id="propuesta_educativa"></div>
        <div className="areas_curriculares">
        <div className="col-md-6 pr-md-0 ancho">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_book_lover_mkck.svg?alt=media&token=4c28b291-3732-4aa3-8607-afa61b6fcaa3" className="imgslickz" alt="#"/>
          </div>

          <div className="items_areas_curriculares">
              <div className="subheading text-color">Nuestras</div>
              <div className="heading text-color-title-left">
                <h1 className="areas_title">  Áreas curriculares</h1>
              </div>
              <ul className="text-color">
              <GetAreasCurricularesInicial/>
              </ul>
            
            {/*
              <Link className='btn' to="">
                <span>Ver más detalles</span>
              </Link>
            */}
          </div>
        </div>



            {/*
            
    <div className="areas_curriculares">
              <div>
                <div className="subheading text-color">Nuestros</div>
                <div className="heading text-color-title-left">
                  <h1 className="areas_title">Talleres y servicios</h1>
                </div> 
                <ul className="text-color">
                <GetTalleresInicial/>
                </ul>
         
              </div>
              <div className="col-md-6 px-0 ancho">
              <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_creativity_wqmm.svg?alt=media&token=fb48d124-6fa7-4ecd-926d-226446f421ea" className="imgslickz" alt="#"/>
            </div>
        </div>
            */}
      

          
<div className="areas_curriculares">
<div className="col-md-6 pr-md-0 ancho">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_children_4rtb.svg?alt=media&token=8cb4a038-014f-4f83-81b4-1f03f25caa4b" className="imgslickz" alt="#"/>
          </div>

          <div className="departamento_padding">
            <div>
              <div className="text-color">Departamento </div>
              <div className="text-color-title-left">
                <h1 className="areas_title">Psicopedagógico</h1>
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
