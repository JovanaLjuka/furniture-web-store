const SubmitBtn = ({ text }) => {
  return (
    <button type="submit" className="btn btn-block text-white hover:bg-stone-500">
      {text}
    </button>
  );
};

export default SubmitBtn;
