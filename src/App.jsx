import { useState } from "react";
import { createApi } from "unsplash-js";
import Image from "./components/Image";
import Guesses from "./components/Guesses";

const App = () => {
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;

  const unsplash = createApi({ accessKey: apiKey });

  const fetchImage = () => {
    unsplash.photos.getRandom({ count: 1 }).then((result) => {
      if (result.errors) {
        console.error("Error fetching:", result.errors);
      } else {
        console.log("Photo data:", result.response);
        setImage(result.response[0].urls.full);
        setUsername(result.response[0].user.username);
      }
    });
  };

  const [guesses, setGuesses] = useState([""]);

  return (
    <div className="flex h-screen justify-center items-center">
      <button className="absolute top-0 left-0" onClick={fetchImage}>
        click
      </button>
      <div className="flex gap-5">
        <Image image={image} guesses={guesses} username={username} />
        <Guesses guesses={guesses} setGuesses={setGuesses} />
      </div>
    </div>
  );
};

export default App;
