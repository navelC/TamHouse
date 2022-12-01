import React from "react";
import { Menu }from "../../components";
import { config } from "../../const"

const Header = () => {
  return (
    <div className="header">
      <div className="container flex-row">
        <div className="logo">Hello</div>
        <div className="no-space">
          <span className="input input--makiko">
            <input className="input__field input__field--makiko" type="search" name="search" id="input-16" placeholder="search"></input>
            <label className="input__label input__label--makiko" htmlFor="input-16">
              <span className="input__label-content input__label-content--makiko">bạn cần tìm gì... ?</span>
            </label>
          </span>
          <div>{config.phone}</div>
          <div>{config.email}</div> 
        </div>
      </div>
      <Menu></Menu>
    </div>
  );
};
export default Header