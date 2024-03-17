import img1 from '../assets/Images/col1.jpg';
import img2 from '../assets/Images/col2.jpg';
import img3 from '../assets/Images/col3.jpg';
import img4 from '../assets/Images/col4.jpg';

const Collections = () => {
  const images = [img1, img2, img3, img4];
  return (
    <div className="grid grid-flow-col grid-cols-3 md:grid-flow-row gap-4 mt-20">
      <div className="col-span-2 w-[800px] h-[600px] place-items-center ml-20">
        <img src={img1} alt="img1" className="w-full h-full" />
      </div>
      <div className="my-20 place-items-center m-auto">
        <h2 className="m-4">Our Mission</h2>
        <p className="prose mt-10">
          Our mission is simple: to elevate urban living by offering unique and inspiring furniture
          designs that seamlessly blend style, functionality, and craftsmanship. We believe that
          every piece of furniture has the power to transform a space and enhance the way people
          live, work, and interact.
        </p>
      </div>
      <div className="col-span-2 w-[800px] h-[600px] place-items-center ml-20">
        <img src={img2} alt="img2" className="w-full h-full" />
      </div>
      <div className="my-20 place-items-center m-auto">
        <h2 className="m-4">Curated Selection</h2>
        <p className="prose mt-10">
          Each item in our collection is carefully selected to reflect our commitment to quality,
          innovation, and creativity. From statement-making sofas to sculptural lighting and
          everything in between, our range encompasses a diverse array of styles, materials, and
          finishes to suit every taste and lifestyle.
        </p>
      </div>
      <div className="col-span-2 w-[800px] h-[600px] place-items-center ml-20">
        <img src={img3} alt="img3" className="w-full h-full" />
      </div>
      <div className="my-20 place-items-center m-auto">
        <h2 className="m-4">Exceptional Brands</h2>
        <p className="prose mt-10">
          We take pride in partnering with some of the most esteemed furniture brands in the
          industry. Molteni&C, known for its timeless elegance and Italian craftsmanship, offers
          iconic pieces that exude sophistication and luxury. Kelly Wearstler, with her bold and
          eclectic designs, brings a sense of drama and personality to any interior.
        </p>
      </div>
      <div className="col-span-2 w-[800px] h-[600px] place-items-center ml-20">
        <img src={img4} alt="img4" className="w-full h-full" />
      </div>
      <div className="my-20 place-items-center m-auto">
        <h2 className="m-4">Experience the Difference</h2>
        <p className="prose mt-10">
          Whether you're furnishing a chic city apartment, a trendy loft, or a modern office space,
          <span className="font-bold"> Urban Furniture Concept Store </span>is your destination for
          premium furniture solutions that make a statement. Browse our collection today and
          discover the perfect pieces to elevate your urban oasis.
        </p>
      </div>
    </div>
  );
};

export default Collections;
