import img1 from '../assets/Images/about.jpg';
import img2 from '../assets/Images/chair.jpg';
import img3 from '../assets/Images/livingroom.jpg';
import img4 from '../assets/Images/outdoor.jpg';
import img5 from '../assets/Images/room.jpg';
import img6 from '../assets/Images/sofa.jpg';
import img7 from '../assets/Images/table.jpg';

import { NavLink } from 'react-router-dom';
const Aboutpage = () => {
  return (
    <div className="relative  flex flex-row md:flex-wrap mx-10 font-color py-10">
      <div>
        <div className="relative mx-10 items-center justify-between max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="mb-12 font text-4xl font-extralight tracking-tight sm:text-6xl font-ojuju  text-lavander-300">
              Urban Furniture Concept Store
            </h1>
            <p className="mt-4 text-xl ">
              Welcome to Urban Furniture Concept Store, we're passionate about bringing exceptional
              design into urban spaces. Our curated collection features a handpicked selection of
              artistic furniture pieces from some of the world's most renowned brands.
            </p>
            <p className="mt-4 text-xl ">
              We believe that every piece of furniture has the power to transform a space and
              enhance the way people live, work, and interact. Each item in our collection is
              carefully selected to reflect our commitment to quality, innovation, and creativity.
            </p>
            <p className="mt-4 text-xl">
              Whether you're furnishing a chic city apartment, a trendy loft, or a modern office
              space, Urban Furniture Concept Store is your destination for premium furniture
              solutions that make a statement. Browse our collection today and discover the perfect
              pieces to elevate your urban oasis.
            </p>
            <div className="mt-8">
              <NavLink to="products">
                <button
                  type="button"
                  className="btn items-center text-base p-2 rounded-md border border-transparent bg-lavander-200 py-3 px-8 text-center font-medium text-white hover:bg-lavander-100"
                >
                  Shop now
                </button>
              </NavLink>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <div className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={img1}
                          alt="img1"
                          className="h-full w-full object-cover object-center"
                        ></img>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img2}
                          alt="img2"
                          className="h-full w-full object-cover object-center"
                        ></img>
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img3}
                          alt="img3"
                          className="h-full w-full object-cover object-center"
                        ></img>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img4}
                          alt="img4"
                          className="h-full w-full object-cover object-center"
                        ></img>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img5}
                          alt="img5"
                          className="h-full w-full object-cover object-center"
                        ></img>
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img6}
                          alt="img6"
                          className="h-full w-full object-cover object-center"
                        ></img>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img7}
                          alt="img7"
                          className="h-full w-full object-cover object-center"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
