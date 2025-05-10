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
        type: {
            id: {
                type: Number,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            image: {
                type: {
                    src: String,
                    alt: String,
                },
                required: true
            },
            color: {
                type: String,
                required: true,
            }

        }
        
    }
}, { timestamps: true });

module.exports = mongoose.model('MemoryEntry', MemoryEntrySchema);