import { FaTshirt, FaUsers, FaRulerCombined, FaCogs, FaHouseDamage, FaSuitcase } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaTshirt size={50} />,
      title: "School Uniforms",
      description: "Custom-made school uniforms with perfect fitting and high-quality materials."
    },
    {
      id: 2,
      icon: <FaUsers size={50} />,
      title: "Band Costumes",
      description: "Specialized band uniforms and costumes for all types of performances."
    },
    {
      id: 3,
      icon: <FaRulerCombined size={50} />,
      title: "Choir Robes",
      description: "Elegant and comfortable choir robes with custom measurements."
    },
    {
      id: 4,
      icon: <FaCogs size={50} />,
      title: "Custom Tailoring",
      description: "Perfect fitting custom-made clothing for all occasions."
    },
    {
      id: 5,
      icon: <FaHouseDamage size={50} />,
      title: "Household Clothes",
      description: "Tailored household items like curtains and bed linens with precision."
    },
    {
      id: 6,
      icon: <FaSuitcase size={50} />,
      title: "Formal & Casual Wear",
      description: "Tailored formal and casual wear for all types of events."
    }
  ];

  return (
    <div name="services" className="w-full min-h-screen bg-yellow-200 py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-gray-600 text-xl">We specialize in a wide range of professional tailoring services for all your needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map(({ id, icon, title, description }) => (
            <div key={id} className="group relative p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="text-yellow-200">{icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-yellow-200 mb-2">{title}</h3>
              <p className="text-yellow-200">{description}</p>

              {/* Hover Effect: Icon */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold text-lg">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
