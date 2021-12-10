import React from "react";

import Search from "./Search";
import Grid from "./Grid";
import Loader from "./Loader";

import { call } from "../helpers";

class ClassBased extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: [],
      isLoading: false
    };

    this.makeRequest = this.makeRequest.bind(this);
  }

  async makeRequest(text) {
    this.setState({
      ...this.state,
      isLoading: true
    });

    const searchedText = encodeURI(text);
    const query = `https://api.giphy.com/v1/gifs/search?api_key=JnxTmEGKXjZeUKBzRjTQoMDg8OX8pS5U&rating=pg&q=${searchedText}`;
    const result = await call(query);

    this.setState({
      ...this.state,
      urls: result.data.map((gif) => gif.images.fixed_height.url),
      isLoading: false
    });
  }

  render() {
    return (
      <div>
        <h1>ClassBased</h1>

        <Search style={{ marginBottom: "20px" }} onSearch={this.makeRequest} />

        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Grid
            urls={this.state.urls}
            render={(url) => <img src={url} alt="" />}
          />
        )}
      </div>
    );
  }
}

export default ClassBased;
