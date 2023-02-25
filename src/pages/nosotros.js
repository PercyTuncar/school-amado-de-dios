import React from 'react';
import { Link } from '@reach/router';
import posed from 'react-pose';
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './nosotros.css'

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const style={
  textAlign:'center',
  marginTop:'50px',
  marginBottom: '150px'
}

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});


export default () => (

<ListContainer>

  <Navigation/>
  <div className='col-md-10 bannerNosotros'>
              <img  src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Assets%20-%20Amado%20de%20Dios%2FNi%C3%B1os-estudiando(1).jpg?alt=media&token=7bfd1a97-8cf5-4376-9ae5-df12803c81fc' alt='imgbanner' className='w-100 border-radius'/>
  </div>

<div className="subtitlebanner">
  <div className='container-fluid'>
    <div className='row m-10-hor'>
        <div className='col-md-6 text-color-title text-center title_responsive'>
            <h1>¿Quiénes Somos? </h1>
        </div>
    </div>
  </div> 
</div>
<Item className='container-fluid black insigniaNosotros'>
  <div className='row m-10-hor nosotrosTexto'>
      <div className='text-color insignia_container'>
              <div className='col-md-10'>
              <img src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/insignia-min.webp?alt=media&token=8fc185f6-3835-4e32-95c5-49fe66418f74' alt='imgbanner' className='w-100 border-radius'/>
              </div>
      </div>
      <div className='col-md-7 texto_nosotros'>
        <div className='content text-color'>
             <p> Somos una institución educativa con 33 años de experiencia brindando 
              un Servicio Educativo que promueve el desarrollo integral y pleno de
              nuestros estudiantes, Buscamos formar personas autónomas y 
              dialogantes, que aprendan a pensar críticamente, desarrollen 
              su sensibilidad, dando énfasis en la formación de valores y 
              en educación ciudadana para que pongan en ejercicio sus 
              deberes y derechos convirtiéndolos en agentes de cambio 
              para una sociedad más justa.</p>
        </div>
        <div className='content text-color'>
           <p>
           Contamos con una plana de docentes calificados, así como un Dpto. 
            Psicopedagógico, Talleres como Taekwondo, Francés en suma, enfocados
             en proporcionar a nuestros estudiantes una educación integral y en
              desarrollar sus potencialidades. Todo esto, sin dejar de lado
               una formación integral que fortalezca los aprendizajes 
               relacionados con el arte y la cultura, así como la práctica 
               de una educación física orientada hacia la salud y a disciplina 
               que se adquiere con la práctica del Taekwondo, respetando siempre 
               las características de los estudiantes desde una perspectiva
                intercultural, ambiental e inclusiva.
           </p>
        </div>
      </div>
  </div>
</Item>

<div className="line"></div>
  <section className='container-fluid pt-0 nosotros_mision'>
        <div className='row m-10-hor'>


          {/* Ocultar contenido para responsive */}

  <div className="mision_smartphone">
              <div className="col-md-6 px-0">
              <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_education_f8ru(1).svg?alt=media&token=cbeb8ef9-7eff-4b26-9794-08c18772441c" className="imgslickz" alt="#"/> 
              </div>
            <div className="col-md-6 centered p-md-5 pt-5">
                <div>
                  <div className="subheading text-color-title areas_title"><h1>Nuestra misión institucional</h1></div>
                  <div className="heading text-color">
                  ¿Cuál es nuestra razón?
                  </div>
                  <p className="mt-3 text-color">
                  Lograr que todas y todos los estudiantes de la I.E.P. culminen 
                          la escolaridad de los niveles de inicial, primaria y 
                          secundaria, afiancen los aprendizajes establecidos en el 
                          currículo nacional y la propuesta pedagógica de la I.E.P. 
                          y alcancen su desarrollo integral en espacios 
                          seguros, inclusivos, de sana convivencia y libres 
                          de violencia a fin de potencializar sus habilidades 
                          para la vida y convertirlos en agente de cambio para la sociedad.
                  </p>
                </div>
            </div>
  </div>
          {/* fin del contenido oculto */}
        <div className="vision">
            <div className="col-md-6 centered p-md-5 pt-5 pb-5">
                <div>
                    <div className="subheading text-color-title areas_title"><h1>Nuestra misión institucional</h1></div>
                          <div className="heading text-color">
                          ¿Cuál es nuestra razón?
                          </div>
                          <p className="mt-3 text-color">
                          Lograr que todas y todos los estudiantes de la I.E.P. culminen 
                          la escolaridad de los niveles de inicial, primaria y 
                          secundaria, afiancen los aprendizajes establecidos en el 
                          currículo nacional y la propuesta pedagógica de la I.E.P. 
                          y alcancen su desarrollo integral en espacios 
                          seguros, inclusivos, de sana convivencia y libres 
                          de violencia a fin de potencializar sus habilidades 
                          para la vida y convertirlos en agente de cambio para la sociedad.
                          </p>
                </div>
            </div>
                  <div className="col-md-6 px-0">
                        <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_education_f8ru(1).svg?alt=media&token=cbeb8ef9-7eff-4b26-9794-08c18772441c" className="imgslickz" alt="#"/>
                  </div>
  </div>


  <div className="mision">
              <div className="col-md-6 px-0">
              <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_career_progress_ivdb(1).svg?alt=media&token=10cf4487-e7f2-4ab5-b751-144134257b56" className="imgslickz" alt="#"/> 
              </div>
            <div className="col-md-6 centered p-md-5 pt-5">
                <div>
                  <div className="subheading text-color-title areas_title"><h1>Nuestra visión compartida</h1></div>
                  <div className="heading text-color">
                  ¿A dónde nos gustaría llegar?
                  </div>
                  <p className="mt-3 text-color">
                  Ser reconocidos como una IEP que contribuye a que todos
                  nuestros estudiantes desarrollen su potencial
                  desde el nivel inicial hasta el nivel secundario, logrando 
                  no solo que accedan al mundo letrado, sino que manejen
                  en un nivel intermedio otro idioma, resuelven 
                  problemas, practican valores, saben seguir 
                  aprendiendo, se asumen como ciudadanos con derechos 
                  y responsabilidades, logrando con éxito su proyecto 
                  de vida y se conviertan en agentes de cambio que
                  contribuyen al desarrollo de sus familias, comunidades y 
                  del país, combinando su capital cultural y natural; y 
                  adaptándose a los diversos avances mundiales en concordancia 
                  con el perfil de egreso del CNEB y el Currículo Nacional, buscando 
                  responder a las exigencias de un mundo globalizado.
                  </p>
                </div>
            </div>
  </div>



</div>
  </section>
<section>
</section>



{/* gallery */}
<div className="container_gallery">
<div className="line"></div>
  <h1 className="text-center text-color-title areas_title">!BIENVENIDOS A LA FAMILIA AMADINA!</h1>
  <div className="gallery">
    <div className="view overlay hm-black-light gallery-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Alumnos%2FAlumnos%20del%20colegio%20amado%20de%20dios%2015.jpeg?alt=media&token=8e58afb9-d8cf-41fa-b0fa-601f6eb0e3ec" alt="foto-del-colegio" className="img-fluid"/>
    </div>
    <div className="view overlay hm-black-light gallery-item">
    <video width="100%" height="auto" controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Videos%2FVideo-amado-de-dios002.mp4?alt=media&token=a9a3d6f4-fcbd-46b1-abd4-51580e277706" type="video/mp4"/>
            Your browser does not support the video tag.
            <track default
                kind="captions"
                srcLang="es"
                src="#" />
          </video> 
          <div className="mask flex-center">
        <p className="text-center text-color">I.E.P. Amado de Dios</p>
      </div>
    </div>
    <div className="view overlay hm-black-light gallery-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Alumnos%2FAlumnos%20del%20colegio%20amado%20de%20dios%2020.jpeg?alt=media&token=e661d77e-e315-45c4-bb44-184ffdb7358e" alt="foto-de-la-clase-en-amado-de-dios" className="img-fluid"/>
    </div>
  </div>
</div>

<div className='col-md-12 pl-md-5 center' style={style}>
    <h4 className="text-color-title">Para ver nuestra galería de fotos</h4>
        <div className="btn_global">
          <Link className='link text-color-title' to="/galeria"> <span>Click aquí</span></Link>
        </div>
  </div>

<Footer/>
</ListContainer>
);


