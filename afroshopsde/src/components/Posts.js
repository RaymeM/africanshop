import {useState, useEffect} from "react";
import axios from "axios";




function Posts() {
    const [posts, setPosts] = useState([]);

const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/shops");
    setPosts(response.data);
  } catch (error) {} 

}

useEffect(() => {
  getPosts();
}, []);

console.log("this is my data", posts)

  return (
    <div>
      {posts.map((element)=>{
        return <p key={element.name}> {element.owner}</p>;
      })

      }
    </div>
  );
}

export default Posts;
