import React from 'react';
import posed from 'react-pose';
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './historia.css'
import '../firebase'

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});


const milagros = {
  'color':'#FDD377'
}

const subtitle= {
  'paddingTop':'6px'
}

export default () => (
<ListContainer>
<Navigation/>

<div className='col-md-10 bannerHistoria'>
              <img  src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Assets%20-%20Amado%20de%20Dios%2FCOlegio-amado-de-dios-footo(1)(1).jpg?alt=media&token=0505e802-a888-424a-9383-8ada8d447cec' alt='imgbanner' className='w-100 border-radius'/>
  </div>


    <div className="subtitlebanner">
  <div className='container-fluid'>
    <div className='row m-10-hor'>
        <div className='col-md-6 text-color-title text-center'>
            <h1>Nuestra Historia </h1>
           
        </div>
    </div>
  </div> 
</div>
    <Item className='container-fluid black container_historia'>
      
  <div className='row m-10-hor nosotrosTexto'>
  <br/>
  <div className="text-center text-color">Reseña histórica del</div>
            <div className="text-center text-color-title" style={subtitle}>CEGNE AMADO DE DIOS</div>
            <br/>
      <div className='text-color insignia_container'>
              <div className='col-md-10 foto_director'>
              <img src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/fundador-amado-de-dios.jpeg?alt=media&token=01532b84-bedf-464e-92c4-ed62f0bf0946' alt='imgbanner' className='w-100 border-radius'/>
              </div>
              <div className='col-md-10 foto_insignia'>
              <img src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/insignia-min.webp?alt=media&token=8fc185f6-3835-4e32-95c5-49fe66418f74' alt='imgbanner' className='w-100 border-radius'/>
              </div>
      </div>
      <div className='col-md-7 texto_nosotros'>
        <div className='content text-color'>
             <p> La I.E.P.” Amado de Dios” es una institución fundada e implementada en 1991, por el promotor y director, sr. Florencio Amado Dávalos Calderón. Tiene como sede dos locales, uno en la Av. Aviación B-6 Juan XXIII, San Borja, donde funciona el nivel secundario y otro en la Av. Aviación B-26 Juan XXIII, San Borja, donde funcionan los niveles de inicial y primaria.

            La I.E.P. “Amado de Dios” fue autorizada para funcionar por Resolución Ministerial  Nº 000155. 
            Nuestra institución es una entidad privada y de enseñanza mixta. Comprende los niveles de inicial, primaria y secundaria en el turno de la mañana. 

            Buscamos formar personas autónomas y dialogantes, que aprendan a pensar críticamente, desarrollen su sensibilidad, dando énfasis en la formación de valores y en educación ciudadana para que pongan en ejercicio sus deberes y derechos convirtiéndolos en agentes de cambio para una sociedad más justa.
            </p>
        </div>
        <div className='content text-color'>
           <p>

           El aprendizaje de idiomas extranjeros con un enfoque comunicativo, tanto en el idioma inglés como el francés así como el uso de la tecnología moderna, TICs, y de comunicación, son instrumentos indispensables para lograr una preparación de calidad, adecuada conscientemente a un mercado laboral actual y comprometida con el mejoramiento del entorno, en busca del desarrollo sostenible.

          Todo esto, sin dejar de lado una formación integral que fortalezca los aprendizajes relacionados con el arte y la cultura, así como la práctica de una educación física orientada hacia la salud y a disciplina que se adquiere con la práctica del Tae kwon do, respetando siempre las características de los estudiantes desde una perspectiva intercultural, ambiental e inclusiva.
           </p>
        </div>
      </div>
  </div>
</Item>




<div className="line_center"></div>

<div className="oracion">
            <div className="col-md-6 centered p-md-5 pt-5 pb-5">
                <div>
                    <div className="subheading text-color-title"><h1>Oración al Señor de los Milagros</h1></div>
                          <div className="heading text-color">
                            <h3 style={milagros}> Nuestro Santo Patrón Señor de los Milagros</h3>
                          </div>
                        <div className="col-md-7 texto_nosotros">
                          
                                    <p className="text-color">
                                  Señor de los milagros, porque te amo he venido a visitarte 
                                  para alabarte, bendecirte y darte gracias por tantos favores que me has concedido.
                                  <br/>
                                  <br/>
                                  Señor de los milagros, porque te amo me arrepiento de todos los pecados que he
                                  cometido por los cuales te he crucificado de nuevo en mi vida y en mi corazón. 
                                  te prometo desde hoy, comenzar una vida nueva llena de paz y tranquilidad.
                                  <br/>
                                  <br/>
                                  Señor de los milagros si quieres puedes curarme, curame señor de la enfermedad del 
                                  pecado y de las demás enfermedades que me hacen sufrir.
                                  <br/>
                                  <br/>
                                  Señor de los milagros porque te amo yo me consagro a ti con mi familia, y mis seres queridos
                                  con mi trabajo, mis problemas y mis alegrías.
                                  <br/>
                                  <br/>
                                  Amen
                                  </p>
                          
                        </div>
                </div>
            </div>
                  <div className="col-md-6 px-0">
                        <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/sdlm%20maado%20de%20dios.jpg?alt=media&token=6c67d3fa-f25d-4827-921c-7e4e1d3e294f" className="imgslickz" alt="#"/>
                  </div>
  </div>



{/* gallery CC GRID */}


<div className="container_gallery">
<div className="line"></div>
  <h1 className="text-center text-color-title">!BIENVENIDOS A LA FAMILIA AMADINA!</h1>
  <div className="">
  <div className="wrapper">
   <div className="box">
        <div className="view overlay hm-black-light gallery-item">
           <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/foto-dos-fundador.jpeg?alt=media&token=048c5779-e7e8-4a51-ba16-ff0fa58ef6f6" alt="foto-dos-fundador" className="img-fluid"/>
              <div className="mask flex-center">
              <div className='text-center text-color-title'>Amado de Dios</div>
                <div className='text-center text-color'>Fundador</div>
          </div>
        </div>
   </div>
   <div className="box">
   <div className="view overlay hm-black-light gallery-item">
    <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/directora-colegio-amado-de-dios(1).jpeg?alt=media&token=e8351f66-402e-4f9f-86ba-d56ffccad5a5" alt="directora-colegio-amado-de-dios" className="img-fluid"/>
          <div className="mask flex-center">
            <div className='text-center text-color-title'>Amado de Dios</div>
            <div className='text-center text-color'>Directora</div>
          </div>
    </div>
   </div>
   <div className="box">
   <div className="view overlay hm-black-light gallery-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/foto%20de%201er%20local%20amado%20de%20dios%20colegio.jpg?alt=media&token=aa9ee4d9-dee1-4f5d-83ae-074a378ef1e1" alt="foto-del-colegio-amado-de-dios" className="img-fluid"/>
              <div className="mask flex-center">
                <div className='text-center text-color-title'>Amado de Dios</div>
                <div className='text-center text-color'>Av Aviación Mz B Lt 26 Urb Papa Juan XXIII San Borja</div>
              </div>
        </div>
   </div>
     <div className="box">
     <div className="view overlay hm-black-light gallery-item">
    <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/foto%20del%202do%20local%20amado%20de%20dios%20colegio.jpg?alt=media&token=c8cc5a8f-40d6-4132-9057-a7744de96733" alt="foto-del-segundo-local-colegio-amado-de-dios" className="img-fluid"/>
          <div className="mask flex-center">
                <div className='text-center text-color-title'>Amado de Dios</div>
                <div className='text-center text-color'>Av Aviación Mz B Lt 6 Urb Papa Juan XXIII San Borja</div>
          </div>
    </div>
     </div>
</div>


  </div>
</div>
{/* END CSS GRID */}

  <Footer/>
</ListContainer>

);