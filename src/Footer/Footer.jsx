import React from "react";
import classes from "./Footer.module.css";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__left}>
        <p>
          © 2020 Airbnb clone! No rights reserved! · Privacy · Terms · Sitemap
        </p>
        <p></p>
      </div>
      <div className={classes.footer__right}>
        <LanguageIcon />
        <Link className={classes.footer__langLink}>English</Link>
        <AttachMoneyIcon />
        <Link className={classes.footer__usd}>USD</Link>
        <div className={classes.footer__socialIcons}>
          <FacebookIcon className={classes.footer__socialIcons__icons} />
          <TwitterIcon className={classes.footer__socialIcons__icons} />
          <InstagramIcon className={classes.footer__socialIcons__icons} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
