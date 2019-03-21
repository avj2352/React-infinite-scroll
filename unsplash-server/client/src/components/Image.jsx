import React from 'react';

const Image = props => {
    const {image} = props;
    return(
        <img className="single-photo" src={image.urls.thumb} alt="image"/>
    );
};

export default Image;