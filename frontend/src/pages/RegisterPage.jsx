import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

const Registerpage = () => {
  return (
    <section className="h-screen grid place-items-center  text-brown-900  bg-stone-100 font-tenor">
      <Form
        method="POST"
        className="card gap-y-5 rounded-xl  border-brown-700 bg-stone-300 w-96 p-10  shadow-lg"
      >
        <h4 className="text-center text-2xl font-semibold capitalize">register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4 py-2">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 text-md link link-hover hover:text-xl link-brown-800 capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Registerpage;
