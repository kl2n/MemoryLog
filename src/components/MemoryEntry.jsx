import React from 'react';

export default function MemoryEntry({ entries, categories }) {
    const [expandedEntryIds, setExpandedEntryIds] = React.useState([]);
    const maxChars = 100;

    const toggleExpanded = (entryId) => {
        setExpandedEntryIds(prev => (
            prev.includes(entryId)
            ? prev.filter(id => id !== entryId)
            : [...prev, entryId]
        ))
    }
    const getTodayDate = () => {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, "0");
        const month = (today.getMonth() + 1).toString().padStart(2, "0");
        const year = today.getFullYear();

        return `${day}/${month}/${year}`;
    };
    return (
        <section className="entry col-12 col-lg-6 mx-auto pb-5">
            {entries.map((entry) => {
                const category = categories.find(category => category.id === entry.category.id);
                const isExpanded = expandedEntryIds.includes(entry.id);
                const bodyExceedsMaxChars = entry.body.length > maxChars;

                return (
                    <div
                        key={entry.id}
                        style={{backgroundColor: category.color}}
                        className="entry-card p-3 mb-3 rounded d-flex flex-row align-items-center">
                        <div className="col-8 pe-3">
                            <h3>{entry.heading}</h3>

                            <p className="text-break">
                                {isExpanded || !bodyExceedsMaxChars
                                    ? entry.body
                                    : `${entry.body.substring(0, maxChars)}...`}
                                &nbsp;
                                { bodyExceedsMaxChars && (
                                    <button
                                        type="button"
                                        className="btn btn-custom-secondary py-1 px-2 rounded-3 fw-semibold cursor-pointer trans-smooth"
                                        onClick={()=>toggleExpanded(entry.id)}>
                                        {isExpanded ? "less" : "more"}
                                    </button>
                                )}
                            </p>


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
