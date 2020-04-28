# React-BasicBlog-App
Created with CodeSandbox

Following code needs to be replaced in home.js under pages folder.
------------------------------------------------------------------
This has to be done in order to fetch the data from backend mentioned i.e in another repo named React-BasicBlog-App-Backend.

```
import React, { Fragment, useState, useEffect } from "react";
import Post from "../Components/Post";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import routes from "../routes/routes";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://b31ic.sse.codesandbox.io/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts);
      })
      .catch(console.error);
  }, []);

  return (
    <Fragment>
      {posts.map((post, postIndex) => {
        const onReadMore = () => {
          history.push(routes.post.replace(":id", post.id));
        };

        return (
          <Fragment key={postIndex}>
            <Post
              title={post.title}
              author={post.author.name}
              content={post.content}
              isOnlySummary
            />
            <div className={"container"}>
              <Button onClick={onReadMore} color={"primary"}>
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
```
Further improved code will be added with time .
