import React, {useState} from "react";
import IntroText from "../components/IntroText.jsx";
import Icons from "../components/Icons.jsx";
import IconData from "../components/IconData.js";
import MemoryForm from "../components/MemoryForm.jsx";
import MemoryEntry from "../components/MemoryEntry.jsx";

export default function Home({ entries, categories, addEntry, deleteEntry, updateEntry }) {
    const [isShown, setIsShown] = useState(false);
    const startedToggleForm = () => {
        setIsShown(prev => !prev);
    }
    const recentEntries = entries.slice(0,3);
    return (
        <div className="row">
            <div className="col-12 col-md-10 col-lg-8 py-5 mx-auto">
                <section className="position-relative z-1 mb-5">
                    <Icons iconData={IconData} />
                    <IntroText startedToggleForm={startedToggleForm} />

                </section>

                { isShown &&
                    <section className="trans-smooth mb-5">
                        <MemoryForm addEntry={addEntry} categories={categories} />
                    </section>
                }

                <section>
                    <h2 className="text-center fw-semibold mb-4">Your Recent Memories</h2>
                    <MemoryEntry
                        entries={recentEntries}
                        categories={categories}
                        deleteEntry={deleteEntry}
                        updateEntry={updateEntry} />
                </section>
            </div>

        </div>


    )
}