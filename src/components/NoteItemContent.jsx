import React from "react";

const NoteItemContent = ({ title, date, body }) => {
  return (
    <div className="note-item__content">
      <h2 className="note-item__title">{title}</h2>
      <h4 className="note-item__date">{date}</h4>
      <p className="note-item__body">{body}</p>
    </div>
  );
};

export default NoteItemContent;
