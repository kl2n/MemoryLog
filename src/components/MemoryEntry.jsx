import React from 'react';

export default function MemoryEntry({ entries, categories }) {
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

                return (
                    <div
                        key={entry.id}
                        style={{backgroundColor: category.color}}
                        className="entry-card p-3 mb-3 rounded d-flex flex-row gap-3">
                        <div className="flex-grow-1">
                            <h3>{entry.heading}</h3>
                            <p>{entry.body}</p>
                            <i>{getTodayDate()}</i>
                        </div>

                        <div>
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
