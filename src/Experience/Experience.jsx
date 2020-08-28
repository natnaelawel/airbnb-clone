import React from "react";
import classes from "./Experience.module.css";
import { Button } from "@material-ui/core";
import Content from "./Card/Content";

function Experience() {
  return (
    <div className={classes.experience}>
      <div className={classes.experience__header}>
        <div className={classes.experience__header__content}>
          <h1 className={classes.experience__header__content__h1}>
            Broadway Online Experiences
          </h1>
          <h4 className={classes.experience__header__content__h4}>
            Join live, interactive performances and conversations with people
            from Broadway and beyond. Without leaving home.
          </h4>
        </div>
        <Button className={classes.experience__header__button}>
          Explore all
        </Button>
      </div>
      <div className={classes.experience__content}>
        <div className={classes.experience__content__left}>
          {/* left */}
          <Content
            src="https://a0.muscache.com/im/pictures/38aeacb5-7e77-4bf6-a813-754605020922.jpg?im_w=480"
            text="Day in the life of a Las Vegas dancer"
          />
        </div>
        <div className={classes.experience__content__right}>
          <div className={classes.experience__content__right__upper}>
            <div
              className={classes.experience__content__right__upper__content}
              style={{ marginRight: 10 }}
            >
              <Content
                src="https://a0.muscache.com/im/pictures/7f607dbc-c51c-482e-8b67-55ded3e7f864.jpg?im_w=320"
                text="Day in the life of a Las Vegas dancer"
              />
            </div>
            <div className={classes.experience__content__right__upper__content}>
              <Content
                src="https://a0.muscache.com/im/pictures/e77da774-9e72-46d6-a7fd-7d159f823046.jpg?im_w=320"
                text="Day in the life of a Las Vegas dancer"
              />
            </div>
          </div>
          <div className={classes.experience__content__right__lower}>
            <div className={classes.experience__content__right__lower__div}>
              <Content
                className={classes.experience__content__right__upper}
                src="https://a0.muscache.com/im/pictures/d88db0e7-ef5b-49c6-ae07-af3525ac252f.jpg?im_w=480"
                text="Day in the life of a Las Vegas dancer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
