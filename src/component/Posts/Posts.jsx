/*
import React from "react";
import "./Posts.css";
import Post from "../Post/Post";

function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    </div>
  );
}

export default Posts;*/

import { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/blog").then((response) => {
      setPosts(response.data);
      console.log(response, "<<<");
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <img src={`http://localhost:8000/${post.image}`} alt={post.title} />
        </div>
      ))}
    </div>
  );
}

export default Posts;
