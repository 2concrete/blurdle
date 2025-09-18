const Guess = ({ value, disabled, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input className="border-b-1 border-neutral-700 p-1 text-neutral-800 outline-0" />
    </form>
  );
};

export default Guess;
