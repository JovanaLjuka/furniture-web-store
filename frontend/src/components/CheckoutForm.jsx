import { Form, useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import { clearCart } from '../features/CartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    dispatch(clearCart());
    navigate('/');
    toast.success('Order placed');
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-900 align-elements max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mx-10">Checkout</h1>
      <Form className="w-full mx-auto p-8">
        <div className="grid grid-cols-2 gap-10 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
          <div className="mb-6 mr-7">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-7">
              Shipping Address
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block text-gray-700 dark:text-white mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  required
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-gray-700 dark:text-white mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  required
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="address" className="block text-gray-700 dark:text-white mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                required
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="city" className="block text-gray-700 dark:text-white mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                required
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="state" className="block text-gray-700 dark:text-white mb-1">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  required
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-gray-700 dark:text-white mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  required
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
            </div>
          </div>

          <div className="ml-7">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-7 w-[40%]">
              Payment Information
            </h2>
            <div className="mt-4">
              <label htmlFor="card_number" className="block text-gray-700 dark:text-white mb-1">
                Card Number
              </label>
              <input
                type="text"
                id="card_number"
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="exp_date" className="block text-gray-700 dark:text-white mb-1">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="exp_date"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700 dark:text-white mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div className="mt-8 flex col-span-2 items-center justify-center">
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                  className="btn btn-primary w-[40%] bg-lavander-200  px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;

{
  /* <Form method="POST" className="flex flex-col gap-y-3 w-full">
      <h4 className="font-semibold text-xl">Shipping information</h4>
      <div className="flex gap-5 w-full">
        <FormInput label="first name" name="firstname" type="text" />
        <FormInput label="last name" name="lastname" type="text" />
      </div>

      <FormInput label="address" name="address" type="text" />
      <select className="select select-bordered w-full max-w-xs mt-4">
        <option disabled selected>
          City
        </option>
        <option>Belgrade</option>
        <option>Novi Sad</option>
        <option>Cacak</option>
      </select>

      <button
        type="submit"
        className="btn btn-primary w-[30%] mt-8 bg-lavander-200"
        onClick={() => {
          handleSubmit();
        }}
      >
        Buy now
      </button>
    </Form> */
}
