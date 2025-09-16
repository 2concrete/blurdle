import { useState } from "react";
import { createApi } from "unsplash-js";

const App = () => {
  const [image, setImage] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;

  const unsplash = createApi({ accessKey: apiKey });

  const fetchImage = () => {
    unsplash.photos.getRandom({ count: 1 }).then((result) => {
      if (result.errors) {
        console.error("Error fetching:", result.errors);
      } else {
        console.log("Photo data:", result.response);
      }
    });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <button onClick={fetchImage}>click</button>
    </div>
  );
};

export default App;
