const { nanoid } = require("nanoid");
const notes = require("./notes");

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

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    // Pengkondisian untuk menentukan response yang diberikan oleh server.
    // Jika isSuccess bernilai true maka respons berhasil akan triggered, jika false sebaliknya
    if (isSuccess) {
        const response = h.response({
            status: "success",
            message: "Catatan berhasil ditambahkan",
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }

    // Response jika isSucces bernilai false
    const response = h.response({
        status: "fail",
        message: "Catatan tidak ditemukan",
    });
    response.code(500);
    return response;
};

const getAllNotesHandler = () => ({
    status: "success",
    data: {
        notes,
    },
});

// Handler untuk mengambil catatan berdasarkan id dari path parameter
const getNoteByIdHandler = (request, h) => {
    // Kita dapatkan body request yaitu id dari request.params(diambil dari path parameter)
    const { id } = request.params;

    // Setelah mendapatkan nilai id, dapatkan objek note dengan id tersebut dari array notes
    // Memanfaatkan method array .filter
    const note = notes.filter((n) => n.id === id)[0];

    // Memastikan bahwa notes tidak bernilai undefined
    if (note !== undefined) {
        return {
            status: "success",
            data: {
                note,
            },
        };
    }

    const response = h.response({
        status: "fail",
        message: "Catatan tidak ditemukan",
    });
    response.code(404);
    return response;
};

const editNoteByIdHandler = (request, h) => {
    // Mendapatkan nilai id untuk menyesuaikan id catatan dengan id yang ada di route parameter
    const { id } = request.params;

    // Mengambil data notes terbaru yang dikirimkan oleh client melalui body request.
    const { title, tags, body } = request.payload;

    // Memperbarui nilai properti updatedAt agar dapat kapan terakhir catatan diedit.
    const updatedAt = new Date().toISOString();

    // Mendapatkan index array pada objek catatan sesuai id yang ditentukan.
    // jika note dengan id yang dicari ditemukan,
    // maka index akan bernilai array index dari objek catatan yang dicari
    // , jika tidak maka index = -1
    const index = notes.findIndex((note) => note.id === id);

    // Menentukan gagal atau tidaknya permintaan dari nilai index menggunakan if-else
    if (index !== 1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        };

        const response = h.response({
            status: "success",
            message: "Catatan berhasil diperbarui",
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: "fail",
        message: "Gagal memperbarui catatan. Id tidak ditemukan",
    });
    response.code(404);
    return response;
};

const deleteNoteByIdHandler = (request, h) => {
    const { id } = request.params;

    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
        notes.splice(index, 1);
        const response = h.response({
            status: "success",
            message: "Catatan berhasil dihapus",
        });
        response.code(200);
        return response;
    }

    const response = h.respose({
        status: "fail",
        message: "Catatan gagal dihapus. Id tidak ditemukan",
    });
    response.code(404);
    return response;
};

module.exports = {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
};
