import { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';

import { Button, Btn } from './index';
import { Favorite } from '../assets/icons';
import { ItemsContext } from '../contexts/items';

const Card = ({ title, imgUrl, price, onBuy, id, favorited, added, isLoading, onFavorite }) => {
  const { isItemAdded } = useContext(ItemsContext);
  const { isFavorited } = useContext(ItemsContext);

  const onClickBuyNow = () => {
    onBuy({ title, imgUrl, price, id });
  };

  const onClickFavorite = () => {
    onFavorite({ title, imgUrl, price, id });
    // setIsFavorite(!isFavorite);
  };

  return (
    <article className="flex flex-col max-w-[280px] w-full h-full" id={id}>
      {isLoading ? (
        <ContentLoader
          className="w-auto h-auto"
          speed={2}
          width={280}
          height={455}
          viewBox="0 0 280 455"
          backgroundColor="#eaeff1"
          foregroundColor="#ecebeb">
          <rect x="0" y="334" rx="10" ry="10" width="280" height="40" />
          <rect x="0" y="0" rx="40" ry="40" width="280" height="320" />
          <rect x="1" y="390" rx="10" ry="10" width="90" height="30" />
          <rect x="165" y="390" rx="20" ry="20" width="116" height="30" />
        </ContentLoader>
      ) : (
        <>
          <div className="relative">
            <div className="overflow-hidden rounded-[20px] border  border-primary border-solid w-full mb-2 aspect-[3/4]">
              <img
                className="object-cover h-full"
                src={imgUrl}
                alt={title}
                width="280"
                height="320"
              />
            </div>
            <div className="cursor-pointer shrink-0 flex justify-center items-center text-primary border-2 border-solid border-primary rounded-full w-10 h-10 bg-light hover:text-[#BC0001] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent">
              <Favorite />
            </div>

            <motion.div
              onClick={onClickFavorite}
              className="absolute top-3 right-3"
              whileHover={{
                scale: 1.2,
                transition: { easy: 'cubic-bezier(.11,-0.51,.71,.42)' },
              }}>
              {isFavorited(id) ? (
                <Btn Icon={Favorite} isFavorite={isFavorited(id)} />
              ) : (
                <Btn Icon={Favorite} />
              )}
            </motion.div>
          </div>

          <div className="flex flex-col justify-between grow px-2">
            <h3 className="xs:text-lg text-base font-[700] leading-[1] text-primary mb-2 ">
              {title}
            </h3>
            <div className="flex justify-between flex-wrap items-center gap-1">
              <div className=" xs:mr-2 mr-6 mb-1 font-lucky leading-[0.7]  text-accent text-[32px] ">
                <span>$</span>
                <span>{price}</span>
              </div>

              {isItemAdded(id) ? (
                <Button label="Remove" onClick={onClickBuyNow} isAdded={isItemAdded(id)} />
              ) : (
                <Button label="Buy now" onClick={onClickBuyNow} />
              )}

              {/* // <Button label="Buy now" onClick={onClickBuyNow} isAdded={isAdded} /> */}
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default Card;
