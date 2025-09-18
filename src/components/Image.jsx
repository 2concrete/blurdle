const Image = ({ image, guesses, username }) => {
  return (
    <div className="relative">
      <img
        src={image ? image : null}
        className="max-w-200 max-h-150 rounded-lg shadow-xl object-cover"
      />
      <a href={`https://unsplash.com/@${username}`} className="font-[Inter]">
        {username}
      </a>
    </div>
  );
};

export default Image;
