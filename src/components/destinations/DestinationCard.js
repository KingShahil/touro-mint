
import React from 'react';
import "./DestinationCard.css"

const DestinationCard = ({ className, link, imgSrc, imgAlt, imgStyle, title }) => {
  return (
    <div className={`destination-img ${className} container`}>
      <a href={link}>
        <img className="img-fluid rounded w-100" src={imgSrc} alt={imgAlt} style={imgStyle} />
      </a>
      <div className="destination-overlay p-4">
        <h4 className="text-white mb-2 mt-3">{title}</h4>
        <a href="" className="btn-hover">View All Place <i className="fa fa-arrow-right ms-2"></i></a>
      </div>
    </div>
  );
};

export default DestinationCard;