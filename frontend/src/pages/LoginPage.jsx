import { useForm } from 'react-hook-form';
import { SubmitBtn } from '../components';
import { Form, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loginUser } from '../features/UserSlice';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

axios.defaults.withCredentials = true;

const url = 'https://furniture-web-store.onrender.com/auth/login';

export const action =
  store =>
  async ({ request }) => {
    // console.log(store);
    // console.log(request);

    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    // console.log(data);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(`${url}`, data, config);
      store.dispatch(loginUser(response.data.user));

      // const LinUser = useSelector(state => state.user.user);
      // console.log(LinUser);

      console.log(response);
      toast.success('Login successful');
      if (response.data.user.role === 'admin') {
        return redirect('/admin');
      } else {
        return redirect('/');
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || 'please double check your credentials';
      toast.error(errorMessage);
      return null;
    }
  };

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const guestUser = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        `${url}`,
        { email: 'guest@gmail.com', password: 'secret' },
        config,
      );
      dispatch(loginUser(response.data.user));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error. please try again');
    }
  };

  return (
    <section className="h-screen grid place-items-center text-brown-900 bg-stone-100 font-tenor">
      <Form
        method="POST"
        className="card gap-y-5 rounded-xl border-brown-700 bg-stone-300 w-96 p-10  shadow-lg"
      >
        <h4 className="text-center text-2xl font-semibold">Login</h4>
        <label htmlFor="email" className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            id="email"
            name="email"
            className="grow"
            placeholder="Email"
            {...register('email', { required: true })}
            value={formData.email}
            autoComplete="email"
            onChange={handleChange}
            error={errors.email?.message}
          />
        </label>
        <label htmlFor="password" className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            name="password"
            id="password"
            className="grow"
            {...register('password', { required: true })}
            value={formData.password}
            autoComplete="password"
            onChange={handleChange}
            error={errors.password?.message}
          />
        </label>
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-block bg-rose-300 bg-opacity-80 hover:bg-rose-400 hover:bg-opacity-80 uppercase"
          onClick={guestUser}
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 text-md link link-hover hover:text-xl link-brown-800 capitalize "
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default LoginPage;
