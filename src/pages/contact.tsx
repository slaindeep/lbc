import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Clear form and navigate to success page
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      navigate('/success');
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending message:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-[#5D4A82] mb-8">
            SEND A MESSAGE
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#856BAE] focus:ring-2 focus:ring-[#856BAE] focus:ring-opacity-30 transition-colors duration-300"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#856BAE] focus:ring-2 focus:ring-[#856BAE] focus:ring-opacity-30 transition-colors duration-300"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <img 
                  src="https://flagcdn.com/w20/ae.png" 
                  alt="UAE flag" 
                  className="w-5"
                />
                <span className="ml-2 text-gray-500">+971</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="50 123 4567"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-24 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#856BAE] focus:ring-2 focus:ring-[#856BAE] focus:ring-opacity-30 transition-colors duration-300"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#856BAE] focus:ring-2 focus:ring-[#856BAE] focus:ring-opacity-30 transition-colors duration-300"
                required
              ></textarea>
            </div>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#5D4A82] hover:bg-[#856BAE] text-white px-8 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors duration-300"
              >
                <FaWhatsapp className="text-3xl" />
              </a>
            </div>

            {error && (
              <p className="text-red-500 text-center mt-4">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;