import './SearchBar.scss';

const SearchBar = ({ query, onSearchChange }) => {
  return (
    <div className='SearchBar'>
      <div className="SearchBar__first">
        <span className="SearchBar__icon" />
        <input
          className="cc28"
          type="search"
          placeholder='Search by name'
          value={query}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
