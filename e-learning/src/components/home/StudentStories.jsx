// src/StudentStories.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "John Doe",
    title: "Teacher, ABC School",
    testimonial: "Learning with our courses has been a game-changer!",
    imageUrl: "", // Add image URL if needed
    rating: 5
  },
  {
    name: "Jane Smith",
    title: "Manager, XYZ Company",
    testimonial: "I've never learned so much in such a short time!",
    imageUrl: "", // Add image URL if needed
    rating: 5
  },
  {
    name: "David Johnson",
    title: "CEO, Acme Corporation",
    testimonial: "The courses exceeded my expectations. Highly recommended!",
    imageUrl: "", // Add image URL if needed
    rating: 5
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-2">
      {[...Array(rating)].map((_, i) => (
        <FaStar key={i} className="w-5 h-5 text-yellow-500" />
      ))}
    </div>
  );
};

const StudentStories = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Student Stories</h2>
        <p>Hear what our students have to say about their experiences</p>
      </div>
      <div className="flex justify-center space-x-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md w-1/3">
            <StarRating rating={testimonial.rating} />
            <p className="text-lg font-semibold mb-2">{testimonial.testimonial}</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentStories;
