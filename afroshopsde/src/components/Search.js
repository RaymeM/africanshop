import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  console.log(query);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="searchBar">
      <form className="Search" onClick={(e) => handleSubmit}>
        <label htmlFor="Search"><h2>Search Map</h2></label>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button><h2>Search</h2></button>
      </form>
    </div>
  );
}

export default Search;
