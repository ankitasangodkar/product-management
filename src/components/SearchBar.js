import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <input type="text" placeholder="Filter by Search" className="search"
                onChange = {(e) => this.props.update(e)}
            />
        );
    }
}

export default SearchBar;