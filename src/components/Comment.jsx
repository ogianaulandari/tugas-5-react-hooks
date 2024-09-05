import { useState } from 'react';
import PropTypes from 'prop-types';
import likeIcon from '../assets/images/contact/likeIcon.png'

const Comment = ({ name, message }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };


  return (
    <div className="container mx-auto p-4 border border-gray-300 rounded-lg shadow-md my-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">{ name }</p>
          <p className="text-gray-600 dark:text-gray-400">{ message }</p>
        </div>
        <button 
          onClick={handleLike}
          className="text-black px-4 py-2 flex flex-col items-center transform transition-transform duration-300 hover:scale-125" // Animasi saat hover
        >
          <img src={likeIcon} alt="Like" className="w-7 h-7 mb-1" /> 
          <span>{likes}</span>
        </button>
      </div>
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Comment;
