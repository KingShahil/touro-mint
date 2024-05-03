import React from 'react';

const AirlinesSections = () => {
  return (
    <div className="container-fluid mb-5 bg-lightcyan text-dark">
      <div className="container text-center">
        <div className="d-flex justify-content-center">
          <div className="menu-content col-lg-9 pb-4">
            <div className="title text-center">
              <h3 className="section-title fs-5 px-2">AIRLINES</h3>
              <h2 className="ppl_dest mb-2 fs-1 fw-semibold">Top Airlines</h2>
              <p className="mt-3">
                Discover the top airlines featured on FlynGoo, offering exceptional service, comfort, and reliability. Fly with confidence as you have the choice to select major (& many) minor airlines.
              </p>
            </div>
          </div>
        </div>
        <div className="popular-flights text-start lh-1">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div className="col">
              <div className="card bg-light p-3 shadow-lg" style={{ transition: 'all 0.3s ease' }}>
                <h4 className="card-title">American Airlines</h4>
                <p className="card-text">Some description about American Airlines</p>
              </div>
            </div>
            <div className="col">
              <div className="card bg-light p-3 shadow-lg" style={{ transition: 'all 0.3s ease' }}>
                <h4 className="card-title">United Airlines</h4>
                <p className="card-text">Some description about United Airlines</p>
              </div>
            </div>
            {/* Add more airline cards here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlinesSections;
