import { motion } from 'framer-motion';
const Button = ({ label, onClick, isAdded }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      type="button"
      className={`cursor-pointer shrink-0 px-6 pt-3 pb-2 leading-[1] text-base font-lucky  rounded-[40px] border-2 border-primary border-solid ${
        isAdded ? 'bg-accent text-dark' : 'bg-light text-primary'
      } transition ease-in-out duration-300  focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-accent`}>
      {label}
    </motion.button>
  );
};

export default Button;
