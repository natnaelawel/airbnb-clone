import React from "react";
import classes from "./Content.module.css";

function Content({ src, text }) {
  return (
    
    <div className={classes.content}>
      <img className={classes.content__img} src={src} alt="content" />
      <div className={classes.content__info}>
        <h4 className={classes.content__info__h2}>{text}</h4>
      </div>
    </div>
  );
}

export default Content;
