// src/pages/AboutUs.tsx

import React from 'react';
import { FaSpa, FaPaintBrush, FaHeart, FaUsers } from 'react-icons/fa';
// import  Slider  from '../components/Slider';
// testing the comment with git push

const AboutUs: React.FC = () => {
  return (
    <div className="bg-pink-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-700 mb-8">About GlamourHub</h1>

        {/* Intro */}
        <p className="text-gray-700 text-center mb-6 text-lg md:text-xl max-w-3xl mx-auto">
          GlamourHub is your premier destination for beauty and wellness. From luxurious hair and skincare treatments to professional makeup and relaxing spa therapies, we help you look and feel your absolute best.
        </p>

        <p className="text-gray-700 text-center mb-12 text-lg md:text-xl max-w-3xl mx-auto">
          Founded in 2022, our mission has been simple: to provide high-quality, personalized beauty services for women in Garhwa and beyond. Today, we serve hundreds of happy clients with exceptional care, skill, and dedication.
        </p>

        {/* Mission */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            To empower women to feel confident, radiant, and beautiful by delivering exceptional beauty and wellness services with a personal touch.
          </p>
        </div>

        {/* Why Choose Us / Services */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-pink-600 text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
              <FaSpa className="text-pink-500 text-4xl mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Relaxing Spa</h3>
              <p className="text-gray-600 text-sm">Pamper yourself with soothing therapies for body and mind.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
              <FaPaintBrush className="text-pink-500 text-4xl mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Hair & Makeup</h3>
              <p className="text-gray-600 text-sm">Professional services for all occasions to enhance your beauty.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
              <FaHeart className="text-pink-500 text-4xl mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Personalized Care</h3>
              <p className="text-gray-600 text-sm">Tailored treatments designed to suit your unique style and needs.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
              <FaUsers className="text-pink-500 text-4xl mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Friendly and skilled professionals committed to making you shine.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-6">Meet Our Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Our dedicated team of beauty experts ensures every client receives personalized care and exceptional results. From hair stylists to spa therapists, we are here to make you shine.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow p-4">
              <img src="/team1.jpg" alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-center">Sara</h3>
              <p className="text-gray-600 text-sm text-center">Senior Stylist</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-4">
              <img src="/team2.jpg" alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-center">Neha</h3>
              <p className="text-gray-600 text-sm text-center">Makeup Artist</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-4">
              <img src="/team3.jpg" alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-center">Priya</h3>
              <p className="text-gray-600 text-sm text-center">Spa Therapist</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-4">
              <img src="/team4.jpg" alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-center">Anita</h3>
              <p className="text-gray-600 text-sm text-center">Skincare Specialist</p>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        {/* <div className="mb-12">
          <Slider />
        </div> */}

        {/* Join Our Journey */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-4">Join Our Journey</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Whether you’re a client, beauty enthusiast, or partner, we invite you to experience the ultimate in beauty, wellness, and self-care at GlamourHub.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
