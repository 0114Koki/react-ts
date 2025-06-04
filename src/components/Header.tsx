import React from "react";
import { Link } from "react-router";
//<a>はここでは使わない。サーバーとのやり取りに使うから

const Header: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <span> / </span>
      <Link to="/s20">S20</Link>
      <span> / </span>
      <Link to="/s30">S30</Link>
      <span> / </span>
      <Link to="/ex30">Ex30</Link>
      <span> / </span>
      <Link to="/ex50">Ex50</Link>
      <span> / </span>
      <Link to="/ex70">Ex70</Link>
      <span> / </span>
      <Link to="/ex80">Ex80</Link>
      <span> / </span>
      <Link to="/ex90">Ex90</Link>
      <span> / </span>
      <Link to="/ex100">Ex100</Link>
      <span> / </span>
      <Link to="/zipsearch">ZipSearch</Link>
      <span> / </span>
      <Link to="/ex110">Ex110</Link>
      <span> / </span>
      <Link to="/ex120">Ex120</Link>
      <span> / </span>
      <Link to="/ex130">Ex130</Link>
      <span> / </span>
      <Link to="/ex140">Ex140</Link>
      <span> / </span>
      <Link to="/ex170">Ex170</Link>
      <span> / </span>
      <Link to="/ex180">Ex180</Link>
      <span> / </span>
      <Link to="/s220">S220</Link>
    </nav>
  );
};

export default Header;
