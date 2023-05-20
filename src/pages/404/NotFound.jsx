import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './NotFound.scss'

const NotFound = () => {
  return (
      <div className="not-found">
        <div className="container">
          <h1 className="">Oops..!</h1>
          <h3 className="text-muted">Page Not Found !</h3>
          <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /> Go back to home page</Link>
        </div>
      </div>
  );
}

export default NotFound