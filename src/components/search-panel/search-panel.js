import React from "react";
import './search-panel.css';


const SearchPanel = () => {
    return (
        <form>
            <div className="search-panel form-inline">
                <input type="text" className="form-control" placeholder="Поиск"/>
                <button type="submit" className="btn btn-primary">Найти</button>
            </div>
        </form>
    );
};

export default SearchPanel;
