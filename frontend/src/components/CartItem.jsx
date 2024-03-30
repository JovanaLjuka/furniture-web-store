import { removeItem, increase, decrease } from '../features/CartSlice';
import { useDispatch } from 'react-redux';
import { CiCircleRemove } from 'react-icons/ci';
import { HiOutlineMinusSm } from 'react-icons/hi';
import { HiOutlinePlusSm } from 'react-icons/hi';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeItem({ cartId }));
  };
  const increaseAmount = () => {
    dispatch(increase({ cartId }));
  };
  const decreaseAmount = () => {
    dispatch(decrease({ cartId }));
  };

  const { cartId, title, price, image, amount, company, productColor } = cartItem;

  return (
    <article key={cartId} className="max-w-[100%] max-h-[200px] flex justify-center flex-row mb-5 ">
      <div className="w-80 h-80 flex justify-center">
        <img src={image} alt={title} className="rounded-lg w-[70%] h-[60%] object-cover" />
      </div>

      <div className="mx-10 ">
        <h3 className="capitalize font-medium text">{title}</h3>

        <h4 className="mt-2 capitalize text-sm text-neutral-content">{company}</h4>

        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :<span className="badge badge-sm" style={{ backgroundColor: productColor }}></span>
        </p>
      </div>
      <div className="flex justify-center mx-10 md:mx-12">
        <div className="form-control max-w-xs">
          <div className="flex flex-col gap-1 items-start shadow-md hover:shadow-xl">
            <button
              className=" border-brown-800 btn btn-active btn-ghost border-2 text-sm font-md"
              onClick={increaseAmount}
            >
              <HiOutlinePlusSm />
            </button>
            <button
              className="btn btn-active btn-ghost border-2 border-brown-800  text-sm font-md"
              onClick={() => {
                if (amount === 1) {
                  removeFromCart();
                  return;
                }
                decreaseAmount();
              }}
            >
              <HiOutlineMinusSm />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-7 gap-5 ">
        <h4>Quantity</h4>
        <p className="w-5 text-xl">{amount}</p>
      </div>
      <div className="flex flex-col items-center mx-10 md:mx-12 gap-5">
        <h4>Price</h4>
        <p className="font-medium sm:ml-auto">${price}</p>
      </div>
      <div className="ml-10 md:ml-12">
        <button className=" btn btn-active btn-md btn-ghost" onClick={removeFromCart}>
          <CiCircleRemove className="w-7 h-7" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
