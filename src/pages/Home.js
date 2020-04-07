import React, { Fragment, useState } from "react";
import postData from "../mockData/postData";
import Post from "../Components/Post";
import { Button } from "reactstrap";

const Home = () => {
  const [posts, setposts] = useState(postData);
  return (
    <Fragment>
      {posts.map((post, postIndex) => {
        return (
          <Fragment key={postIndex}>
            <Post
              title={post.title}
              author={post.author}
              content={post.content}
              isOnlySummary
            />
            <div className={"container"}>
              <Button color={"primary"}>
                Read More
              </Button>
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Home;
