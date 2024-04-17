import { Carousel } from "@material-tailwind/react";

const Corusel = () => {
    return (
        <div className="mt-5">
            <Carousel transition={{ duration: 2 }} className="rounded-xl max-w-7xl m-auto">
      <img
        src="https://i.ibb.co/WfMWKtQ/Luxury-Penthouse.jpg"
        alt="image 1"
        className="h-96 w-full object-cover"
      />
      <img
        src="https://i.ibb.co/YZ31vts/Rustic-Farmhouse.jpg"
        alt="image 2"
        className="h-96 w-full object-cover"
      />
      <img
        src="https://i.ibb.co/nshrRX2/Mountain-Retreat.jpg"
        alt="image 3"
        className="h-96 w-full object-cover"
      />
    </Carousel>
        </div>
    );
};

export default Corusel;