import { useState } from "react";

import "./style.css";

function Search({ onSearch, style }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <div style={style}>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
