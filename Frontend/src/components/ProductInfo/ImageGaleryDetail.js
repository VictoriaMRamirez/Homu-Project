import React, { useState } from 'react';
import "../../styles/Accesories/ImageGaleryDetail.css";
import ModalImage from "react-modal-image";

function ImageGaleryDetail(props) {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className='detailImage' key={props.id}>
      <ModalImage
        className={props.title}
        small={props.url}
        large={props.url}
        alt={props.title}
      />
    </div>
  )
}

export default ImageGaleryDetail;