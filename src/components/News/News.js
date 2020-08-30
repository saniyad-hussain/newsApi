import React, { useEffect, useState } from 'react';
import SIngle from '../SingleNews/SIngle';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const api = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-30&sortBy=publishedAt&apiKey=ffc44e3cda48478f8f7d4e56939660af';
        fetch(api)
        .then(res => res.json())
        .then(data => setNews(data.articles))
    },[])
    return (
        <div className="container"> 
            <div className="row">
            {
                news.map(article => <SIngle article={article}></SIngle>)
                }
            </div>
        </div>
    );
};

export default News;