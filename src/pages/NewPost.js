import React, { useState, useEffect } from "react";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";

const NewPost = () => {
  const [authorId, setAuthorId] = useState("");
  const [postText, setPostText] = useState("");
  const [postTitle, setPostTitle] = useState("");

  const [authorsList, setAuthorsList] = useState([]);

  const onAuthorNameChange = event => setAuthorId(event.target.value);
  const onPostTextChange = event => setPostText(event.target.value);
  const onPostTitleChange = event => setPostTitle(event.target.value);

  useEffect(() => {
    fetch("https://ts5uf.sse.codesandbox.io/authors")
      .then(response => response.json())
      .then(data => {
        setAuthorsList(data.authors);
      })
      .catch(console.error);
  }, []);

  const submitForm = async event => {
    event.preventDefault();
    const postData = {
      title: postTitle,
      content: postText,
      author: authorId
    };
    const response = await fetch("https://b31ic.sse.codesandbox.io/posts", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container">
      <Form>
        <FormGroup>
          <Label for="postTitle">Post Title</Label>
          <Input
            type="text"
            name="post title"
            id="postTitle"
            placeholder="Post Title"
            value={postTitle}
            onChange={onPostTitleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="authorName">Author Name</Label>

          <Input
            id="authorName"
            type="select"
            value={authorId}
            onChange={onAuthorNameChange}
          >
            {" "}
            {authorsList.map(author => {
              return (
                <option key={author._id} value={author._id}>
                  {author.name}
                </option>
              );
            })}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input
            value={postText}
            onChange={onPostTextChange}
            type="textarea"
            name="text"
            id="exampleText"
          />
        </FormGroup>
        <Button type="submit" onClick={submitForm}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewPost;
