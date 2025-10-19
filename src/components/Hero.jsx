import bagImage from "../assets/imgi_207_bags.png";
import SearchBar from "./SearchBar";
import SideBtn from "./SideBtn";


const Hero = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-[575px] w-[1350px] mb-7 bg-white"  style={{ backgroundImage: `url(${bagImage})` }}>
      <h1 className=" text-[46px] text-gray-800 text-center font-bold pt-40 ">
        Exclusive Branded bags
      </h1>

      <p className="text-gray-600 text-center text-xl mt-7">Get your exclusive & branded bags delivered to you in no time</p>
      <SearchBar />
      <SideBtn />
    </div>
  );
};

export default Hero;
