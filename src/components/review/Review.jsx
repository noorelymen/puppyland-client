import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import "./Review.scss";

const Review = ({ review }) => {
  const { data: user, loading, error } = useFetch(`/users/${review.userId}`);
  const stars = Array.from({ length: review.star }, (_, index) => index + 1);

  return (
    <div className="review">
      <div className="user">
        {loading && <span>Loading user...</span>}
        {error && <span>Something went wrong!</span>}
        {user && (
          <>
            <img src={user.img} alt="" />
            <div className="info">
              <span className="user-name">
                {user.firstname} {user.lastname}
              </span>
              <span className="location">{user.city}</span>
            </div>
          </>
        )}
      </div>
      <div className="stars">
        <span className="notation">
          {stars && stars.map((item) => <span key={item}>★</span>)}{" "}
          {review.star}/5
        </span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <p className="title">Helpful?</p>
        <span>
          <FontAwesomeIcon className="faIcon" icon={faThumbsUp} />
          Yes
        </span>
        <span>
          <FontAwesomeIcon className="faIcon" icon={faThumbsDown} />
          No
        </span>
      </div>
    </div>
  );
};

export default Review;
