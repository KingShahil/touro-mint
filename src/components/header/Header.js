import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from "../assets/images/logo.png";


const Header = () => {

  
  return (
    
      <nav className="navbar navbar-expand-lg navbar-cstm bg-body-tertiary p-2 container-fluid">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold fs-4">
          <img src={logoImage} alt="Logo" style={{ maxWidth: '150px' }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-2">
              <li className="nav-item px-1">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item px-1">
                <Link to="/airlines" className="nav-link">Airlines</Link>
              </li>
              <li className="nav-item px-1">
                <Link to="/cheapflight" className="nav-link">Cheap Flights</Link>
              </li>
              <li className="nav-item px-1">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item px-1">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            <button className="btn btn-outline-danger" type="submit">call:+1(844)741-999</button>
          </div>
        </div>
      </nav>
    
  );
};

export default Header;
