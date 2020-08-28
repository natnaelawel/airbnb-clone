/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import classes from "./Result.module.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Button } from "@material-ui/core";
import StarHalfIcon from "@material-ui/icons/StarHalf";

function Result({ src, location, title, desc, rating, price, total, count }) {
  return (
    <div>
      <div className={classes.searchResult}>
        <img className={classes.searchResult__img} src={src} alt="" />
        <div className={classes.searchResult__info}>
          <div className={classes.searchResult__info__top}>
            <div>
              <p>{location}</p>
              <h2>{title}</h2>
            </div>
            <FavoriteBorderIcon />
          </div>
          <div className={classes.searchResult__info__desc}>
            <h4>{desc}</h4>
            <h4>Wifi Air Conditioning kitchen</h4>
            <Button
              variant="outlined"
              className={classes.searchResult__info__desc__button}
            >
              <p>💎Rare find</p>
            </Button>
          </div>
          <div className={classes.searchResult__info__footer}>
            <div className={classes.searchResult__info__rating}>
              <StarHalfIcon className={classes.searResult__ratingIcon} />
              <span>
                {rating}({count})
              </span>
            </div>
            <div className={classes.searchResult__info__pricing}>
              <div className={classes.searchResult__info__single}>
                <span>
                  <strong>${price}</strong> / night
                </span>
              </div>
              <div className={classes.searchResult__info__total}>
                ${total} total
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
