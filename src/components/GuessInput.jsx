import { useState } from "react";

const GuessInput = ({ placeholder, item, setGuesses, guesses }) => {
  const [guess, setGuess] = useState("");

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuesses([...guesses, guess]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        key={item}
        value={guess}
        className="border rounded-md p-2 outline-none"
        placeholder={`GUESS ${placeholder}`}
        type="text"
      />
    </form>
  );
};

export default GuessInput;
