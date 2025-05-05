import React, { useState, useEffect } from 'react';
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

    // Load entries from localStorage when the app starts
    useEffect(() => {
        const savedEntries = JSON.parse(localStorage.getItem('entries'));
        if (savedEntries) {
            setEntries(savedEntries);
        }
    }, []);

    const addEntry = (newEntry) => {
        //setEntries((prev) => [entry, ...prev]);
        const updatedEntries = [newEntry, ...entries];
        setEntries(updatedEntries);
        localStorage.setItem('entries', JSON.stringify(updatedEntries));
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
