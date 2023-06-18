import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import request from "../../utils/request";
import "./Message.scss";

const Message = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      request.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      console.log("Message:", message);
      return request.post(`/messages/`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      message: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          PUPPYLAND &gt; <Link to="/messages">MY MESSAGES</Link> &gt; JOHN DOE
        </span>
        <div className="title">
          <h1>John Doe</h1>
        </div>
        <hr />
        {isLoading ? (
          "Loading messages..."
        ) : error ? (
          "Something went wrong!"
        ) : data && data.messages.length > 0 ? (
          <div className="messages">
            {data.messages.map((message) => (
              <div
                className={
                  message.userId === currentUser.id ? "item owner" : "item"
                }
                key={message._id}
              >
                <img
                  src="https://avatars.githubusercontent.com/u/59196382?v=4"
                  alt=""
                />
                <p>{message.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No messages yet.</p>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea
            name=""
            placeholder="Write a message..."
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
