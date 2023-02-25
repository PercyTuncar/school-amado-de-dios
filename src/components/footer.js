import React from 'react'
import './footer.css'

//crear un objeto de estilos
const agency={ 
  color:'#fff347',
  marginTop:'50px'
}

export default () => (
<footer className='container-fluid black_more' id="contacto">
    <div className='footer_container'>

      <div className='footer_logo'>
        <div className='footer_uno'>
          <div className='heading amado'>
            <h2 className='font-weight-bold '><p>AMADO DE <span>DIOS</span></p></h2>
          </div>
          <div className='content_footer_logo'>
             <p>La I.E.P. “Amado de Dios” fue autorizada para funcionar por Resolución Ministerial  Nº 000155.</p>
          </div>
        </div>
      </div>

      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading title footer_title link'>
           <span> Contacto:</span>
           <div className='content'>
             <div><p>cegne@amadodedios.com</p></div>
          </div>
          </div>
        
          <div className='heading title footer_title link'>
          <span>  Telefono:</span>
          <div className='content'>
             <div><p>997 467 002</p></div>
          </div>
          </div>
        
        </div>
      </div>
      

      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading title footer_title link'>
           <span> Siguenos en:</span>
           <div  onClick={()=> window.open("//www.facebook.com/ColegioAmadoDeDios", "_blank")} onKeyDown={()=> window.open("//www.facebook.com/ColegioAmadoDeDios", "_blank")} role="button" tabIndex="0">
            <div className='content'>
            <p>Facebook</p>
            </div>
          </div>
          </div>

        
         
        </div>
      </div>

    </div>
    <div className='subfooter'>
      <div className='row m-10-hor'>
        <div className='col-md-6'>
          <div className='content'>© Copyrights 2022 <span className='font-weight-bold text-color'>Amado de Dios</span> Todos los derechos reservados.   
          
          
         
           </div>
        </div>
        <div className='col-md-6'>
          <div className='content-right text-color'>
          Creado por  <a href="https://bufalosdelaweb.com" target="_blank" rel="noopener noreferrer" style={agency}> Búfalos de la web </a>
            <i className="fa fa-heart text-gradient"></i>
            
          </div>
        </div>
      </div>
    </div>
  </footer>
)