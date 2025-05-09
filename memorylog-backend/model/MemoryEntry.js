const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MemoryEntrySchema = new Schema ({
    heading: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    category: {
        type: Object,
        
    }
}, { timestamps: true });

module.exports = mongoose.model('MemoryEntry', MemoryEntrySchema);