import {useEffect, useReducer} from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import EntryLists from "./pages/EntryLists.jsx";
import {entriesReducer} from "./reducers/entriesReducer.js";
import Navbar from "./components/Navbar.jsx";
import categoriesData from "../src/components/CategoryData.js";

export default function App() {
    const [entries, dispatch] = useReducer(entriesReducer, []);
    const menu = [
        {to: '/', label: 'Home'},
        {to: '/entry-lists', label: 'Entry Lists'},
    ];

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetch(`${baseUrl}/memoryentries`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "SET_ENTRY",
                    payload: data,
                });
            })
            .catch(error => console.error('Error fetching entries:', error));
    }, []);

    const addEntry = (newEntry) => {
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
                    type: "ADD_ENTRY",
                    payload: savedEntry,
                });
            })
            .catch(error => console.error('Error adding entries', error));
    };

    const updateEntry = (entryData) => {
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
                    type: "UPDATE_ENTRY",
                    payload: updatedEntry,
                });
            })
            .catch(error => console.error('Error updating entries', error));
    };

    const deleteEntry = (entryId) => {
        fetch(`${baseUrl}/memoryentries/${entryId}`, {
            method: 'DELETE',
        })
            .then(() => {
                dispatch({
                    type: "DELETE_ENTRY",
                    payload: entryId,
                });
            })
            .catch(error => console.error('Error deleting entries', error));
    };

    return (
        <div className="container-xl bg-white rounded-3 shadow ps-4 pe-4">
            <Navbar menu={menu} />
            <Routes>
                <Route path={"/"}
                       element={
                           <Home entries={entries}
                                 categories={categoriesData}
                                 addEntry={addEntry}
                                 deleteEntry={deleteEntry}
                                 updateEntry={updateEntry} />
                       }
                />
                <Route path={"/entry-lists"}
                       element={
                           <EntryLists
                               entries={entries}
                               categories={categoriesData}
                               deleteEntry={deleteEntry}
                               updateEntry={updateEntry}/>
                       }
                />
            </Routes>
        </div>

    );
}
