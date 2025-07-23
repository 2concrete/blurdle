import { useEffect, useState } from "react";
import Image from "./components/Image";
import Guess from "./components/Guess";

const App = () => {
  const [randomImage, setRandomImage] = useState(null);
  const [guesses, setGuesses] = useState(0);

  useEffect(() => {
    setRandomImage("https://picsum.photos/500.jpg");
  }, []);

  return (
    <div className="flex justify-center gap-10 items-center h-screen">
      <Image randomImage={randomImage} guesses={guesses} />
      <Guess randomImage={randomImage} guesses={guesses} />
    </div>
  );
};

export default App;
