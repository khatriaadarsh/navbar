import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between px-7 py-4 bg-sky-700 text-white">
      <ul>
        <li>
          <h3>Aadarsh Kumar</h3>
        </li>
      </ul>
      <ul className="flex gap-x-8">
        <li>
        <a href="/">Home</a>
        </li>
        <li>
          <a href="./About/about">About</a>
        </li>
        <li>
          <a href="./Skills/skills">Skills</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
