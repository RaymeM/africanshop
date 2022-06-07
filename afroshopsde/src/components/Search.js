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
        <label htmlFor="Search">Search Map</label>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
