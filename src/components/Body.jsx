import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import SearchInput from "./SearchInput";

const Body = ({ addNote, onDelete, onActive, onArchive, notes, query, onSearchChange }) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archiveNotes = notes.filter((note) => note.archived);

  return (
    <main className="note-app__body">
      <NoteInput addNote={addNote} />
      <SearchInput query={query} onSearchChange={onSearchChange} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Catatan Arsip</h2>
      <NoteList notes={archiveNotes} onDelete={onDelete} onActive={onActive} />
    </main>
  );
};

export default Body;
