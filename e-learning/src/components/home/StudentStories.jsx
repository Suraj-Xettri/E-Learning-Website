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
    <div className="bg-white rounded-lg p-16">
      <div className="mb-10 flex flex-col gap-1">
        <h2 className="text-4xl font-bold">Student Stories</h2>
        <p>Hear what our students have to say about their experiences</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  space-x-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-zinc-100 p-6 flex flex-col gap-2 rounded-lg">
            <div className='flex items-start text-black'>
                <StarRating rating={testimonial.rating} /> 
            </div>
            <p className="text-lg font-semibold mb-2">{testimonial.testimonial}</p>
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div className='flex justify-center items-center'>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentStories;
