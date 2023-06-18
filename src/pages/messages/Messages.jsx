import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "./Messages.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import request from "../../utils/request";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      request.get(`/conversations/`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return request.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="my-messages">
      <div className="container">
        <span className="breadcrumbs">PUPPYLAND &gt; MY MESSAGES</span>
        <div className="title">
          <h1>My Messages</h1>
        </div>
        <hr />
        <table>
          <tr>
            <th>Sender</th>
            <th>Last message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {isLoading ? (
            <tr>
              <td colSpan={4} className="message-column">
                Loading messages...
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan={4} className="message-column">
                {error.message}
                Something went wrong! Please make sure you are logged in and try
                again.
              </td>
            </tr>
          ) : data && data.length > 0 ? (
            data.map((conversation) => (
              <tr
                className={
                  ((currentUser.isRescuer && !conversation.readByRescuer) ||
                    (!currentUser.isRescuer && !conversation.readByAdopter)) &&
                  "active"
                }
                key={conversation._id}
              >
                <td>
                  {/* {data}; */}
                  {currentUser.isRescuer
                    ? conversation.rescuerId
                    : conversation.adopterId}
                </td>
                <td>
                  <Link to={`/message/${conversation._id}`}>
                    {conversation?.lastMessage?.substring(0, 100)}...
                  </Link>
                </td>
                <td>{moment(conversation.updatedAt).fromNow()}</td>
                <td>
                  {((currentUser.isRescuer && !conversation.readByRescuer) ||
                    (!currentUser.isRescuer &&
                      !conversation.readByAdopter)) && (
                    <FontAwesomeIcon
                      title="Mark as read"
                      className="faIcon"
                      icon={faEnvelopeOpen}
                      onClick={() => handleRead(conversation.id)}
                    />
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="message-column">
                No messages yet.
              </td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

export default Messages;
