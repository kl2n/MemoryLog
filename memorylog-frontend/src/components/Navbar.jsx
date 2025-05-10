//import { React, useState } from 'react';
import logo from './../images/memlog.png'

/*
const items = [
    {
        name: "Home",
        src: "/"
    },
    {
        name: "Journal Lists",
        src: "#"
    }
]
*/

export default function Navbar() {
    //console.log(props);
    //const[selectedItem, setSelectedItem] = useState(0);

    return (
        <>
         
            <nav className="navbar navbar-expand
                            d-flex justify-content-center
                            pt-3 pb-3
                            border-bottom border-light-subtle">
                <div className="d-flex gap-2 align-items-center">
                    <img className="logo" src={logo} alt="logo" />
                    <h2 className="fs-4 text-pink mb-0">MemoryLog</h2>
                </div>
                {/*
                <ul className="nav">
                    { items.map((item, index) => (
                        <li className="nav-item ms-3" key={index}>
                            <a 
                                href={item.src} 
                                className={ 
                                    selectedItem === index ? 
                                    "active text-decoration-none text-pink" :
                                    "text-decoration-none text-gray"
                                }
                                onClick={() => {
                                    setSelectedItem(index);
                                    console.log(item);
                                }}>
                                {item.name}
                                </a>
                        </li>
                    )) }
                </ul>
                */}
            </nav>
        </>
    )
}
