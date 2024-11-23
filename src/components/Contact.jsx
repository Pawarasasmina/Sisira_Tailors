import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        formData,
        'your_user_id' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormData({ name: '', email: '', message: '' });
          setStatus('Message sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp6944127.jpg')`,
      }}
    >
      <div className="bg-white bg-opacity-30 py-8 px-6 rounded-lg max-w-screen-xl mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-white">Contact Us</h2>
          <p className="text-white mt-2 text-xl">
            Reach out to us for your tailoring needs or any inquiries.
          </p>
        </div>

        {/* Contact Details and Form */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          {/* Contact Info Section */}
          <div className="space-y-10">
            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg">
              <div className="bg-yellow-500 text-white rounded-full p-3">
                <FaPhone className="text-2xl" />
              </div>
              <div className="ml-3">
                <h3 className="text-md font-semibold text-primary">Phone</h3>
                <p className="text-gray-600 text-sm">+94 70 104 7371</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg">
              <div className="bg-yellow-500 text-white rounded-full p-3">
                <FaEnvelope className="text-2xl" />
              </div>
              <div className="ml-3">
                <h3 className="text-md font-semibold text-primary">Email</h3>
                <p className="text-gray-600 text-sm">sisiratailorsmatara@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg">
              <div className="bg-yellow-500 text-white rounded-full p-3">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div className="ml-3">
                <h3 className="text-md font-semibold text-primary">Address</h3>
                <p className="text-gray-600 text-sm">
                 237/3,
                 Udyana Mawatha, 
                 Matara.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">
              Send Us a Message
            </h3>
            <div className="space-y-2">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent text-sm"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-300 text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-sm"
            >
              Send Message
            </button>
            {status && <p className="mt-2 text-center text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
