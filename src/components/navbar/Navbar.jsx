import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Signin from "../../auth/Sign";
import Signup from "../../auth/Signup";
import { isAutheticated, signout } from "../../auth/helper";
import "./navbar.css";
import AddMeal from "../Addmeal";
import Dashboard from "../Dashboard";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [showDashBoard, setShowDashBoard] = useState(false);

  return (
    <div className="gpt3__navbar">
      {true && (
        <Signin open={showSigninModal} handleClose={setShowSigninModal} />
      )}
      {true && (
        <Signup open={showSignupModal} handleClose={setShowSignupModal} />
      )}
      {isAutheticated() && isAutheticated().user && (
        <AddMeal
          open={isAutheticated() && showAddMeal}
          handleClose={setShowAddMeal}
        />
      )}
      {isAutheticated() && isAutheticated().user && (
        <Dashboard
          open={isAutheticated() && showDashBoard}
          handleClose={setShowDashBoard}
        />
      )}

      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} /> */}
          <h1 className="hello">iCare</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#commands">Commands!</a>
          </p>
          <p>
            <a href="#medicines">Medicines</a>
          </p>

          <p>
            <a href="#hospitals">Hospitals</a>
          </p>

          <p>
            <a href="#footer">Contact us</a>
          </p>
          {isAutheticated() && (
            <p onClick={(e) => setShowAddMeal((old) => !old)}>
              <a>Add Meal</a>
            </p>
          )}
          {isAutheticated() && (
            <p onClick={(e) => setShowDashBoard((old) => !old)}>
              <a>Profile</a>
            </p>
          )}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        {isAutheticated() ? (
          <button onClick={() => signout(() => (window.location.href = "/"))}>
            Sign out
          </button>
        ) : (
          <>
            <p onClick={(e) => setShowSigninModal((old) => !old)}>Sign in</p>
            <button onClick={(e) => setShowSignupModal((old) => !old)}>
              Sign up
            </button>
          </>
        )}
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#about">About</a>
              </p>
              <p>
                <a href="#medicines">Medicines</a>
              </p>
              <p>
                <a href="#commands">Commands!</a>
              </p>
              <p>
                <a href="#footer">Contact us</a>
              </p>
              <p>
                <a href="#hospitals">Hospitals</a>
              </p>
            </div>
            {isAutheticated() ? (
              <button
                onClick={() => signout(() => (window.location.href = "/"))}
              >
                Sign out
              </button>
            ) : (
              <div className="gpt3__navbar-menu_container-links-sign">
                <p onClick={(e) => setShowSigninModal((old) => !old)}>
                  Sign in
                </p>
                <button
                  type="button"
                  onClick={(e) => setShowSignupModal((old) => !old)}
                >
                  Sign up
                </button>
                {isAutheticated() && (
                  <p onClick={(e) => setShowAddMeal((old) => !old)}>
                    <a>Add Meal</a>
                  </p>
                )}
                {isAutheticated() && (
                  <p onClick={(e) => setShowDashBoard((old) => !old)}>
                    <a>Profile</a>
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
