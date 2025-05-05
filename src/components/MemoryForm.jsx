import React, {useEffect, useState} from 'react';

export default function MemoryForm({ categories, addEntry }) {
    const [heading, setHeading] = useState('');
    const [body, setBody] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [currentId, setCurrentId] = useState(1);

    // Load the current ID from localStorage on component mount
    useEffect(() => {
        const savedId  = localStorage.getItem('currentId');
        if (savedId) {
            setCurrentId(parseInt(savedId, 10));
        }
    }, [])

    // Update the current ID in localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('currentId', currentId); // Store the ID in localStorage
    }, [currentId]);

    const headingHandler = (e) => {
        setHeading(e.target.value);
    };

    const bodyHandler = (e) => {
        setBody(e.target.value);
    };

    const categoryHandler = (e) => {
        const selected = categories.find((category) => category.id === parseInt(e.target.value));
        setSelectedCategory(selected);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (heading.trim() !== "" && body.trim() !== "") {
            const newEntry = {
                id: currentId,
                heading,
                body,
                category: selectedCategory,
            };

            addEntry(newEntry);
            console.log(newEntry);
            setCurrentId((prevId) => prevId+1);
            setHeading('');
            setBody('');
            setSelectedCategory(categories[0]);
        }
    };

    return (
        <section className="memory col-12 col-lg-6 mx-auto pb-5 trans-smooth">
            <form onSubmit={handleSubmit}>
                <label htmlFor="heading" className="w-100 mb-2">Heading:
                    <input
                        type="text"
                        id="heading"
                        className="form-control w-100 border-box mb-3 mt-2"
                        value={heading}
                        onChange={headingHandler}
                        placeholder="Enter heading"
                        required />
                </label>

                <br/>

                <label htmlFor="description" className="mb-2">Description: </label>
                <textarea
                    id="description"
                    className="form-control border-box"
                    rows="5"
                    value={body}
                    onChange={bodyHandler}
                    placeholder="Write your thoughts..."
                    required />

                <br/>

                <label htmlFor="category" className="w-100">Category:</label>
                <select
                    id="category"
                    className="form-control w-100 border-box mb-3 mt-2"
                    value={selectedCategory.id}
                    onChange={categoryHandler} >
                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}>
                            {category.title}
                        </option>
                    ))}
                </select>

                <br/>

                <button
                    type="submit"
                    className="btn btn-custom-default border-box w-100 submit"
                    aria-label="save your entry">
                    Add Entry
                </button>
            </form>
        </section>
    );
}
