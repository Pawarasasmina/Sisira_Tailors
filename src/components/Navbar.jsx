import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo2.png'; // Make sure the logo path is correct

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'Services' },
    { id: 3, link: 'Products' },
    { id: 4, link: 'Contact' },
  ];

  return (
    <nav className="fixed w-full h-20 bg-transparent text-white z-50 shadow-lg backdrop-blur-lg">
      <div className="flex justify-center items-center max-w-screen-xl mx-auto h-full px-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-16" /> {/* Adjust the height as needed */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              className="px-4 py-2 rounded-lg text-black font-medium hover:bg-yellow-400 hover:text-gray-800 transition duration-300"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden text-3xl text-black absolute right-4">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu with Transparency and Blur */}
      {nav && (
        <div className="flex flex-col items-center absolute top-20 left-0 w-full bg-black bg-opacity-50 backdrop-blur-xl text-white py-6 z-40">
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              onClick={() => setNav(false)}
              className="px-6 py-4 text-2xl font-medium capitalize text-black hover:bg-yellow-400 hover:text-gray-800 transition duration-300"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
