import React from "react";
import "./card.css";
import { FcLikePlaceholder } from "react-icons/fc";
const Card = ({ title, description }) => {
  return (
    <div className="post-card gap-3">
      <a href="#" class="title">
        Padaune course ko name halne thau
      </a>
      <div className="image-preview">
        
      </div>
      <div className="comment-like">
        <span className="text-black flex">
          <FcLikePlaceholder className="text-2xl cursor-pointer"/>
          10
        </span>
      </div>
    </div>
  );
};

export default Card;
