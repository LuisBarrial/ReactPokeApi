import React, { useState } from "react";




const Searchbar = (props) => {
    const onSearch = props.onSearch;
    const [search, setSearch]=useState('');
    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
          onSearch(null);
        }
      };
    
      const onClick = async (e) => {
        onSearch(search.toLowerCase());
      };
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input 
                placeholder="Buscar Pokemon..."
                onChange={onChange}
                />
            
            </div>
            <div className="searchbar-btn">
                <button type="button" onClick={onClick}>Buscar</button>
            </div>

            
        </div>

    )
}

export default Searchbar;