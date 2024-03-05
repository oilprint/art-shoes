import { Favorite } from '../assets/icons';

const Btn = ({ Icon, onClick, isFavorite }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer shrink-0 flex justify-center items-center border-2 border-solid border-primary rounded-full w-10 h-10 hover:text-[#BC0001]  ${
        isFavorite ? 'text-primary bg-accent' : ' text-primary bg-light  '
      } focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-accent `}>
      <Favorite />
    </button>
  );
};

export default Btn;
