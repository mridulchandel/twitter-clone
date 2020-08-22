import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Button } from "@material-ui/core";
import firebase from "firebase";

import db from "./firebase";
import "./TweetBox.css";

function TweetBox(props) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Mridul Chandel",
      userName: "chandel_mridul",
      text: tweetMessage,
      image: tweetImage,
      verified: true,
      avatar:
        "https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            alt="Mridul Chandel"
            src="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"
          />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's Happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Image URL?"
          type="text"
        />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

TweetBox.propTypes = {};

export default TweetBox;
