import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userSvg from "../../assets/user.svg";
import heartSvg from "../../assets/heart.svg";
import cartSvg from "../../assets/cart.png";
import menuSvg from "../../assets/menu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBone,
  faDog,
  faEnvelope,
  faArrowRightFromBracket,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/puppy-care.png";
import request from "../../utils/request";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await request.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className={
          active || pathname !== "/"
            ? "section navbar active"
            : "section navbar"
        }
      >
        <div className="topbar">
          <p>Change the life of a puppy!</p>
        </div>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
            <span>Puppy Land</span>
          </div>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/puppies">Puppies</Link>
            </li>
            <li className="menu-item">
              <Link to="/shop">Shop</Link>
            </li>
            {/* <li className="menu-item">
              <Link to="/blog">Blog</Link>
            </li> */}
            <li className="menu-item">
              <Link to="/about">About</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="nav-items">
            <Link className="nav-link cart-icon" to="/cart">
              <img src={cartSvg} alt="" />
              <span className="cart-count">0</span>
            </Link>
            <Link className="nav-link" to="/wishlist">
              <img src={heartSvg} alt="" />
            </Link>
            {!currentUser && (
              <Link className="nav-link" to="/login">
                <img src={userSvg} alt="" />
              </Link>
            )}
            {currentUser && (
              <div className="user" onClick={() => setOpen(!open)}>
                <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
                <span>{currentUser?.firstname}</span>
                {open && (
                  <div className="options">
                    <ul className="menu">
                      <li className="menu-item">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="profile-icons"
                        />
                        <Link to="/my-profile">My profile</Link>
                      </li>
                      <li className="menu-item">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="profile-icons"
                        />
                        <Link to="/add-puppy">Add a puppy</Link>
                      </li>
                      <li className="menu-item">
                        <FontAwesomeIcon
                          icon={faBone}
                          className="profile-icons"
                        />
                        <Link to="/my-puppies">My puppies</Link>
                      </li>
                      <li className="menu-item">
                        <FontAwesomeIcon
                          icon={faDog}
                          className="profile-icons"
                        />
                        <Link to="/my-adoptions">My adoptions</Link>
                      </li>
                      <li className="menu-item">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="profile-icons"
                        />
                        <Link to="/my-messages">My messages</Link>
                      </li>
                      <li className="menu-item">
                        <FontAwesomeIcon
                          icon={faArrowRightFromBracket}
                          className="profile-icons"
                        />
                        <Link onClick={handleLogout}>Logout</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
            <Link className="nav-link hamburger-menu" to="/">
              <img src={menuSvg} alt="" />
            </Link>
          </div>
        </div>
        {(active || pathname !== "/") && (
          <>
            <hr />
            <div className="submenu">
              <Link
                to="/puppies?breed=cavalier-king-charles"
                className="submenu-item"
              >
                Cavalier King Charles
              </Link>
              <Link to="/puppies?breed=cocker-spaniel" className="submenu-item">
                Cocker Spaniel
              </Link>
              <Link
                to="/puppies?breed=german-shepherd"
                className="submenu-item"
              >
                German Shepherd
              </Link>
              <Link
                to="/puppies?breed=golden-retriever"
                className="submenu-item"
              >
                Golden Retriever
              </Link>
              <Link
                to="/puppies?breed=australian-shepherd"
                className="submenu-item"
              >
                Australian Shepherd
              </Link>
              <Link to="/puppies?breed=doberman" className="submenu-item">
                Doberman
              </Link>
              <Link to="/puppies?breed=border-collie" className="submenu-item">
                Border Collie
              </Link>
              <Link to="/puppies?breed=rottweiler" className="submenu-item">
                Rottweiler
              </Link>
              <Link to="/puppies?breed=french-bulldog" className="submenu-item">
                French Bulldog
              </Link>
              <Link to="/puppies?breed=pug" className="submenu-item">
                Pug
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
