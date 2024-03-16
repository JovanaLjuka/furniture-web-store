import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <section className="h-screen grid place-items-center text-brown-900 bg-stone-100 font-tenor">
      <Form
        method="POST"
        className="card gap-y-5 rounded-xl border-brown-700 bg-stone-300 w-96 p-10  shadow-lg"
      >
        <h4 className="text-center text-2xl font-semibold">Login</h4>
        <FormInput type="email" label="email" name="identifier" defaultValue="test@test.com" />

        <FormInput type="password" label="password" name="password" defaultValue="secret" />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-block bg-rose-300 bg-opacity-80 hover:bg-rose-400 hover:bg-opacity-80 uppercase"
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
