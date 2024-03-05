import { useContext, useState } from 'react';
import { ItemsContext } from '../contexts/items';
import { Remove, emptyBox, completed } from '../assets/icons';
import { Btn, ButtonPrimary, CloseBtn } from './index';
import Info from './Info';

const Cart = () => {
  const [isOrderCompete, setIsOrderCompete] = useState(false);

  const { cartItems, setCartItems, total, itemsAction } = useContext(ItemsContext);

  const onClickOrder = () => {
    setIsOrderCompete(true);
    setCartItems([]);
  };

  return (
    <div className="backdrop fixed left-0 top-0 z-[999] w-screen h-screen backdrop-blur-xl bg-dark/70 ">
      <div className="relative py-8 px-6 bg-light max-w-[400px] w-full rounded-[20px] ml-auto h-full flex flex-col justify-between font-lucky">
        <div className="w-full flex-1 flex flex-col justify-between">
          <h2 className=" text-[32px] mb-3">Your cart</h2>
          {cartItems.length > 0 ? (
            <div className="flex flex-col h-full justify-between">
              <ul className="overflow-auto max-h-[70vh] ">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between gap-3 items-stretch py-5">
                    <div className="shrink-0 overflow-hidden rounded-xl border border-primary border-solid ">
                      <img
                        className="h-full object-cover"
                        src={item.imgUrl}
                        alt={item.title}
                        width={80}
                        height={106}
                      />
                    </div>
                    <div className="flex flex-col justify-between py-2 w-full">
                      <div className="flex gap-5 justify-between ">
                        <p>{item.title}</p>
                        <button
                          onClick={() => itemsAction.onRemoveItem(item.id)}
                          className="cursor-pointer shrink-0 flex justify-center items-center text-primary border-2 border-solid border-primary rounded-full w-10 h-10 bg-light hover:text-[#BC0001] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent">
                          <Remove />
                        </button>
                      </div>
                      <div className="text-accent text-3xl">
                        <span>$</span>
                        <span>{item.price}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center ">
                <div className="flex justify-between text-2xl w-full mb-2">
                  <p>Subtotal: </p>
                  <div>
                    <span>$</span>
                    <span>{total}</span>
                  </div>
                </div>
                <ButtonPrimary onClick={onClickOrder} label="Checkout" />
              </div>
            </div>
          ) : (
            <Info
              imageUrl={isOrderCompete ? `${completed}` : `${emptyBox}`}
              title={isOrderCompete ? 'Thank you for your order!' : 'Your cart is empty'}
              description={
                isOrderCompete
                  ? 'We have received your order and have already begun processing it.'
                  : 'No items have been added to cart'
              }
              onClick={() => itemsAction.onClickCloseCart()}
              label="Go back"
            />
          )}
        </div>

        <button
          onClick={itemsAction.onClickCloseCart}
          className="absolute top-4 right-4 cursor-pointer shrink-0 flex justify-center items-center text-primary border-2 border-solid border-primary rounded-full w-10 h-10 bg-light hover:text-[#BC0001] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent">
          <Remove />
        </button>
      </div>
    </div>
  );
};

export default Cart;
