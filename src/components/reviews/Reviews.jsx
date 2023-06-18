import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useFetch from "../../hooks/useFetch";
import Review from "../review/Review";
import axios from "axios";
import "./Reviews.scss";

const Reviews = ({ puppyId }) => {
  const {
    data: reviews,
    loading,
    error,
    refetch,
  } = useFetch(`/reviews/${puppyId}`);

  //track the newly added reviews to display them in the DOM right after
  const [newReview, setNewReview] = useState({ star: "", desc: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;

    const api = axios.create({
      baseURL: "http://localhost:8800/api",
      withCredentials: true,
    });

    api
      .post(`/reviews/`, {
        puppyId,
        star,
        desc,
      })
      .then((response) => {
        toast.success("Review added successfully:", response.data); // Display success toast message

        setNewReview({ star: "", desc: "" }); // Clear the input fields
        refetch(); // Fetch the updated reviews from the server
      })
      .catch((error) => {
        if (error.response && error.response.data.message) {
          toast.error(error.response.data.message); // Display error message from the controller
        } else {
          toast.error("Failed to add review:", error); // Display generic error toast message
        }
      });
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <hr />
      {loading && <span>Loading reviews...</span>}
      {error && <span>Something went wrong!</span>}
      {!reviews || (reviews.length === 0 && <span>No reviews available!</span>)}

      {reviews &&
        reviews.map((review) => <Review key={review._id} review={review} />)}

      <div className="add">
        <h3>Add a review</h3>
        <hr />
        <form action="" className="add-review-form" onSubmit={handleSubmit}>
          <textarea
            name="review"
            id=""
            cols="30"
            rows="5"
            placeholder="Tell this rescuer how they are doing. Feedback is appreciated."
          ></textarea>
          <select name="" id="">
            <option defaultValue>Rating</option>
            <option value={1}>1 </option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
