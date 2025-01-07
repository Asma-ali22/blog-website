"use client";


import React, { useState } from "react";

interface Comment {
  id: number;
  name: string;
  text: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleAddComment = () => {
    if (name.trim() === "" || text.trim() === "") return;
    const newComment: Comment = {
      id: Date.now(),
      name,
      text,
    };
    setComments([...comments, newComment]);
    setName("");
    setText("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Comment Section</h2>

      {/* Input Fields */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Write your comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 h-24 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Post Comment
        </button>
      </div>

      {/* Comments List */}
      <div>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="p-4 bg-white border rounded-md shadow-sm"
              >
                <p className="font-bold">{comment.name}</p>
                <p className="text-gray-700">{comment.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSection;

  
