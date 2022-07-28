const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
    // Mendapatkan body request yaitu properti objek notes menggunakan request.payload.
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    // newNote menampung seluruh properti objek notes
    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    // menambahkan newNote (yang berisi properti objek notes) ke dalam array notes
    notes.push(newNote);

    const isSuccess = notes.filter(note => note.id === id).length > 0;

    // Pengkondisian untuk menentukan response yang diberikan oleh server.
        // Jika isSuccess bernilai true maka respons berhasil akan triggered, jika false sebaliknya 
    if(isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }
    
    // Response jika isSucces bernilai false
    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
    });
    response.code(500);
    return response
};

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
        notes,
    },
});

module.exports = { addNoteHandler, getAllNotesHandler };
