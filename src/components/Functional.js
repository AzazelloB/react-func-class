import { useState } from "react";

import Search from "./Search";
import Grid from "./Grid";
import Loader from "./Loader";

import { call } from "../helpers";

function Functional() {
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = async (text) => {
    setIsLoading(true);

    const searchedText = encodeURI(text);
    const query = `https://api.giphy.com/v1/gifs/search?api_key=JnxTmEGKXjZeUKBzRjTQoMDg8OX8pS5U&rating=pg&q=${searchedText}`;

    const result = await call(query);

    setUrls(result.data.map((gif) => gif.images.fixed_height.url));
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Functional</h1>

      <Search style={{ marginBottom: "20px" }} onSearch={makeRequest} />

      {isLoading ? (
        <Loader />
      ) : (
        <Grid urls={urls} render={(url) => <img src={url} alt="" />} />
      )}
    </div>
  );
}

export default Functional;
