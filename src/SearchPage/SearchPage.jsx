import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import Result from "./Result/Result";
function SearchPage() {
  return (
    <div className="">
      <div className="searchPage">
        <div className="searchPage__left">
          <div className="searchPage__info">
            <p>300+ stays · Sep 8 - 17 · 2 guests</p>
            <h1>Stays in Washington</h1>
            <Button className="searchPage__button" variant="outlined">
              Cancellation flexibility
            </Button>
            <Button className="searchPage__button" variant="outlined">
              Type of place Price
            </Button>
            <Button className="searchPage__button" variant="outlined">
              Instant Book
            </Button>
            <Button className="searchPage__button" variant="outlined">
              More filters
            </Button>
          </div>
          <div className="searchPage__result">
            <Result
              src="https://a0.muscache.com/im/pictures/f0423602-9ccd-450c-bf22-9e204f8be209.jpg?aki_policy=x_large"
              title="Entire guest suite hosted by Richard "
              desc="4 guests · 1 bedroom · 2 beds · 1 bath"
              location="Cozy 1BR/1BA English Basement In Eastern Market"
              rating="4.97"
              price="79"
              total="2,223"
              count="58"
            />
            <Result
              src="https://a0.muscache.com/im/pictures/25a4e4eb-8443-4b8c-9f2c-9b32c1f2af05.jpg?aki_policy=x_large"
              location="Cozy 1BR/1BA English Basement In Eastern Market"
              title="Entire guesthouse hosted by Anita"
              desc="2 guests · 1 bedroom · 1 bed · 1 bath"
              rating="4.97"
              price="79"
              total="3,023"
              count="67"
            />
            <Result
              src="https://a0.muscache.com/im/pictures/145ec9e6-4650-4332-9d96-a66dc39e38ce.jpg?aki_policy=x_large"
              location="Modern, Eclectic Apartment in Charming Petworth"
              title="Entire guest suite hosted by Jessica And Alan"
              desc="4 guests · 1 bedroom · 2 beds · 1 bath"
              rating="4.97"
              price="79"
              total="1,423"
              count="97"
            />
            <Result
              src="https://a0.muscache.com/im/pictures/f5c4e09e-f314-479c-89c0-09fd0067672b.jpg?aki_policy=x_large"
              location="Newly Renovated Studio Steps From the Capitol"
              title="Entire guesthouse hosted by Tyler"
              desc="Newly Renovated Studio Steps From the Capitol"
              rating="4.97"
              price="79"
              total="1,023"
              count="34"
            />
          </div>
        </div>
        <div className="searchPage__right"></div>
      </div>
    </div>
  );
}

export default SearchPage;
