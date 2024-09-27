import React from "react";

const SearchInput = ({ query, onSearchChange }) => {
  return (
    <div className="note-input">
      <h2>Cari catatan</h2>
      <input type="text" placeholder="Ketikkan judul catatan di sini" value={query} onChange={onSearchChange} />
    </div>
  );
};

export default SearchInput;
