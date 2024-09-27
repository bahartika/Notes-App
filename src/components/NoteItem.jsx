import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import ActiveButton from "./ActiveButton";
import NoteItemContent from "./NoteItemContent";
import { showFormattedDate } from "../utils/index";

const NoteItem = ({ title, createdAt, body, id, onActive, onArchive, onDelete, archived }) => {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={showFormattedDate(createdAt)} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {archived ? <ActiveButton id={id} onActive={onActive} /> : <ArchiveButton id={id} onArchive={onArchive} />}
      </div>
    </div>
  );
};

export default NoteItem;
