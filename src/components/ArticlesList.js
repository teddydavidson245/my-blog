// import articles from "../pages/article-content";
// For the component to be reusable, importing is not the way to go. Instead, we use the articles as props in the component.
// import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({articles}) => {
    return (
        <>
        {articles.map(article => (
            <Link key= {article.name} className="article-list-item" to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
        </>
    );
}

export default ArticlesList;
