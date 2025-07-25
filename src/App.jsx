import { useEffect, useState } from "react";
import Image from "./components/Image";
import Guess from "./components/Guess";

const App = () => {
  const [randomImage, setRandomImage] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [blur, setBlur] = useState("");

  useEffect(() => {
    if (guesses.length == 0) setBlur("blur-3xl");
    else if (guesses.length == 1) setBlur("blur-2xl");
    else if (guesses.length == 2) setBlur("blur-xl");
    else if (guesses.length == 3) setBlur("blur-lg");
    else if (guesses.length == 4) setBlur("blur-md");
    else if (guesses.length == 5) setBlur("blur-sm");
    else setBlur(0);
  }, [guesses.length]);

  useEffect(() => {
    const getRandomImage = async () => {
      const response = await fetch("/api/random-image");
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setRandomImage(imageUrl);
    };

    getRandomImage();
  }, []);

  return (
    <div className="flex justify-center gap-10 items-center h-screen">
      <Image randomImage={randomImage} blur={blur} guesses={guesses} />
      <Guess
        setGuesses={setGuesses}
        randomImage={randomImage}
        guesses={guesses}
      />
    </div>
  );
};

export default App;
