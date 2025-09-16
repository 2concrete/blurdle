const Image = ({ image }) => {
  return (
    <img
      src={image}
      className="max-w-200 max-h-150 rounded-lg shadow-xl object-cover"
    />
  );
};

export default Image;
