import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxTitle: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onDescChangeEventHandler = this.onDescChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onDescChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <section className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa Karakter Judul: {this.state.maxTitle - this.state.title.length}</p>
          <input className="note-input__title" type="text" placeholder="Tulis judul di sini" maxLength={this.state.maxTitle} onChange={this.onTitleChangeEventHandler} value={this.state.title} />
          <textarea className="note-input__body" placeholder="Tulis catatan di sini" onChange={this.onDescChangeEventHandler} value={this.state.body}></textarea>
          <button type="submit">+ Tambah Catatan</button>
        </form>
      </section>
    );
  }
}

export default NoteInput;
