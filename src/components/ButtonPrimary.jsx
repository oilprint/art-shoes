import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ButtonPrimary = ({ onClick, href, label }) => {
  return (
    <>
      {href ? (
        <Link
          to={href}
          className="cursor-pointer shrink-0 px-10 py-2 text-base font-lucky rounded-[40px] border-2  bg-accent text-primary border-primary border-solid hover:bg-light hover:scale-[1.2] transition ease-in-out duration-300 focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-accent ">
          {label}
        </Link>
      ) : (
        <motion.button
          onClick={onClick}
          className="cursor-pointer shrink-0 px-10 py-2 text-base font-lucky rounded-[40px] border-2  bg-accent text-primary border-primary border-solid hover:bg-light transition ease-in-out duration-300 focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-accent"
          whileHover={{ scale: 1.2 }}>
          {label}
        </motion.button>
      )}
    </>
  );
};

export default ButtonPrimary;
