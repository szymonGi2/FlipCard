import { useState } from "react";
import type { FlipCard } from "./card.ts";
import Card from "./components/Card.tsx";


const App = () => {

  const [flipCards] = useState<FlipCard[]>([
    {
      id: "id-1", question: "What HTML stands for?", answer: "Hyper Text Mark Up Language"
    },
    {
      id: "id-2", question: "What is a variable in programming?", answer: "A named container used to store data values in memory"
    },
    {
      id: "id-3", question: "Which data type is used to strore logical values that can be either true or false?", answer: "Boolean"
    },
    {
      id: "id-4", question: "What does CSS stand for?", answer: "Cascading Style Sheets"
    },
    {
      id: "id-5", question: "What is a function in programming?", answer: "A reusable block of code that performs a specific task"
    },
    {
      id: "id-6", question: "What is an array?", answer: "An ordered collection of values accessed by their index"
    },
    {
      id: "id-7", question: "What is a loop used for?", answer: "Repeating a block of code multiple times"
    },
    {
      id: "id-8", question: "What are props in React?", answer: "Values passed from a parent component to a child component"
    },
  ]);


  return (
    <div className="flex flex-col justify-center items-center gap-8 p-8">
      <h1 className="text-5xl">Programming Flip Cards</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {flipCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
