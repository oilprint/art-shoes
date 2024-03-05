const Btn = ({ Icon, onClick, isFavorite, className }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer shrink-0 flex justify-center items-center border-2 border-solid border-primary rounded-full w-10 h-10 hover:text-[#BC0001]  ${
        isFavorite ? 'text-primary bg-accent' : ' text-primary bg-light'
      } focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-accent ${className} `}>
      <img src={Icon} alt="" />
    </button>
  );
};

export default Btn;
