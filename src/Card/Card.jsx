import React from "react";
import classes from "./Card.module.css";

function Card({ title, src, description, price }) {
  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={src} alt="" />
      <div className={classes.card__info}>
        <h2 className={classes.card__info__h2}>{title}</h2>
        <h4 className={classes.card__info__h4}>{description}</h4>
        <strong className={classes.card__info__strong}>{price}</strong>
      </div>
    </div>
  );
}

export default Card;
