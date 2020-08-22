import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FlipMove from "react-flip-move";

import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";

function Feed(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const collection = db.collection("posts").orderBy("timestamp", "desc");
    console.log(collection);
    collection.onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts &&
          posts.map((post) => (
            <Post
              key={posts.text}
              displayName={post.displayName}
              userName={post.userName}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))}
      </FlipMove>
    </div>
  );
}

Feed.propTypes = {};

export default Feed;
