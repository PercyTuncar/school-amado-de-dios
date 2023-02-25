import React from 'react'
// -----
import Navigation from '../components/navigation'
import Slider from '../components/sliderhome';
import ReadMoreReact from 'read-more-react';
import ObjetivosPEI from '../components/ObjetivosPEI';
import ValoresDeLaInstitucion from '../components/ValoresDeLaInstitucion';
import MensajeDeLaDirectoa from'../components/MensajeDeLaDirectora';
import Footer from '../components/footer'
import './style.css'
import GetAnio from '../components/dataAnio'
import '../firebase'
// ----

const HomePage = ({ data }) => {
  
	return (
		<>
    <Navigation/>
       <Slider />
     <div className='homePage'>
          <div  className='col-12 text-center arriba' >
            <div className='title_responsive text-color-title'><h1>Nuestra propuesta pedagógica</h1> </div>
                  <div className='propuesta text-color'>
                    <ReadMoreReact   text={"La propuesta pedagógica de La Institución Educativa Privada “Amado de Dios” es: tener como propósito mejorar el nivel de aprendizaje, según los resultados precisados en el diagnóstico que responde a las características, necesidades e intereses de los estudiantes y la implementación del enfoque formatico, Desde este enfoque, la evaluación es un proceso sistemático en el que se recoge y valora información relevante acerca del nivel de  desarrollo de las competencias en cada estudiante, con el fin de contribuir oportunamente su aprendizaje, acción pedagógica expresada en la implementación del Currículo Nacional de la Educación Básica (CNEB) Y EL PCI de la institución. Se plantean los compromisos de gestión escolar, los enfoques transversales, las orientaciones para el proceso de enseñanza y aprendizaje, teorías pedagógicas, las orientaciones pedagógicas para el desarrollo de competencias, los principios psicopedagógicos, los perfiles de los actores, la diversificación curricular, demandas educativas y sistema de evaluación, elementos que guiarán y orientarán el proceso de enseñanza, aprendizaje y la toma de decisiones sobre como mejorar las condiciones de aprendizaje que parten de los saberes y valores de la cultura local y los articulan con nuevos conocimientos."}
                                  min={80}
                                  ideal={100}
                                  max={200}
                                  readMoreText="haga clic aquí para leer más..."/>
                  </div>
          </div>
       <div className="aniversarioImg">
         <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/2023%20IEP%20AMADO%20DE%20DIOS%20ANIVERSARIO.png?alt=media&token=8a419b2a-77cb-49ea-808c-faf338c282f3" alt='30 años del colegio amado de dios'/>
       </div>
       <ObjetivosPEI/>
       <section className='container-fluid'>
        <div className='row m-10-hor valoreshome'>
          <div className='col-12 text-center'>
            <h1 className="text-color-title title_responsive">¿Qué valores practicamos en nuestro trabajo diario?</h1>
            <div className='row'>
              <div className='col-md-8 mx-auto title_responsive'>
                <p className='content text-color'>
                Practicamos los valores de 
                responsabilidad, respeto, justicia, solidaridad 
                y superación personal.  <br/>
                <br/>
                Compartimos con todas las instituciones 
                educativas los principios de: ética, 
                equidad, inclusión, democracia, interculturalidad, conciencia
                  ambiental, creatividad e innovación, valores que ayuden a regular la convivencia. 
                </p>
              </div>
            </div>
          </div>
          <ValoresDeLaInstitucion/>
        </div>	
        <div className="acm-stats style-1">
      
              <ul>
                <li className="stats-asset">
                  <h1 className="stats-item-counter text-color-title" id='anios'> Año Escolar   <GetAnio/>
                  
                  </h1>
                 
                          <span className="stats-subject"> <a className="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                          Matrícula Abierta <span role="img" aria-label="donut">👇</span>  </a>
                          </span>
                          <div className="collapse tarjeta" id="collapseExample">
                            <div className="card card-body">
                            <div className="card card-body">
                            <span className="stats-description description_responsive">Somos Amadinos, más de 32 años al servicio de la educación. de Tradición y Excelencia Educativa. <br/><br/>
                                          <a href="#contacto"> Contáctenos » <span role="img" aria-label="donut">👇</span> </a>
                                          </span>
                            </div>
                            <div className="stats-asset">
                                <h1 className="stats-item-counter text-color-title"> Realiza Pagos	</h1>
                                <span className="stats-subject">Pensado en su comodidad</span>
                                <a href="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/INFORMACION%20DE%20SERVICIO%20EDUCATIVO%20INICIAL%20PRIMARIA%20Y%20SECUNDARIA%202023.pdf?alt=media&token=cab95990-2a89-4f41-9fd8-5c15bd6488d0" target="_blank" rel="noopener noreferrer"> Costo, matrícula y pensión <GetAnio/> haciendo click aquí </a>
                            </div>
                            </div>
                          </div>
                      </li>
                    </ul>
        </div>		
    </section>

        <MensajeDeLaDirectoa/>
        </div>
        <Footer/>
		</>
	)
}



export default HomePage

