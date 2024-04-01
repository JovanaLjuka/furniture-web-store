import img1 from '../assets/Images/col1.jpg';
import img2 from '../assets/Images/col2.jpg';
import img3 from '../assets/Images/col3.jpg';
import img4 from '../assets/Images/col4.jpg';

const Collections = () => {
  return (
    <section className="w-[85%] align-elements mt-32 xl:mt-52 xl:max-w-7xl">
      <div className="relative flex flex-col gap-y-5 mt-7 xl:mx-auto xl:flex-row-reverse ">
        <div className="w-full h-64 xl:w-[70%] xl:h-[10%]">
          <img src={img1} alt="img1" className="h-full w-full object-fit" />
        </div>

        <div className="w-full bg-white-100 xl:max-w-2xl xl:shadow-lg xl:absolute xl:top-0  xl:w-[60%] xl:left-[-10%] xl:mt-20 xl:ml-10 ">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 xl:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4">
              Our mission is simple: to elevate urban living by offering unique and inspiring
              furniture designs that seamlessly blend style, functionality, and craftsmanship. We
              believe that every piece of furniture has the power to transform a space and enhance
              the way people live, work, and interact.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-y-5 mt-7 xl:mx-auto xl:flex-row-reverse ">
        <div className="w-full h-64 xl:w-[70%] lg:h-auto">
          <img src={img2} alt="img1" className="h-full w-full object-cover" />
        </div>

        <div className="w-full bg-white-100 xl:max-w-2xl xl:shadow-lg xl:absolute xl:top-0  xl:w-[60%] xl:left-[-10%] xl:mt-20 xl:ml-10 ">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 xl:text-4xl">
              Curated Selection
            </h2>
            <p className="mt-4">
              Each item in our collection is carefully selected to reflect our commitment to
              quality, innovation, and creativity. From statement-making sofas to sculptural
              lighting and everything in between, our range encompasses a diverse array of styles,
              materials, and finishes to suit every taste and lifestyle.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-y-5 mt-7 xl:mx-auto xl:flex-row-reverse ">
        <div className="w-full h-64 xl:w-[70%] lg:h-auto">
          <img src={img3} alt="img1" className="h-full w-full object-cover" />
        </div>

        <div className="w-full bg-white-100 xl:max-w-2xl xl:shadow-lg xl:absolute xl:top-0  xl:w-[60%] xl:left-[-10%] xl:mt-20 xl:ml-10 ">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 xl:text-4xl">
              Exceptional Brands
            </h2>
            <p className="mt-4">
              We take pride in partnering with some of the most esteemed furniture brands in the
              industry. Molteni&C, known for its timeless elegance and Italian craftsmanship, offers
              iconic pieces that exude sophistication and luxury. Kelly Wearstler, with her bold and
              eclectic designs, brings a sense of drama and personality to any interior.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-y-5 mt-7 xl:mx-auto xl:flex-row-reverse ">
        <div className="w-full h-64 xl:w-[70%] lg:h-auto">
          <img src={img4} alt="img1" className="h-full w-full object-cover" />
        </div>

        <div className="w-full bg-white-100 xl:max-w-2xl xl:shadow-lg xl:absolute xl:top-0  xl:w-[60%] xl:left-[-10%] xl:mt-20 xl:ml-10 ">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 xl:text-4xl">
              Experience the Difference
            </h2>
            <p className="mt-4">
              Whether you're furnishing a chic city apartment, a trendy loft, or a modern office
              space, <span className="font-bold"> Urban Furniture Concept Store </span>is your
              destination for premium furniture solutions that make a statement. Browse our
              collection today and discover the perfect pieces to elevate your urban oasis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
