import Link from "next/link";
import Navbar from "../../components/Navbar";
import Header from "./component/Header";
import RestaurantNav from "./component/RestaurantNav";
import Title from "./component/Title";
import Rating from "./component/Rating";
import Description from "./component/Description";
import Images from "./component/Images";
import Reviews from "./component/Reviews";
import ReservationCard from "./component/ReservationCard";

const RestaurantDetails = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar/>
        <Header/>
     
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNav/>
            <Title/>
            <Rating/>
            <Description/>
            <Images/>
            <Reviews/>
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard/>
          </div>
        </div>
      </main>
    </main>
  );
};

export default RestaurantDetails;
