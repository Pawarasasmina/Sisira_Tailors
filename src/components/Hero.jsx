import { Link } from 'react-scroll';
import hero from '../assets/hero.png'; // Adjust the path to your logo image

const Hero = () => {
  return (
    <div name="home" className="w-full bg-gradient-to-b from-yellow-300 to-yellow-300 pt-20 md:pt-40 shadow-lg">
      {/* pt-20 adds padding-top for mobile, md:pt-40 adds extra padding for desktop */}
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        
        {/* Left Section - Text with More Space */}
        <div className="flex flex-col justify-center items-center md:items-start md:h-auto sm:h-[80vh] h-[60vh] text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-gray-800 mb-4">
            For Perfect Quality Fashions
          </h2>
          <p className="text-gray-600 py-4 max-w-md">
            With over 30 years of experience, we specialize in creating perfect fits for school uniforms, band costumes, choir attire, and all the casual and office wear. Quality craftsmanship and attention to detail is our promise.
          </p>

          <div className="flex justify-center sm:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gray-700 cursor-pointer mb-10"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center items-center md:w-2/5 mt-8 md:mt-0">
          <img
            src={hero}
            alt="Hero"
            className="w-3/4 sm:w-2/3 md:w-full lg:w-3/4 xl:w-2/3 -mt-12 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
