import React from "react";
import PropTypes from "prop-types";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

import "./Widgets.css";

function Widgets(props) {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/reactjs"}
          options={{ text: "#reactjs is awesome", via: "reactjs" }}
        />
      </div>
    </div>
  );
}

Widgets.propTypes = {};

export default Widgets;
