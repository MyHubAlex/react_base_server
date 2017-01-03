import React, { DOM } from 'react';

const Image = ( props ) => (
    DOM.img({
        src: props.src,
        alt: props.alt,
        style:{
          width: props.width,
          height: props.height,
        }
    })
);

export default Image;