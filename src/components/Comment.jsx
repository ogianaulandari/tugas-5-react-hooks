import { useState } from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, message }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="container mx-auto p-4 border border-gray-300 rounded-lg shadow-md my-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">{name}</p>
          <p className="text-gray-600 dark:text-gray-400">{message}</p>
        </div>
        <button 
          onClick={handleLike} 
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-300">
          {likes} {likes === 1 ? "Like" : "Likes"}
        </button>
      </div>
    </div>
  );
};

// Menambahkan prop-types untuk validasi props
Comment.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Comment;
