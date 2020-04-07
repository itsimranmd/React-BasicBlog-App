import React from 'react';

const Post = ({title, author, content}) =>{
return(
  <div>
    <h1>{title}</h1>
    <p>{author}</p> 
    <p>{content}</p>
  </div>
)
}

export default Post;