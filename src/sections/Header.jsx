import { Link, NavLink } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { ItemsContext } from '../contexts/items';
import { logo, CartIcon, Favorite, SearchIcon, CloseBtnIcon } from '../assets/icons';
import { Cart, Btn } from '../components';
import { motion } from 'framer-motion';

const Header = () => {
  const { searchValue } = useContext(ItemsContext);
  const { cartOpen } = useContext(ItemsContext);
  const { itemsAction } = useContext(ItemsContext);
  const { total } = useContext(ItemsContext);
  const { cartItems } = useContext(ItemsContext);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <header
      className={`z-50 inset-x-0 rounded-[20px] pb-2 bg-light container ${scroll ? 'sticky' : ''}`}>
      <nav className="flex flex-wrap justify-between items-center gap-2 sm:py-3 py-1 rounded-[40px] border-2 border-dark  md:max-w-[1200px] max-w-[515px] w-full mx-auto ">
        <div className="relative text-primary md:-order-1 order-1 hover:text-accent  ">
          <SearchIcon className="absolute top-2 left-2" />
          {searchValue && (
            <CloseBtnIcon
              onClick={itemsAction.onSearchClear}
              className="absolute top-2 right-2 cursor-pointer"
            />
          )}

          <input
            onChange={itemsAction.onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Search..."
            className="text-primary h-10 pl-9 pt-3 pb-2 xs:max-w-[250px] max-w-[150px] w-full rounded-[40px] border border-primary border-solid bg-light placeholder:text-grey placeholder:font-lucky placeholder:leading-[1] placeholder:tracking-wider focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          />
        </div>

        <Link
          to="/"
          className="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent rounded-lg">
          <motion.img
            className="mx-auto h-auto focus:outline focus:outline-2 focus:outline-offset-2 "
            src={logo}
            alt="logo ArtWalk Shoe Co."
            width={480}
            height={84}
            whileHover={{
              scale: 1.2,
              transition: { easy: 'easeInOut', duration: 0.4 },
            }}
          />
        </Link>

        <div className="flex justify-end gap-5 order-2">
          <motion.div
            whileHover={{
              scale: 1.2,
              color: '#BC0001',
              transition: { easy: 'easyInOut' },
            }}>
            <NavLink
              to="favorite"
              className="cursor-pointer shrink-0 flex justify-center items-center text-primary border-2 border-solid border-primary rounded-full w-10 h-10 bg-light hover:text-[#BC0001] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent">
              <Favorite />
            </NavLink>
          </motion.div>

          <motion.button
            onClick={itemsAction.onClickOpenCart}
            type="button"
            className={`relative cursor-pointer flex flex-1 flex-center items-center pt-3 pb-2 leading-[0.7] border-[2px] border-solid rounded-full border-primary text-primary h-10 w-auto px-3 pypx-2.5  ${
              cartItems.length > 0 ? 'bg-accent' : 'bg-light'
            } transition ease-in-out duration-300 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent`}
            whileHover={{
              scale: 1.2,
            }}>
            {cartItems.length > 0 ? (
              <div className="font-lucky text-dark text-xl ">
                <span>{total}</span>
                <span>$</span>
              </div>
            ) : (
              ''
            )}
            <CartIcon />
          </motion.button>
        </div>

        {cartOpen && <Cart />}
      </nav>
    </header>
  );
};

export default Header;
