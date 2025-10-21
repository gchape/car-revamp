import React from "react";

function Chat({
  username,
  date,
  message,
  image,
}: {
  username: string;
  date: string;
  message: string;
  image: string;
}) {
  return (
    <React.Fragment>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={image} />
        </div>
      </div>

      <div className="chat-header text-stone-400">
        <p>{username}</p>
        <time className="text-xs text-stone-500">{date}</time>
      </div>

      <div className="chat-bubble bg-teal-800 text-neutral-300">{message}</div>
    </React.Fragment>
  );
}

export default Chat;
