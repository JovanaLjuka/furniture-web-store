import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Loading, Footer } from '../components';

const Homepage = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <main>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-elements py-5 ">
          <Outlet />
        </section>
      )}
      <Footer />
    </main>
  );
};

export default Homepage;
