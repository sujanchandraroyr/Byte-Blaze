import Hero from "../components/Hero";
import wave from "../assets/wave.svg"
const Home = () => {
    return (
        <div className=" relative">
          <div className=" flex min-h-[calc(100vh-116px)]">
          <Hero></Hero>
          </div>
            <img className="w-full absolute bottom-0" src={wave} alt="" />
        </div>
    );
};

export default Home;