import React, { useState } from "react";
import Card from "./Card";
import Popup from "./Popup";
import { cardsData } from "../Data/cardData";

function Main() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  return (
    <main>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      {selectedCard && (
        <Popup content={selectedCard.popupContent} onClose={handleClosePopup} />
      )}
    </main>
  );
}

export default Main;
