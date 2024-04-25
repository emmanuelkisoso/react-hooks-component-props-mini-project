import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map(article => (
        <Article key={article.id} {...article} />
      ))}
    </main>
  );
}

export default ArticleList;
