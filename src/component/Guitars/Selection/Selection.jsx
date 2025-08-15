import { useState, useEffect, useRef } from "react";
import "./Selection.scss";
import FilterBy from "../FilterBy/FilterBy";
import SearchBar from "../SearchBar/SearchBar";
import GuitarCard from "../GuitarCard/GuitarCard";
import { useFindUniqueBrand } from "../../../hooks/useFindUniqueBrand";
import { useParams } from "react-router-dom";
import Loading from "../../shared/Loading/Loading";

const Selection = () => {
  const { id, name } = useParams();
  const { data, loading, error } = useFindUniqueBrand(id);

  const [visibleCount, setVisibleCount] = useState(6);
  const [infiniteScrollEnabled, setInfiniteScrollEnabled] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Type");
  const [query, setQuery] = useState("");
  const loaderRef = useRef(null);

  const loadMore = () => {
    if (!data) return;
    setVisibleCount((prev) =>
      Math.min(prev + 6, data.findUniqueBrand.models.length)
    );
  };

  useEffect(() => {
    if (!infiniteScrollEnabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [infiniteScrollEnabled, data]);

  if (error) return <div>Error... </div>;
  if (loading) return <div><Loading/></div>;
  if (!data || !data.findUniqueBrand?.models) return null;
  
  // Apply Search
  let filteredModels = data.findUniqueBrand.models.filter((model) =>
    model.name.toLowerCase().includes(query.toLowerCase())
  );

  if (selectedFilter === "Price") {
    filteredModels.sort((a, b) => a.price - b.price);
  } else if (selectedFilter === "Newest") {
    filteredModels.sort((a, b) => b.id - a.id);
  } else if (selectedFilter === "Oldest") {
    filteredModels.sort((a, b) => a.id - b.id);
  } else if (selectedFilter === "Type") {
    filteredModels.sort((a, b) => a.type.localeCompare(b.type));
  }

  const totalGuitars = filteredModels.length;

  return (
    <div className="Selection">
      <p className="satoshi44">
        Check out the <span className="orangeFont">Selection</span>
      </p>

      <div className="Selection__filter__and__search">
        <FilterBy
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
        <SearchBar
          query={query}
          onSearchChange={setQuery}
        />
      </div>

      <div className="GuitarsInfinit">
        {filteredModels
          .slice(0, visibleCount)
          .map((uniqueBrand) => (
            <GuitarCard
              key={uniqueBrand.id}
              brandName={name}
              brandId={id}
              guitraTo={uniqueBrand.id}
              bgImage={uniqueBrand.image}
              guitarName={uniqueBrand.name}
              guitarPrice={uniqueBrand.price}
            />
          ))}
      </div>

      {!infiniteScrollEnabled &&
        totalGuitars > 6 &&
        visibleCount < totalGuitars && (
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

      <div ref={loaderRef} style={{ height: "20px" }}></div>
    </div>
  );
};

export default Selection;