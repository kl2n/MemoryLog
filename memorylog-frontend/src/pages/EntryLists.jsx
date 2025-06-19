import MemoryEntry from "../components/MemoryEntry.jsx";

export default function EntryLists({ entries, categories, deleteEntry, updateEntry }) {
    return (
        <div className="row">
            <div className="col-12 col-md-10 col-lg-8 py-5 mx-auto">
                <h2 className="text-center mb-4">Your Memories</h2>
                <MemoryEntry
                    entries={entries}
                    categories={categories}
                    deleteEntry={deleteEntry}
                    updateEntry={updateEntry} />
            </div>

        </div>
    )
}