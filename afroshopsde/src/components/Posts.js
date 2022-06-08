import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";
import pictureHome from "../../src/photos/freshFood.jpg";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://obscure-shelf-58262.herokuapp.com/shops")
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
      <div className="backgroundPicture">
      {/* <img src={pictureHome} alt="firstShop" width="600" height="400"/> */}
      
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
      </div></div>
      
    </>
  );
}

export default Posts;
