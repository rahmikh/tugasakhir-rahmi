const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

// READ
router.get('/', listController.getListDokumen);
router.get('/mahar', listController.getListMahar);
router.get('/acara', listController.getListAcara);
router.get('/konsumsi', listController.getListKonsumsi);
router.get('/lainnya', listController.getListLainnya);

// CREATE
router.post('/', listController.createNewList);

// UPDATE
router.patch('/:idList', listController.updateList);

// DELETE
router.delete('/:idList', listController.deleteList);

module.exports = router;