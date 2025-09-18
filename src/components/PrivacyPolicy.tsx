import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Privacy Policy</h1>
        <p className="mb-6 text-gray-700">
          At Parlourly, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4 text-gray-700">
          We collect information that you provide directly to us when you use our services, such as your name, contact details, and payment information. We also collect information automatically through your use of our app, including device information and usage data.
        </p>
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4 text-gray-700">
          Your information is used to provide and improve our services, process transactions, communicate with you, and comply with legal obligations. We do not sell your personal information to third parties.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4 text-gray-700">
          We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4 text-gray-700">
          You have the right to access, correct, or delete your personal information. You can also opt out of receiving marketing communications from us.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4 text-gray-700">
          If you have any questions or concerns about our privacy practices, please contact us at info@homesalon.in.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
