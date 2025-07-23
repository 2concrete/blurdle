import GuessInput from "./GuessInput";

const Guess = ({ randomImage, guesses }) => {
  const guessesLength = guesses.length;
  return (
    <div className="flex flex-col gap-2">
      {guessesLength === 0 &&
        [1].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
      {guessesLength === 1 &&
        [1, 2].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
      {guessesLength === 2 &&
        [1, 2, 3].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
      {guessesLength === 3 &&
        [1, 2, 3, 4].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
      {guessesLength === 4 &&
        [1, 2, 3, 4, 5].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
      {guessesLength === 5 &&
        [1, 2, 3, 4, 5, 6].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
      {guessesLength === 6 &&
        [1, 2, 3, 4, 5, 6].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
    </div>
  );
};

export default Guess;
