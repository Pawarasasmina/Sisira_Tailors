import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo2.png'; 

const Footer = () => {
  return (
    <footer className="bg-yellow-300 text-white shadow-lg backdrop-blur-lg text-black py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-24" /> {/* Adjust the height as needed */}
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-black text-sm">
        <p>
            Design and Development by{' '}
            <a href="https://www.neurioxit.systems/" className="hover:text-black">
              neuriOx IT
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
