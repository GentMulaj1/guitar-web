import React, { useState, useEffect } from "react";
import "./WhoPlaysIt.scss";

const WhoPlaysIt = () => {
  const players = [
    { name: "Jimi Hendrix" },
    { name: "Eric Clapton" },
    { name: "Jimmy Page" },
    { name: "Slash" },
    { name: "David Gilmour" },
    { name: "Santana" },
  ];

  const cardsPerPage = 2;
  const totalPages = Math.ceil(players.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 15000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const startIndex = currentPage * cardsPerPage;
  const visibleCards = players.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="WhoPlaysIt">
      <div className="WhoPlaysIt__cards">
        {visibleCards.map((player, index) => (
          <div className="WhoPlaysIt__card" key={index}>
            <div className="WhoPlaysIt__card__image"></div>
            <p className="WhoPlaysIt__card__name satoshi24medium">
              {player.name}
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
