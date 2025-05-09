import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Icons from "./components/Icons.jsx";
import IntroText from "./components/IntroText.jsx";
import MemoryForm from './components/MemoryForm';
import MemoryEntry from './components/MemoryEntry';
import IconData from './components/IconData';
import categoriesData from './components/CategoryData';


export default function App() {
    const [entries, setEntries] = useState([]);
    const [currentId, setCurrentId] = useState(1);
    const [isShown, setIsShown] = useState(false);

    // Load entries and Id from localStorage when the app starts/mount
    useEffect(() => {
        const savedEntries = JSON.parse(localStorage.getItem('entries'));
        const saveId = localStorage.getItem('currentId');
        if (savedEntries) setEntries(savedEntries);
        if (saveId) setCurrentId(parseInt(saveId, 10));   
    }, []);

    const addEntry = (entryData) => {
        const newId = currentId + 1;
        setCurrentId(newId);
        const newEntry = {
            ...entryData,
            id: currentId
        };
        const updatedEntries = [newEntry, ...entries];
        setEntries(updatedEntries);
        localStorage.setItem("entries", JSON.stringify(updatedEntries));
        localStorage.setItem("currentId", newId);
    };

    const updateEntry = (entryData) => {
        const updatedEntries = entries.map(entry =>
            entry.id === entryData.id ? entryData : entry
        );
        setEntries(updatedEntries);
    }

    const deleteEntry = (entryId) => {
        const filteredEntries = entries.filter(entry => entry.id !== entryId);
        setEntries(filteredEntries);
        localStorage.setItem("entries", JSON.stringify(filteredEntries));
    };

    const toggleForm = () => {
        setIsShown(prev => !prev);
    }

    return (
        <div className="container-xl bg-white rounded-3 ps-4 pe-4">
            <NavBar />
            <Icons iconData={IconData} />
            <IntroText toggleForm={toggleForm} />
            { isShown && <MemoryForm addEntry={addEntry} categories={categoriesData} /> }
            <MemoryEntry
                entries={entries}
                categories={categoriesData}
                deleteEntry={deleteEntry}
                updateEntry={updateEntry} />
        </div>
    );
}
