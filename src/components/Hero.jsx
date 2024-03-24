import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero -mt-40">
        <div className="hero-content text-center">
            <div className="max-w-full">
            <h1 className="text-5xl font-bold ">Wellcome to <span className="bg-gradient-to-r from-secondary via-blue-500 to-primary bg-300% text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
             <p className="py-6">ByteBlaze Solutions is an innovative company that assists startups and serial entrepreneurs <br /> in bringing their creative ideas to life.</p>
            <div className="flex justify-center gap-3 ">

            <Link to = "/blogs" className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
            <span className="relative text-black group-hover:text-white">Read Blogs</span>
            </Link>

            <Link to = "/bookmarks" className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
            <span className="relative text-black group-hover:text-white">Book Marks</span>
            </Link>
            
            </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;