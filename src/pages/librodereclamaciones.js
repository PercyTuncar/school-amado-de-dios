import React from "react";
import posed from 'react-pose';
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './librodereclamaciones.css'

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});

const style={
  textAlign:'center',
  marginTop:'50px'
}


export default () => {

  return (
    <ListContainer>
         <Navigation/>
        
      
        <div className="text-color-title text-center banner_libro">
          <h1>Libro de reclamaciones 2022</h1>
          <img  src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/illustrations%2Fundraw_Bibliophile_hwqc.svg?alt=media&token=2d94e36c-1ed5-4415-8c0f-255115de40f8' alt="imagen-del-libro-de-reclamaciones"/>
        </div>
       
      <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-6'>
                
              </div>
              <div className='col-md-6'>
              
              </div>
            </div>
          </div>
      <Item className='container-fluid'>

        <div className='liibro_de_reclamaciones'>
         
            <div className="libro_form">
              <h2 className="text-color-title">INICIAL y PRIMARIA</h2>
              <p className="text-color">Av Aviación Mz B Lt 26 Urb Papa Juan XXIII San Borja</p>
              <ul  className="text-color">
                <li>RD de funcionamiento nivel Inicial N° 000482</li>
                <li>RD de funcionamiento nivel Primaria N° 00155</li>
              </ul>
                <div class="btn text-center" onClick={()=> window.open("//forms.gle/AVEhZUsQzUTtwX6w8", "_blank")}  onKeyDown={"form"}  role="button" tabIndex="0">
                  <span>Ver libro de reclamaciones</span>
                </div>
            </div>
      
          <div className="libro_form">
              <h2 className="text-color-title">SECUNDARIA</h2>
              <p  className="text-color">Av Aviación Mz B Lt 6 Urb Papa Juan XXIII San Borja</p>
              <ul  className="text-color">
                <li>RD de funcionamiento nivel Secundaria N° 00155 </li>
              </ul>
              <div class="btn text-center" onClick={()=> window.open("//forms.gle/AVEhZUsQzUTtwX6w8", "_blank")}  onKeyDown={"form"}  role="button" tabIndex="0">
                  <span >Ver libro de reclamaciones</span>
                </div>
            </div>
       
        </div>


    <div className="line"></div>
        <div className='col-md-12 pl-md-5 center' style={style}>
        <h4 className="text-color-title">Más información </h4>
        <p  className="text-color mas_info">Señor padre de familia los reportes serán respondidos en la brevedad 
          posible con la finalidad de hacer prevalecer el
          bienestar de toda la comunidad Amadina. </p>
        </div>
    <div className="line"></div>

      </Item>

    <Footer/>
    </ListContainer>
  );
};