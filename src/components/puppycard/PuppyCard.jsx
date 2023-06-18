import React from "react";
import { useNavigate } from "react-router-dom";
import "./PuppyCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faLocationDot,
  faPaw,
  faMarsAndVenus,
} from "@fortawesome/free-solid-svg-icons";

export default function puppyCard({ item }) {
  const navigate = useNavigate();
  return (
    <div className="puppy-card" onClick={() => navigate(`/puppy/${item._id}`)}>
      <div className="puppy-photo">
        <div
          className={item.available ? "available-label" : "unavailable-label"}
        >
          {item.available ? "Available!" : "Unavailable!"}
        </div>
        <img src={item.photo} className="puppy-card-image" alt={item.name} />
      </div>
      <div className="puppy-details">
        <span className="puppy-name">{item.name}</span>
        <span className="puppy-notation">★★★★★</span>
        <div className="deets-row">
          <span className="breed">
            <FontAwesomeIcon className="faIcon" icon={faPaw} /> {item.breed}
          </span>
          <span className="gender">
            <FontAwesomeIcon className="faIcon" icon={faMarsAndVenus} />{" "}
            {item.gender}
          </span>
        </div>
        <hr />
        <div className="deets-row">
          <span className="location">
            <FontAwesomeIcon className="faIcon" icon={faLocationDot} />{" "}
            {item.city}
          </span>
          <span className="age">
            <FontAwesomeIcon className="faIcon" icon={faBirthdayCake} />{" "}
            {item.age} yrs
          </span>
        </div>
        <div className="action-btns">
          <button
            className="details-btn btn"
            onClick={() => navigate(`/puppies/${item._id}`)}
          >
            Details
          </button>

          {item.available ? (
            <button
              className="adopt-btn btn"
              onClick={() => navigate(`/puppies/${item._id}`)}
            >
              Adopt now
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
