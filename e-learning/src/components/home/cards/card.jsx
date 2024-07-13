import React from "react";
import "./card.css";
import { FcLikePlaceholder } from "react-icons/fc";
const Card = ({ title, description }) => {
  return (
    <div className="post-card">
      <div className="avatar"></div>
      <a href="#" class="title">
        7 Tools for Faster Development in React
      </a>
      <span className="datetime">3 min to read</span>
      <div className="image-preview"></div>
      <div className="comment-like">
        <span>
          <FcLikePlaceholder />
          10
        </span>
      </div>
    </div>
  );
};

export default Card;
