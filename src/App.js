import Parser from "rss-parser";
import { useState } from "react";

import "./App.css";

function App() {
  let parser = new Parser();
  const [post, setPost] = useState([]);

  rss();

  async function rss() {
    await parser
      .parseURL("https://blog-rss-notices.herokuapp.com/posts/feed")
      .then((res) => {
        setPost(res.items);
      });
  }

  return post.map((i) => {
    return (
      <div key={i.guid} className="container">
        <div className="card">
          <img src={i.guid} alt="" />
          <div>
            <h1>{i.title}</h1>
            <p>
              {i.content} <a href={i.link}>[Leia Mais]</a>
            </p>
          </div>
        </div>
      </div>
    );
  });
}

export default App;
