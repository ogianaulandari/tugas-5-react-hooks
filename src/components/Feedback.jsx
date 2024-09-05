import { useState } from 'react';
import Comment from './Comment';

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { name, message };
    setFeedback([...feedback, newFeedback]);
    setName('');
    setMessage('');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-4">
        Kritik dan Saran
      </h2>
      <p className="text-base">
        Silahkan Masukkan Kritik dan Saran Anda
      </p>
      <form onSubmit={ handleSubmit } className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama"
          className="w-full p-2 border-gray-300 rounded-md"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Saran Anda..."
          className="w-full p-2 border-gray-300 rounded-md"
          rows="4"
        ></textarea>
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md">
          Kirim Saran
        </button>
      </form>
      {feedback.map((item, index) => (
        <Comment key={index} name={item.name} message={item.message} />
      ))}
    </div>
  );
};

export default Feedback;