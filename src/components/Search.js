import React from "react";
import '../styles/search.css';

const Search = () => {

    return (
        <div className="search">
            <p className="search__title">Search for products</p>
            <input type="text" placeholder="Type here" className="search__input" />
        </div>
    )
};

export { Search as default };
