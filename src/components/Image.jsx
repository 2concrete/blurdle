const Image = ({ randomImage, blur }) => {
  return (
    <img className={`h-100 ${blur} rounded-md shadow-xl`} src={randomImage} />
  );
};

export default Image;
