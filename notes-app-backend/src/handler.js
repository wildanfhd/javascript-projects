const { nanoid } = require('nanoid');

const addNoteHandler = (request, h) => {
    // Mendapatkan body request menggunakan request.payload.
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
};

module.exports = { addNoteHandler };
