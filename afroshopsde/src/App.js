import './App.css';
import {Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Search from "./components/Search";
import Posts from "./components/Posts";
import Map from "./components/Map";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element ={<Layout/>}>
          <Route path="home" element={ <Home/>} />
          <Route path="search" element={ <Search/>} />
          <Route path="posts" element={ <Posts/>} />
          <Route path="map" element={ <Map/>} />

          <Route path="*" element={ <NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
