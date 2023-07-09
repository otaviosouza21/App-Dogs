import React from 'react';
import styles from './FeedPhotosItens.module.css';
import Image from '../../Help/Image';

const FeedPhotosItens = ({ photo,setModalPhoto }) => {

  function handleClick(){
    setModalPhoto(photo)

  }


  return (
    <li onClick={handleClick} className={styles.photo}>
      <Image src={photo.src} alt={photo.title}  />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItens;
