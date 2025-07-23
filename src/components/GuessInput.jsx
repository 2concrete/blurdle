const GuessInput = ({ placeholder, item }) => {
  return (
    <form>
      <input
        key={item}
        className="border rounded-md p-2 outline-none"
        placeholder={`GUESS ${placeholder}`}
        type="text"
      />
    </form>
  );
};

export default GuessInput;
