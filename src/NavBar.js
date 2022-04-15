import React, { useEffect, useState } from "react";
import "./Nav.css";
function NavBar() {
  const [show, handleshow] = useState(false);

  //Scroll effect listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
    return;
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
        alt="Netflix logo"
      />
      <img
        className="nav__avator"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </div>
  );
}

export default NavBar;
