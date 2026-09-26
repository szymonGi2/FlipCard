import { useState } from "react";
import type { FlipCard } from "../card";

interface FlipCardProps {
  card: FlipCard;
}

const Card = ({ card }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsFlipped((previous) => !previous)}
      aria-label={`${isFlipped ? card.answer : card.question}. Kliknij, aby pokazać ${isFlipped ? "pytanie" : "odpowiedź"}`}
      className="h-64 w-80 cursor-pointer perspective-[1000px]"
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 motion-reduce:transition-none transform-3d ${
          isFlipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        <div
          aria-hidden={isFlipped}
          className="absolute inset-0 flex items-center justify-center rounded-xl bg-blue-500 p-6 text-xl text-white backface-hidden"
        >
          {card.question}
        </div>
        <div
          aria-hidden={!isFlipped}
          className="absolute inset-0 flex items-center justify-center rounded-xl bg-green-700 p-6 text-xl text-white backface-hidden transform-[rotateY(180deg)]"
        >
          {card.answer}
        </div>
      </div>
    </button>
  );
};

export default Card;
