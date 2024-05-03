import React from 'react';
import DestinationCard from './DestinationCard';

const Destination = () => {
  return (
    <div className="container-fluid destination py-2">
    <div className="container py-5">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
        <h3 className="section-title fs-5 px-2">DESTINATION</h3>
        <h2 className="mb-1 fs-2">Popular Destination</h2>
        <p>Explore Touramint curated selection of popular destinations worldwide. From iconic landmarks of Europe to hidden treasures of Coastal islands, find your next adventure with ease.</p>
      </div>
      <div className="row">
        {/* First Column */}
        <div className="col-lg-4">
          <div className="row g-4">
            <DestinationCard
              link="..."
              imgSrc="https://www.flyngoo.com/img/new-york.jpg"
              imgAlt="New York Image"
              title="New York"
            />
            <DestinationCard
              link="..."
              imgSrc="https://www.flyngoo.com/img/las-vegas.jpg"
              imgAlt="Las Vegas City"
              title="Las vegas"
            />
          </div>
        </div>
        {/* Second Column */}
        <div className="col-lg-4 ">
          <div className="row g-4">
            <DestinationCard
              link="...."
              imgSrc="https://www.flyngoo.com/img/los-angelas.jpg"
              imgAlt="Los Angelas - Universal Studios"
              title="Los angelas"
            />
            <DestinationCard
              link="..."
              imgSrc="https://www.flyngoo.com/img/washington.jpg"
              imgAlt="Washington - Olympic National Park"
              title="Washington"
            />
          </div>
        </div>
        {/* Third Column */}
        <div className="col-lg-4">
          <div className="row ">
            <DestinationCard
              link=""
              imgSrc="https://www.flyngoo.com/img/san-francisco.jpg"
              imgAlt="San francisco - Golden Gate Bridge"
              title="San francisco"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};


export default Destination;
