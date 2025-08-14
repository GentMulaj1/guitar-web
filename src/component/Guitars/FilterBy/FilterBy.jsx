import { useState } from 'react';
import './FilterBy.scss'

const FilterBy = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedFilter, setSelectedFilter] = useState('Filter by Type');

  const options = ["Type" ,'Price', 'Newest', 'Oldest'];

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedFilter(`Filter by ${option}`);
    setIsOpen(false);
  };

  return (
    <div className='FilterBy'>
      <div className="FilterBy__first" onClick={handleToggle}>
        <span className="FilterBy__filter"/>
        <p className="cc28">{selectedFilter}</p>
        <span className="FilterBy__arrow"/>
      </div>

      {isOpen && (
        <div className="FilterBy__results">
          {options.map((option, index) => (
            <p
              key={index}
              className="FilterBy__result cc26"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </p>
          ))}
        </div>
      )}


    </div>
  )
}

export default FilterBy