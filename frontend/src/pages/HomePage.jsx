import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { Navbar } from '../components';

const Homepage = () => {
  return (
    <main>
      <Header />
      <Navbar />
      <section className="align-elements py-5 ">
        <Outlet />
      </section>
    </main>
  );
};

export default Homepage;
