import React from "react";

import classes from "./Header.module.css";
import { Avatar } from "@material-ui/core";
// import {SearchIcon} from "@material-ui/icons/";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";

import logo from "./airbnb.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={classes.header}>
      <Link to="/">
        <img src={logo} className={classes.App__logo} alt="logo" />
      </Link>
      <div className={classes.header__center}>
        <input
          type="text"
          name=""
          placeholder="Start your search"
          className={classes.header__center__input}
          id="search__input"
        />
        <SearchIcon />
      </div>
      <div className={classes.header__right}>
        <p>Become a host</p>
        <ExpandMoreIcon />
        <LanguageIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
