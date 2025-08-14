import React, { useState } from 'react'
import './SearchBar.scss'

const SearchBar = () => {
      const [query, setQuery] = useState('');

        const results = ['test 22', 'test 33', 'test4 44'];

          const filteredResults = results.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='SearchBar'>
        <div className="SearchBar__first" >
            <span className="SearchBar__icon"/>
            <input className="cc28" type="search" placeholder='Search by name'
                value={query}
          onChange={(e) => setQuery(e.target.value)}
            />
        </div>

{query && (
        <div className="SearchBar__results">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, index) => (
              <p key={index} className="SearchBar__result cc26">
                {item}
              </p>
            ))
          ) : (
            <p className="cc26 noresults">No results found</p>
          )}
        </div>
      )}

        
    </div>
  )
}

export default SearchBar