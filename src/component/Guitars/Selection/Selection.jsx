import { useState, useEffect, useRef } from 'react';

import './Selection.scss';
import FilterBy from '../FilterBy/FilterBy';
import SearchBar from '../SearchBar/SearchBar';
import GuitarCard from '../GuitarCard/GuitarCard';

const Selection = () => {
  const allGuitars = Array.from({ length: 50 }, (_, i) => i + 1);

  const [visibleCount, setVisibleCount] = useState(6);
  const [infiniteScrollEnabled, setInfiniteScrollEnabled] = useState(false);
  const loaderRef = useRef(null);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, allGuitars.length));
  };

  useEffect(() => {
    if (!infiniteScrollEnabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [infiniteScrollEnabled]); 

  return (
    <div className="Selection">

      <p className="satoshi44">
        Check out the <span className="orangeFont">Selection</span>
      </p>

      <div className="Selection__filter__and__search">
  <FilterBy />
      <SearchBar />
      </div>


    

      <div className="GuitarsInfinit">
        {allGuitars.slice(0, visibleCount).map((id) => (
          <GuitarCard key={id} />
        ))}
      </div>

      {!infiniteScrollEnabled && visibleCount < allGuitars.length && (
        <button
          className="see-more-btn satoshi16"

          onClick={() => {
            loadMore();
            setInfiniteScrollEnabled(true);
          }}
        >
          See More
        </button>
      )}

      <div ref={loaderRef} style={{ height: '20px' }}></div>
    </div>
  );
};

export default Selection;
