import { CloseBtnIcon } from '../assets/icons';

const CloseBtn = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer flex justify-center items-center rounded-full border-primary border bg-light  text-primary hover:text-accent hover:border-accent focus:text-accent  active:bg-gray-700 w-11 h-11 transition duration-300 easy-in-out focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-accent ${className}`}
      type="button">
      <CloseBtnIcon />
    </button>
  );
};

export default CloseBtn;
