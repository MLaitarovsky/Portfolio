/**
 * @copyright 2024 Michael Laitarovsky
 * @license Apache-2.0
 */

/**
 * Node modules
 * */
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const activeBox = useRef();
  const lastActiveLink = useRef();

  const initActiveBox = () => {
    console.log(lastActiveLink.current);
    console.log(activeBox.current);
    activeBox.current.style.top = lastActiveLink;
  };

  useEffect(initActiveBox, []);

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];
  return (
    <nav className={"navbar " + navOpen ? "active" : ""}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a key={key} href={link} className={className} ref={ref} onClick={null}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.PropTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
