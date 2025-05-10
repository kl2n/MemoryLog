let MemoryEntries = require('../model/MemoryEntry');

const getAllEntries = async () => {
    return MemoryEntries.find();
}

const addEntries = async (entry) => {
    const newEntry = await MemoryEntries(entry);
    console.log("save new entry");
    return newEntry.save();
}

const updateEntries = async (entryId, entry) => {
    const updateEntry = await MemoryEntries.findByIdAndUpdate(entryId, entry, { new: true });
    return updateEntry;
}

const deleteEntries = async (entryId) => {
    const deleteEntry = await MemoryEntries.findByIdAndDelete(entryId);
    return deleteEntry;
}

module.exports = {
    getAllEntries,
    addEntries,
    updateEntries,
    deleteEntries,
}