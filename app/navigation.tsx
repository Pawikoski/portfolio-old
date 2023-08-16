'use client'

import { useState, useRef } from 'react';
import { AiOutlineHome, AiOutlineAppstore } from 'react-icons/ai';
import { BsPerson, BsEnvelope } from 'react-icons/bs'
import { IoDocumentTextOutline } from 'react-icons/io5'

export default function Navigation() {
    const [selected, setSelected] = useState<number>(0)

    const scroll = (view_selector: string) => {
        const section = document.querySelector( view_selector );
        section?.scrollIntoView( {behavior: 'smooth', block: 'start'} )
    }

    return (
        <header className="flex flex-col justify-center fixed top-0 left-0 bottom-0 z-50 transition-all overflow-y-auto p-4">
            <nav className="p-0 block">
                <ul className="list-none">
                    <li className="relative whitespace-nowrap">
                        <a className={`text-white w-14 flex items-center justify-center p-4 mb-2 text-xl rounded-full h-14 hover:cursor-pointer hover:bg-blue-600 focus:bg-blue-600 transition duration-300 ease-in-out ${selected === 1 && "bg-blue-600"}`} onClick={ () => {setSelected(1); scroll('#home')} }>
                            <AiOutlineHome />
                        </a>
                    </li>
                    <li className="relative whitespace-nowrap">
                        <a className={`text-white w-14 flex items-center justify-center p-4 mb-2 text-xl rounded-full h-14 hover:cursor-pointer hover:bg-blue-600 focus:bg-blue-600 transition duration-300 ease-in-out ${selected === 2 && "bg-blue-600"}`} onClick={ () => {setSelected(2); scroll('#about')} }>
                            <BsPerson />
                        </a>
                    </li>
                    <li className="relative whitespace-nowrap">
                        <a className={`text-white w-14 flex items-center justify-center p-4 mb-2 text-xl rounded-full h-14 hover:cursor-pointer hover:bg-blue-600 focus:bg-blue-600 transition duration-300 ease-in-out ${selected === 3 && "bg-blue-600"}`} onClick={ () => {setSelected(3); scroll('#cv')} }>
                            <IoDocumentTextOutline />
                        </a>
                    </li>
                    <li className="relative whitespace-nowrap">
                        <a className={`text-white w-14 flex items-center justify-center p-4 mb-2 text-xl rounded-full h-14 hover:cursor-pointer hover:bg-blue-600 focus:bg-blue-600 transition duration-300 ease-in-out ${selected === 4 && "bg-blue-600"}`} onClick={ () => {setSelected(4); scroll('#portfolio')} }>
                            <AiOutlineAppstore />
                        </a>
                    </li>
                    <li className="relative whitespace-nowrap">
                        <a className={`text-white w-14 flex items-center justify-center p-4 mb-2 text-xl rounded-full h-14 hover:cursor-pointer hover:bg-blue-600 focus:bg-blue-600 transition duration-300 ease-in-out ${selected === 5 && "bg-blue-600"}`} onClick={ () => {setSelected(5); scroll('#contact')} }>
                            <BsEnvelope />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}