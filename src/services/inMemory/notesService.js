const { nanoid } = require('nanoid');

const errorMessage = {
  add: 'Catatan gagal ditambahkan',
  notFound: 'Catatan tidak ditemukan',
  edit: 'Gagal memperbarui catatan. Id tidak ditemukan',
  delete: 'Catatan gagal dihapus. Id tidak ditemukan',
};

class NotesService {
  constructor() {
    this._notes = [];
  }

  addNote({ title, tags, body }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
      title,
      tags,
      body,
      id,
      createdAt,
      updatedAt,
    };

    this._notes.push(newNote);

    const isSuccess = this._notes.filter((note) => note.id === id).length > 0;

    if (!isSuccess) throw new Error(errorMessage.add);

    return id;
  }

  getNotes() {
    return this._notes;
  }

  getNoteById(id) {
    const note = this._notes.find((n) => n.id === id);
    if (!note) throw new Error(errorMessage.notFound);

    return note;
  }

  editNoteById(id, { title, tags, body }) {
    const index = this._notes.findIndex((note) => note.id === id);
    if (index === -1) throw new Error(errorMessage.edit);

    const updatedAt = new Date().toISOString();
    this._notes[index] = {
      ...this._notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
  }

  deleteNoteById(id) {
    const index = this._notes.findIndex((note) => note.id === id);
    if (index === -1) throw new Error(errorMessage.delete);

    this._notes.splice(index, 1);
  }
}

module.exports = NotesService;
