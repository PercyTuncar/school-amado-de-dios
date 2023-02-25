import React from 'react';
import { Link } from '@reach/router';
import './ValoresDeLaInstitucion.css'

export default () => (
  <section className='container'>
        <div className='sub-container'>
            <div className="sub-sub-container">
            <div className='container-img'>
            <img className="img-insignia w-100" src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/insignia-min.webp?alt=media&token=8fc185f6-3835-4e32-95c5-49fe66418f74' alt='imagen de la insignia' />
          </div>
          <div className='container-left'>
        
              <div className="font-weight-light text-color-title" >
               <h1> Valores de la institución educativa.</h1>
              </div>
              <div className="heading text-color">
                Amado de Dios ___
              </div>
                <ul className="text-color">
                  <li>Responsabilidad</li>
                  <li>Respeto</li>
                  <li>Justicia</li>
                  <li>Solidaridad</li>
                  <li>Superación personal</li>
                </ul>
              <Link className='btn' to="/nosotros">
                <span>Sobre nosotros</span>
              </Link>
            
          </div>
          
            </div>
        </div>
    </section>
);