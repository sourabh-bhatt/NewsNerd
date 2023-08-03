import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>News Monkey - Top Headlines</h2>
          <div className="row">
            <div className="col-md-4">
              <NewsItem
                title="mytitle"
                description="my desc"
                imageUrl="https://cdn.theathletic.com/app/uploads/2023/08/02195725/GettyImages-1538245667-scaled-e1691023043974.jpg"
              />
            </div>
            <div className="col-md-4">
              <NewsItem title="mytitle" description="my desc" />
            </div>
            <div className="col-md-4">
              <NewsItem title="mytitle" description="my desc" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
