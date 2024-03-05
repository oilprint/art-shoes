import { useContext } from 'react';
import { ItemsContext } from '../contexts/items';
import { Card, Info } from '../components';
import { emptyList, Favorite } from '../assets/icons';

const FavoritePage = () => {
  const { favoritedItems } = useContext(ItemsContext);
  const { searchValue } = useContext(ItemsContext);
  const { itemsAction } = useContext(ItemsContext);

  console.log(favoritedItems);
  console.log(favoritedItems.length);

  return (
    <section className="py-10">
      <div className="container">
        <h1 className="font-lucky ss:text-[70px] lg:text-[100px] xs:text-[50px] text-[40px] text-primary text-center mb-5">
          <span className="ss:text-[100px] lg:text-[150px] xs:text-[70px] text-[40px] uppercase text-stroke text-light mr-2">
            My
          </span>
          favorite
        </h1>

        <div className="cursor-pointer shrink-0 flex justify-center items-center text-primary border-2 border-solid border-primary rounded-full w-10 h-10 bg-light hover:text-[#BC0001] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent">
          <Favorite />
        </div>

        {favoritedItems.length > 0 ? (
          <ul className="grid md:grid-cols-4 ss:grid-cols-3 grid-cols-2 gap-4 gap-y-8 w-full">
            {favoritedItems
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item) => (
                <li key={item.id}>
                  <Card
                    title={item.title}
                    id={item.id}
                    imgUrl={item.imgUrl}
                    price={item.price}
                    onBuy={(item) => itemsAction.addItemsToCart(item)}
                    onFavorite={(obj) => itemsAction.onAddToFavorite(obj)}
                    favorited={true}
                  />
                </li>
              ))}
          </ul>
        ) : (
          <Info
            href="/"
            imageUrl={emptyList}
            title="Your favorites list is empty"
            description="No items have been added to favorites"
            onClick={() => itemsAction.onClickCloseCart()}
          />
        )}
      </div>
    </section>
  );
};

export default FavoritePage;
