import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Terms & Conditions</h1>
        <p className="mb-6 text-gray-700">
          Welcome to Parlourly. These terms and conditions outline the rules and regulations for the use of Parlourly's website and services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
        <p className="mb-4 text-gray-700">
          By accessing this website and using our services, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website or services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <p className="mb-4 text-gray-700">
          Parlourly provides on-demand home services, including beauty and wellness treatments. We strive to connect you with qualified professionals for high-quality services in the comfort of your home.
        </p>
        <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
        <p className="mb-4 text-gray-700">
          You agree to provide accurate information when booking services and to treat service providers with respect. Any misuse of our platform may result in suspension or termination of your account.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Payment and Refunds</h2>
        <p className="mb-4 text-gray-700">
          Payments are processed securely through our platform. Refunds may be issued in accordance with our refund policy, which is available upon request.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          Parlourly shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-4 text-gray-700">
          If you have any questions about these terms and conditions, please contact us at info@homesalon.in.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
