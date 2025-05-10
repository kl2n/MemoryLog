var express = require('express');
var router = express.Router();
var memoryentries = require('./../controller/MemoryEntriesController');

router.get('/', memoryentries.getAllEntries);
router.post('/', memoryentries.addEntries);
router.put('/:entryId', memoryentries.updateEntries);
router.delete('/:entryId', memoryentries.deleteEntries);

module.exports = router;