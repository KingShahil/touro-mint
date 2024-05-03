import React from 'react';

const AboutSection = () => {
  return (
    <div className="container-fluid about-sec my-5">
      <div className="container pt-5">
        <div className="row g-5">
          <div className="mt-7 col-lg-5 col-md-6 col-sm-12">
            <div className="h-100 position-relative">
              <img src="https://wallpapercave.com/wp/wp2100655.jpg" className="img-fluid w-80 rounded box-shadow custom-img" title="About Image" alt="about-img-1" style={{ marginBottom: '25%' }} />
              <div className="position-absolute w-75" style={{ top: '25%', left: '25%' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOyxtYuL2J6jrK8DeBSb06APXfWqwL9Ui-V-gMV2x7SPS2xqFF2eR2EzTCc22MGoeTyY&usqp=CAU" className="img-fluid w-100 rounded box-shadow custom-img" title="About Image" alt="about-img-2" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12" style={{ fontFamily: 'Baloo Bhai 2, sans-serif' }}>
            <h3 className="text-primary fs-6 about-us">ABOUT US</h3>
            <h2 className="mb-4 fs-2 mt-3">About Touromint and its Motto</h2>
            <p className="text-justify fs-1.5">
              <a href="....." className="text-dark">Touroomint</a>, your ultimate destination for discovering unbeatable deals on
              <a href="....." className="text-dark">flights</a>, exclusive offers, and remarkable discounts to a myriad of
              <a href="....." className="text-dark">destinations</a> worldwide. At
              Touroomint, we understand the thrill of exploring new places, whether they're popular hotspots or hidden gems waiting to be discovered. Our platform is designed to cater to every traveler's needs, providing a seamless experience in finding the best prices for your dream getaway. With FlynGoo, you're not just booking a flight; you're embarking on an adventure filled with possibilities. Our team tirelessly scours the web to bring you the most competitive fares, ensuring that your travel dreams are within reach. Join us on our journey and let FlynGoo be your passport to unforgettable experiences around the globe.
            </p>
            <div className="text-center">
              <div className="middle">
                <a href=".....">
                  <button className="btn btn-info fs-2">Read More..</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
