import React, { useState, useEffect } from "react";
import "./WhoPlaysIt.scss";

const WhoPlaysIt = ({ musicians }) => {
  const cardsPerPage = 2;
  const totalPages = Math.ceil(musicians.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 15000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const startIndex = currentPage * cardsPerPage;
  const visibleCards = musicians.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="WhoPlaysIt">
      <div className="WhoPlaysIt__cards">
        {visibleCards.map((musician, index) => (
          <div className="WhoPlaysIt__card" key={index}>
            <div
              className="WhoPlaysIt__card__image"
              style={{
                content: `url(${musician.musicianImage})`
              }}
            />
            <p className="WhoPlaysIt__card__name satoshi24medium">
              {musician.name}
            </p>
          </div>
        ))}
      </div>

      <div className="WhoPlaysIt__dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default WhoPlaysIt;
