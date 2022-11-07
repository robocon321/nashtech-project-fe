import React from 'react'

import styles from './Map.module.css';


const Map = (props) => {
  return (
    <div className={styles.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2145946660494!2d106.78957301513731!3d10.871276392257188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2sUniversity%20of%20Agriculture%20and%20Forestry!5e0!3m2!1sen!2s!4v1667809265234!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div> 
   )
}

export default Map;