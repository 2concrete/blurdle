import { useEffect, useState } from "react";
import Image from "./components/Image";
import Guess from "./components/Guess";

const App = () => {
  const [randomImage, setRandomImage] = useState(null);
  const [guesses, setGuesses] = useState([]);

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
      <Image randomImage={randomImage} guesses={guesses} />
      <Guess randomImage={randomImage} guesses={guesses} />
    </div>
  );
};

export default App;
