import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import "./Adoptions.scss";

const Adoptions = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isLoading, error, data } = useQuery({
    queryKey: ["adoptions"],
    queryFn: () =>
      request.get(`/adoptions/`).then((res) => {
        return res.data;
      }),
  });

  const handleContact = async (adoption) => {
    console.log("Adoption", adoption);
    const rescuerId = adoption.rescuerId;
    const adopterId = adoption.adopterId;
    const id = rescuerId + adopterId;

    console.log("id", id);

    try {
      const res = await request.get(`/conversations/conversation/${id}`);
      navigate(`/message/${res.data._id}`);
    } catch (err) {
      if (err.response.status === 404) {
        console.log("currentUser.isRescuer", currentUser.isRescuer);
        console.log("adopterId", adopterId);
        console.log("rescuerId", rescuerId);
        const res = await request.post(`/conversations/`, {
          to: currentUser.isRescuer ? adopterId : rescuerId,
        });

        console.log(res.data);
        navigate(`/message/${res.data._id}`);
      }
    }
  };

  return (
    <div className="my-adoptions">
      <div className="container">
        <span className="breadcrumbs">PUPPYLAND &gt; MY ADOPTIONS</span>

        <div className="title">
          <h1>My Adoptions</h1>
          <Link to="/puppies">
            <button className="button">Adopt a new puppy</button>
          </Link>
        </div>
        <hr />
        <table>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Breed</th>
            <th>{currentUser.isOwner ? "Adopter" : "Owner"}</th>
            <th>Contact</th>
          </tr>

          {isLoading ? (
            <tr>
              <td colSpan="5" className="message-column">
                Loading
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="5" className="message-column">
                Something went wrong!
              </td>
            </tr>
          ) : data.adoptions && data.adoptions.length > 0 ? (
            data.adoptions.map((adoption) => (
              <tr key={adoption._id}>
                <td>
                  <img src={adoption.photo} alt="" />
                </td>
                <td>
                  <Link to={`/puppy/${adoption.puppyId}`}>{adoption.name}</Link>
                </td>
                <td>{adoption.breed}</td>
                <td>{data.owner.firstname + " " + data.owner.lastname} </td>
                <td>
                  <FontAwesomeIcon
                    className="faIcon"
                    icon={faPaperPlane}
                    onClick={() => handleContact(adoption)}
                  />
                  <FontAwesomeIcon className="faIcon" icon={faTrash} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="message-column">
                No applications for adoption yet!{" "}
                <Link to={`/puppies/`}>Browse puppies for adoption.</Link>
              </td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

export default Adoptions;
