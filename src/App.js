import Parser from 'rss-parser';
import { useState, useEffect } from 'react';

import './App.css';

function App() {
  let parser = new Parser();
  const [post, setPost] = useState([]);

  useEffect(() => {
    rss();
  }, []);

  async function rss() {
    await parser
      .parseURL('https://blog-rss-notices.herokuapp.com/posts/feed')
      .then((res) => {
        setPost(res.items);
      });
  }

  return (
    <div className="container">
      {post.map((i) => {
        return (
          <div key={i.guid} className="card">
            <img src={i.guid} alt="" />
            <div className="cardContent">
              <h3>{i.title}</h3>
              <p>
                {i.content} <a href={i.link}>[Leia Mais] </a>
              </p>
              <span>Fonte: Ac24horas (http://ac24horas.com.br)</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
