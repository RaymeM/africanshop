import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/shops")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post._id}
            name={post.name}
            id={post._id}
            owner={post.owner}
            description={post.description}
            email={post.email}
            telephoneNumber={post.telephoneNumber}
          />
        );
      })}
    </div>
  );
}

export default Posts;
