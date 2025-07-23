import GuessInput from "./GuessInput";

const Guess = ({ randomImage, guesses }) => {
  return (
    <div className="flex flex-col gap-2">
      {guesses === 1 &&
        [1, 2].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
      {guesses === 2 &&
        [1, 2, 3].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
      {guesses === 3 &&
        [1, 2, 3, 4].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
      {guesses === 4 &&
        [1, 2, 3, 4, 5].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
      {guesses === 5 &&
        [1, 2, 3, 4, 5, 6].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
      {guesses === 6 &&
        [1, 2, 3, 4, 5, 6].map((item) => (
          <GuessInput key={item} placeholder={item.toString()} />
        ))}
    </div>
  );
};

export default Guess;
