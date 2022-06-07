import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("http://localhost:3000/shops")
      .then((res) => {
        setPosts(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <div className="posts-container">
      { loading ? "Loading...." : posts.map((post) => {
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
      
    </>
  );
}

export default Posts;
