import React, { useState } from 'react';
import categoriesData from './components/CategoryData';
import NavBar from './components/NavBar';
import MemoryForm from './components/MemoryForm';
import MemoryEntry from './components/MemoryEntry';
import IntroText from "./components/IntroText.jsx";
import IconData from './components/IconData';
import Icons from "./components/Icons.jsx";

export default function App() {
    const [entries, setEntries] = useState([]);
    const [isShown, setIsShown] = useState(false);

    const addEntry = (entry) => {
        setEntries((prev) => [entry, ...prev]);
    };

    const toggleForm = () => {
        setIsShown(prev => !prev);
    }

    return (
        <div className="container-xl bg-white rounded-3 ps-4 pe-4">
            <NavBar />
            <Icons iconData={IconData} />
            <IntroText toggleForm={toggleForm} />
            { isShown && <MemoryForm categories={categoriesData} addEntry={addEntry}/> }
            <MemoryEntry entries={entries} categories={categoriesData} />
        </div>
    );
}
