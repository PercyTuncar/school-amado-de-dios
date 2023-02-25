import React from 'react';
import GalleryAmadoDeDios from '../components/GalleryAmadoDeDios';
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import '../firebase'

export default () => {    
    return (
      <>    
      <Navigation/>
        <div/>
            <div style={{marginTop: '50px'}}>
            <GalleryAmadoDeDios />
            </div>
        <div/>
        <Footer/>
      </>        
    )    
}