import { useContext } from 'react';
import { ItemsContext } from '../contexts/items';
import { categoryList } from '../constants';

const Category = () => {
  const { itemsAction, categoryID } = useContext(ItemsContext);
  return (
    <ul className="flex ss:gap-4  gap-2 sm:justify-center  justify-start  items-center md:mb-12 mb-5 w-full sm:pl-0 pl-2 sm:overflow-hidden overflow-scroll">
      {categoryList.map((item, idx) => (
        <li key={idx} className="py-2 flex-shrink-0">
          <button
            onClick={() => itemsAction.onCLickCategory(idx)}
            className={`py-2.5 px-[30px] rounded-[40px] border-light border border-solid cursor-pointer font-medium capitalize hover:bg-light hover:text-dark transition ease-in-out duration-300 focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-accent ${
              categoryID === idx ? 'bg-light text-dark' : 'text-light bg-dark'
            }`}>
            {item}{' '}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Category;
