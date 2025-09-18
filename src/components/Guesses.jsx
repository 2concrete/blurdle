import { useState } from "react";
import Guess from "./Guess";

const Guesses = ({ guesses, setGuesses }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuesses([...guesses, value]);
    setValue("");
  };

  return (
    <div className="flex flex-col gap-1 justify-center font-[Inter]">
      {guesses.map((guess, index) => (
        <Guess
          key={index}
          handleChange={index === guesses.length ? handleChange : undefined}
          value={index < guesses.length ? guess : value}
          disabled={index < guesses.length}
          handleSubmit={handleSubmit}
        />
      ))}
    </div>
  );
};

export default Guesses;
