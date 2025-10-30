const dbPool = require('../config/db');

const getListDokumen = () => {
    const SQLQuery = `SELECT * FROM list WHERE sublist="Dokumen"`;

    return dbPool.execute(SQLQuery);
}

const getListMahar = () => {
    const SQLQuery = `SELECT * FROM list WHERE sublist="Mahar & Seserahan"`;

    return dbPool.execute(SQLQuery);
}

const getListAcara = () => {
    const SQLQuery = `SELECT * FROM list WHERE sublist="Persiapan Acara"`;

    return dbPool.execute(SQLQuery);
}

const getListKonsumsi = () => {
    const SQLQuery = `SELECT * FROM list WHERE sublist="Konsumsi"`;

    return dbPool.execute(SQLQuery);
}

const getListLainnya = () => {
    const SQLQuery = `SELECT * FROM list WHERE sublist="Persiapan Lainnya"`;

    return dbPool.execute(SQLQuery);
}

const createNewList = (body) => {
    const SQLQuery = `INSERT INTO list (nama_list, keterangan, sublist) 
    VALUES ('${body.nama_list}', '${body.keterangan}', '${body.sublist}')`;

    return dbPool.execute(SQLQuery);
}

const updateList = (body, idList) => {
    const SQLQuery = `UPDATE list SET nama_list='${body.nama_list}', keterangan='${body.keterangan}', 
    sublist='${body.sublist}' WHERE id_list=${idList} `;

    return dbPool.execute(SQLQuery);
}

const deleteList = (idList) => {
    const SQLQuery = `DELETE FROM list WHERE id_list=${idList}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getListDokumen,
    getListMahar,
    getListAcara,
    getListKonsumsi,
    getListLainnya,
    createNewList,
    updateList,
    deleteList
}