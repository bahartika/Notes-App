import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();

    this.state = {
      notes: notes,
      query: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id),
    });
  }

  onActiveHandler(id) {
    this.setState({
      notes: this.state.notes.map((note) => (note.id === id ? { ...note, archived: false } : note)),
    });
  }

  onArchiveHandler(id) {
    this.setState({
      notes: this.state.notes.map((note) => (note.id === id ? { ...note, archived: true } : note)),
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchChangeHandler(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.query.toLowerCase()));

    return (
      <>
        <Header />
        <Body notes={filteredNotes} onDelete={this.onDeleteHandler} onActive={this.onActiveHandler} onArchive={this.onArchiveHandler} addNote={this.onAddNoteHandler} query={this.state.query} onSearchChange={this.onSearchChangeHandler} />
        <Footer />
      </>
    );
  }
}

export default NotesApp;
