var memoryentriesService = require('../service/MemoryEntriesService');

async function getAllEntries (req, res, next) {
    //console.log('MemoryEntries Controller called');
    const entries = await memoryentriesService.getAllEntries();
    if(!entries) throw Error('No Entries Found');
    await res.status(200).json(entries);
}

async function addEntries (req, res, next) {
    //console.log('Add Entry Controller is called');
    try {
        const entry = await memoryentriesService.addEntries(req.body);
        if(!entry) throw Error('No Entries Found');
        await res.status(200).json(entry);
    }
    catch (err) {
        await res.status(400).json({message: err});
    }
}

async function deleteEntries (req, res, next) {
    const id = req.params['entryId'];
    try {
        const deleteEntry = await memoryentriesService.deleteEntries(id);
        if(!deleteEntry) throw Error("Cannot delete entry");
        await res.status(200).json(deleteEntry);
    }
    catch (err) {
        await res.status(404).json({err: "404 Not Found"});
    }
}

async function updateEntries (req, res, next) {
    //console.log('Entry Update Controller is called');
    const id = req.params['entryId'];
    const entry = req.body;
    try {
        const updateEntry = await memoryentriesService.updateEntries(id, entry);
        if(!updateEntry) throw Error("Cannot update entry");
        await res.status(200).json(updateEntry);
    }
    catch (err) {
        await res.status(400).json({message: err});
    }
}

module.exports = {
    getAllEntries,
    addEntries,
    updateEntries,
    deleteEntries,
}