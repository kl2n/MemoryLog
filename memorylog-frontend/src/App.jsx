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
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;

        fetch(`${baseUrl}/memoryentries`)
            .then(res => res.json())
            .then(data => {
                setEntries(data);
            })
            .catch(error => console.error('Error fetching entries:', error));
    }, []);

    const addEntry = (newEntry) => {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;

        fetch(`${baseUrl}/memoryentries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEntry),
        })
            .then((res) => res.json())
            .then(savedEntry => {
                setEntries(prevEntries => [savedEntry, ...prevEntries]);
            })
            .catch(error => console.error('Error adding entries', error));
    };

    const updateEntry = (entryData) => {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        fetch(`${baseUrl}/memoryentries/${entryData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entryData),
        })
        .then((res) => res.json())
        .then(updatedEntry => {
            const updatedEntries = entries.map(entry =>
                entry._id === updatedEntry._id ? updatedEntry : entry
            );
            setEntries(updatedEntries);
        })
        .catch(error => console.error('Error updating entries', error));
    };

    const deleteEntry = (entryId) => {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;

        fetch(`${baseUrl}/memoryentries/${entryId}`, {
            method: 'DELETE',
        })
        .then(() => {
            const filteredEntries = entries.filter(entry => entry._id !== entryId);
            setEntries(filteredEntries);
        })
        .catch(error => console.error('Error deleting entries', error));
    };

    const startedToggleForm = () => {
        setIsShown(prev => !prev);
    }

    return (
        <div className="container-xl bg-white rounded-3 ps-4 pe-4">
            <NavBar />
            <Icons iconData={IconData} />
            <IntroText startedToggleForm={startedToggleForm} />
            { isShown && <MemoryForm addEntry={addEntry} categories={categoriesData} /> }
            <MemoryEntry
                entries={entries}
                categories={categoriesData}
                deleteEntry={deleteEntry}
                updateEntry={updateEntry} />
        </div>
    );
}
