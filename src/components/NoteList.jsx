import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive, onActive }) => {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  }

  return (
    <section>
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} onActive={onActive} />
        ))}
      </div>
    </section>
  );
};

export default NoteList;
