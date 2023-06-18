import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import useFetch from "../../hooks/useFetch";
import Slider from "infinite-react-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faArrowLeft,
  faBirthdayCake,
  faLocationDot,
  faPaw,
  faMarsAndVenus,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Reviews from "../../components/reviews/Reviews";
import "./Puppy.scss";

const Puppy = () => {
  const params = useParams();
  const { data, error, loading } = useFetch(`/puppies/${params.id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const opts = {
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      mute: 1,
      //controls: 0,
      //autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <>
      <div className="section puppypage">
        <div className="puppy-gallery">
          {loading && <span className="loading-text">Loading gallery...</span>}
          {data && data.puppy && (
            <Slider
              className="puppy-slider"
              nextArrow={
                <span style={{ fontSize: "14px" }}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              }
              prevArrow={
                <span style={{ fontSize: "14px" }}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              }
              arrowStyle={{ color: "white" }}
              centerMode
              slidesToShow={3}
              arrowsScroll={1}
            >
              <div className="puppy-image">
                <img
                  className="puppy-image"
                  src={data.puppy.photo}
                  alt={data.puppy.name}
                />
              </div>
              {data.puppy.gallery.map((img, index) => (
                <div className="puppy-image" key={index}>
                  <img src={img} alt="" />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
      <div className="section puppypage body">
        <div className="container">
          <div className="wrapper">
            <div className="box">
              {data && data.puppy && (
                <>
                  <span className="breadcrumbs">
                    PUPPYLAND &gt; PUPPY &gt; NAME
                  </span>
                  <h2 className="puppy-name">{data.puppy.name}</h2>
                  <hr />
                  <div className="puppy-qualities">
                    {/* <b>Qualities</b> */}
                    {data.puppy.qualities.map((quality, index) => (
                      <React.Fragment key={index}>
                        <span className="quality">{quality}</span>
                        <span className="bullet">•</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <hr />
                </>
              )}
              <h2 className="subtitle">Profile</h2>
              {loading && (
                <span className="loading-text">Loading description...</span>
              )}
              {data && data.puppy && (
                <p className="box-content">{data.puppy.desc} </p>
              )}

              <div className="video">
                <h2 className="subtitle">Video</h2>
                {loading && (
                  <span className="loading-text">Loading description...</span>
                )}
                {data && data.puppy && (
                  <div className="video-wrapper">
                    <YouTube
                      videoId={data.puppy.video}
                      opts={opts}
                      onReady={_onReady}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="box" key={params.id}>
              <Reviews puppyId={params.id} />
            </div>
          </div>
          <div className="sidebar">
            <div className="inner-box">
              <div className="box">
                {data && data.puppy && (
                  <div className="photo">
                    <img src={data.puppy.photo} alt="" />
                  </div>
                )}
                {loading && (
                  <span className="loading-text">Loading data...</span>
                )}
                {data && data.puppy && (
                  <>
                    <p className="puppy-info">
                      <FontAwesomeIcon className="faIcon" icon={faPaw} />
                      {data.puppy.breed}
                    </p>
                    <p className="puppy-info">
                      <FontAwesomeIcon
                        className="faIcon"
                        icon={faMarsAndVenus}
                      />
                      {data.puppy.gender}
                    </p>
                    <p className="puppy-info">
                      <FontAwesomeIcon
                        className="faIcon"
                        icon={faBirthdayCake}
                      />
                      {data.puppy.birthday}
                    </p>
                    <p className="puppy-info">
                      <FontAwesomeIcon
                        className="faIcon"
                        icon={faCalendarDays}
                      />
                      {data.puppy.age} years old
                    </p>
                    <p className="puppy-info">
                      <FontAwesomeIcon
                        className="faIcon"
                        icon={faLocationDot}
                      />
                      {data.puppy.city}
                    </p>

                    <hr />
                    <button href="#" className="button wishlist-btn">
                      <FontAwesomeIcon icon={faHeart} /> Save for later
                    </button>
                    <button href="#" className="button adopt-btn">
                      Apply for adoption
                    </button>
                  </>
                )}
              </div>
              <div className="box user-box">
                <div className="user">
                  <div className="photo">
                    <img
                      src="https://avatars.githubusercontent.com/u/59196382?v=4"
                      alt=""
                    />
                  </div>
                  <div className="items">
                    <div className="item-vertical">
                      <div className="name">
                        <span className="first-name">Nour</span>
                        <span className="last-name">Mebarki</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="title">From</div>
                      <div className="description">Algiers</div>
                    </div>
                    <div className="item">
                      <div className="title">Member since</div>
                      <div className="description">Apr 2023</div>
                    </div>
                    <div className="item">
                      <div className="title">Avg. response time</div>
                      <div className="description">4 hours</div>
                    </div>
                    <div className="item">
                      <div className="title">Rescued puppies</div>
                      <div className="description">8</div>
                    </div>
                    <div className="item-vertical about">
                      <hr />
                      <div className="description">
                        Rescue enthusiast dedicated to saving and transforming
                        the lives of precious puppies. Passionate about finding
                        them loving forever homes through adoption. Join me in
                        making a difference, one rescued pup at a time.
                      </div>
                      <button className="button">
                        <FontAwesomeIcon
                          className="faIcon"
                          icon={faPaperPlane}
                        />
                        Contact me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!data && <h1>No puppy data.</h1>}
      {error && <h1>Error: puppyPage</h1>}
    </>
  );
};

export default Puppy;
