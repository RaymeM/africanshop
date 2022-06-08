import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Map from "./components/Map";
import NotFound from "./components/NotFound";
import ShopDetails from "./components/ShopDetails"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="map" element={<Map />} />
          <Route path="*" element={<NotFound />} />
          <Route path="posts/:id" element = {<ShopDetails/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
