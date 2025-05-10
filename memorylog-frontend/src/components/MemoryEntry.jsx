import React from 'react';

export default function MemoryEntry({ entries, categories, deleteEntry, updateEntry }) {
    const [expandedEntryIds, setExpandedEntryIds] = React.useState([]);
    const [editId, setEditId] = React.useState(null);
    const [editHeading, setEditHeading] = React.useState('');
    const [editBody, setEditBody] = React.useState('');
    const maxChars = 100;

    const btnEditClick = (entry) => {
        setEditId(entry._id);
        setEditHeading(entry.heading);
        setEditBody(entry.body);
    };

    const btnUpdateClick = (entry) => {
        const saveEntry = {
            ...entry,
            heading: editHeading,
            body: editBody,
        };
        updateEntry(saveEntry);
        setEditId(null);
    }

    const toggleTextExpanded = (entryId) => {
        setExpandedEntryIds(prev => (
            prev.includes(entryId)
            ? prev.filter(id => id !== entryId)
            : [...prev, entryId]
        ))
    };

    const getTodayDate = () => {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, "0");
        const month = (today.getMonth() + 1).toString().padStart(2, "0");
        const year = today.getFullYear();

        return `${day}/${month}/${year}`;
    };
    return (
        <section className="entry col-12 col-lg-6 mx-auto pb-5">
            {Array.isArray(entries) && entries.map((entry) => {
                const category = categories.find(cat => cat.id === entry.category.id);
                const isExpanded = expandedEntryIds.includes(entry._id);
                const bodyExceedsMaxChars = entry.body && entry.body.length > maxChars;
                const isEditMode = editId === entry._id;

                return (
                    <div
                        key={entry._id}
                        style={{backgroundColor: category ? category.color : 'white'}}
                        className="entry-card p-3 mb-3 rounded d-flex flex-row align-items-center">
                        <div className="col-8 pe-3">
                            { isEditMode ?
                            (
                                <>
                                    <input
                                        type="text"
                                        className="form-control mb-2 border-box"
                                        value={editHeading}
                                        onChange={(e) => setEditHeading(e.target.value)}
                                    />
                                    <textarea
                                        className="form-control mb-3 border-box"
                                        value={editBody}
                                        onChange={(e) => setEditBody(e.target.value)} />
                                    <button
                                    type="button"
                                    className="btn btn-success py-1 px-2 mx-1 mb-2"
                                    onClick={()=>btnUpdateClick(entry)}>
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-light py-1 px-2 mx-1 mb-2"
                                        onClick={()=>setEditId(null)}>
                                        Cancel
                                    </button>
                                </>
                            ):(
                                <>
                                    <h3>{entry.heading}</h3>
                                    <p className="text-break">
                                        {isExpanded || !bodyExceedsMaxChars
                                            ? entry.body
                                            : `${entry.body.substring(0, maxChars)}...`}
                                        &nbsp;
                                        {bodyExceedsMaxChars && (
                                            <button
                                                type="button"
                                                className="btn btn-custom-secondary py-1 px-2 rounded-3 fw-semibold cursor-pointer trans-smooth"
                                                onClick={() => toggleTextExpanded(entry._id)}>
                                                {isExpanded ? "less" : "more"}
                                            </button>
                                        )}
                                    </p>
                                    <button
                                        type="button"
                                        className="btn btn-primary py-1 px-2 mx-1 mb-2"
                                        onClick={() => btnEditClick(entry)}>
                                        Edit
                                    </button>
                                </>
                            )}

                            <button
                                type="button"
                                className="btn btn-danger py-1 px-2 mx-1 mb-2"
                                onClick={()=>deleteEntry(entry._id)}>
                                Delete
                            </button>

                                <br/>

                            <small>{getTodayDate()}</small>
                        </div>

                        <div className="col-4">
                            {category && (
                                <div className="img-small">
                                    <img
                                        src={category.image.src}
                                        alt={category.image.alt}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
