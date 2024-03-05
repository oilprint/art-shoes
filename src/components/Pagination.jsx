import ReactPaginate from 'react-paginate';
import { useContext } from 'react';
import { ItemsContext } from '../contexts/items';

const Pagination = ({ onChangePage }) => {
  const { allItems } = useContext(ItemsContext);
  const pages = Math.ceil(allItems.length / 8);
  return (
    <ReactPaginate
      className="mx-auto flex justify-center items-center gap-3"
      pageLinkClassName="cursor-pointer flex justify-center items-center w-10 h-10 rounded-full border-2 border-solid border-primary font-bold hover:bg-accent transition ease-in-out duration-300 focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-accent"
      activeClassName="bg-accent rounded-full text-2xl text-light"
      previousLinkClassName="cursor-pointer flex justify-center items-center w-10 h-10 rounded-full text-2xl text-bold hover:text-accent focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-accent"
      nextLinkClassName="cursor-pointer flex justify-center items-center w-10 h-10 rounded-full text-2xl text-bold hover:text-accent focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-accent"
      disabledLinkClassName="text-grey cursor-none hover:text-grey"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={pages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
