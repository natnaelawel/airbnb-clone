import React, { useState } from "react";
import classes from "./Banner.module.css";
import { Button } from "@material-ui/core/";
import Search from './Search/Seach'
import { useHistory } from "react-router-dom";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const history =  useHistory();

  return (
    <div className={classes.banner}>
      <div className={classes.banner__search}>
        <Button
          className={classes.banner__search__searchButton}
          variant="outlined"
          onClick={(e) => {
            setShowSearch(!showSearch);
          }}
        >
         {!showSearch ? 'Search Dates' : 'Hide'}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className={classes.banner__info}>
        <h1 className={classes.banner__info__h2}>
          Get out and stretch your imagination
        </h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you
        </h5>
        <Button onClick={()=>{history.push('/search')}} className={classes.banner__info__button} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
