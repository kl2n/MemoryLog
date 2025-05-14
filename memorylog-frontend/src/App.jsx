import React, { useState, useReducer, useEffect } from 'react';
import { entriesReducer } from "./reducers/entriesReducer.js";
import NavBar from './components/NavBar';
import Icons from "./components/Icons.jsx";
import IntroText from "./components/IntroText.jsx";
import MemoryForm from './components/MemoryForm';
import MemoryEntry from './components/MemoryEntry';
import IconData from './components/IconData';
import categoriesData from './components/CategoryData';

export default function App() {
    const [entries, dispatch] = useReducer(entriesReducer, []);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;

        fetch(`${baseUrl}/memoryentries`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "SET_ENTRY",
                    payload: data,
                })
            })
            .catch(error => console.error('Error fetching entries:', error));
    }, []);

    const addEntryAction = (newEntry) => {
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
                dispatch({
                    type: 'ADD_ENTRY',
                    payload: savedEntry,
                });
            })
            .catch(error => console.error('Error adding entries', error));
    };

    const updateEntryAction = (entryData) => {
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
            dispatch({
                type: 'UPDATE_ENTRY',
                payload: updatedEntry,
            })
        })
        .catch(error => console.error('Error updating entries', error));
    };

    const deleteEntryAction = (entryId) => {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;

        fetch(`${baseUrl}/memoryentries/${entryId}`, {
            method: 'DELETE',
        })
        .then(() => {
            dispatch({
                type: 'DELETE_ENTRY',
                payload: entryId,
            })
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
            { isShown && <MemoryForm addEntry={addEntryAction} categories={categoriesData} /> }
            <MemoryEntry
                entries={entries}
                categories={categoriesData}
                deleteEntry={deleteEntryAction}
                updateEntry={updateEntryAction} />
        </div>
    );
}
