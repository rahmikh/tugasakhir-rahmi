const listModel = require('../models/listModel');

const getListDokumen = async (req, res) => {
    try {
        const [data] = await listModel.getListDokumen();

        res.json({
            message : 'GET all list success',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
    
}

const getListMahar = async (req, res) => {
    try {
        const [data] = await listModel.getListMahar();

        res.json({
            message : 'GET all list success',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
    
}

const getListAcara = async (req, res) => {
    try {
        const [data] = await listModel.getListAcara();

        res.json({
            message : 'GET all list success',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
    
}

const getListKonsumsi = async (req, res) => {
    try {
        const [data] = await listModel.getListKonsumsi();

        res.json({
            message : 'GET all list success',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
    
}

const getListLainnya = async (req, res) => {
    try {
        const [data] = await listModel.getListLainnya();

        res.json({
            message : 'GET all list success',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
    
}

const createNewList = async(req, res) => {
    const {body} =  req;
    try {
        await listModel.createNewList(body);
        res.json({
        message : 'CREATE new list success',
        data: body
    })
    } catch(error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
}

const updateList = async (req, res) => {
    const {idList} = req.params;
    const {body} = req;
    try {
        await listModel.updateList(body,idList);
        res.json({
            message : 'UPDATE list success',
            data : {
                id: idList,
                ...body
            }
        })
    } catch(error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
}

const deleteList = async (req, res) => {
    const {idList} = req.params;
    try{
        await listModel.deleteList(idList);
        res.json({
            message: 'DELETE list success',
            data : null
    })
    } catch {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
    
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