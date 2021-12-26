import React from "react";

function SearchBar(props){
    return (
        <input type="text" placeholder="Filter by Search" className="search"
        onChange={(e) => props.onSearch(e.target.value)} value={props.value}
        />
    );
}

export default SearchBar;