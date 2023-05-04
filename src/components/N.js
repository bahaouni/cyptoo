import React, { useState, useEffect } from "react";
import "./N.css"; // import CSS file for styling

function N() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const url =
            "https://newsapi.org/v2/everything?q=bitcoin&apiKey=12f43489e4e9439e9f7605f4cbc463ea";

        fetch(url)
            .then((response) => response.json())
            .then((data) => setNews(data.articles))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="n">
            <h2>Top Crypto News</h2>
            <div className="news-container">
                {news.map((article, index) => (
                    <div key={index} className="article">
                        <img src={article.urlToImage} alt={article.title} />
                        <div className="article-content">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default N;
