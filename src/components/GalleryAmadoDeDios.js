import React from 'react'
import './GalleryAmadoDeDios.css'
import {useStaticQuery, graphql} from 'gatsby'
const GalleryAmadoDeDios = () => {
    const data = useStaticQuery(graphql`query CloudinaryImage {
            allCloudinaryMedia {
              edges {
                node {
                  secure_url
                }
              }
            }
          }`
    )
    const clImages = data.allCloudinaryMedia.edges
    return (
        <div className="galeriadeimagen" >
          <div className="image-grid">
            {clImages.map((image, index) => (
                  <div className="wave" key={`${index}-cl`}>
                    <img src={image.node.secure_url} alt={"no alt :("} />
                  </div>
                ))
            }
          </div>
        </div>
      )
  }
  export default GalleryAmadoDeDios

