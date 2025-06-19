import React, {useState} from 'react';

export default function MemoryForm({ categories, addEntry }) {
    const [heading, setHeading] = useState('');
    const [body, setBody] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    

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
                heading,
                body,
                category: {
                    id: selectedCategory.id,
                    title: selectedCategory.title,
                    image: {
                        src: selectedCategory.image.src,
                        alt: selectedCategory.image.alt,
                    },
                    color: selectedCategory.color,
                }
            };

            addEntry(newEntry);
            console.log(newEntry);
            setHeading('');
            setBody('');
            setSelectedCategory(categories[0]);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="heading" className="w-100 mb-2">
                    Heading<span className="text-danger">*</span>
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

                <label htmlFor="description" className="mb-2">
                    Description<span className="text-danger">*</span>
                </label>
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
        </div>
    );
}
