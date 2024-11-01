import React from "react";
import '../assets/styles/header.css'
import { useState } from "react";
import UpdateDataModalIsOpen from "./ModalWindow";
import Avatar from "./Avatar";


function Header() {

    const [userName, setUserName] = useState('John')
    const [surname, setSurname] = useState('Doe')
    const [additionalName, setAdditionalName] = useState('')
    const [decription, setSescription] = useState('Front-End Developer Specializing in User Experience and Interactive Design')
    const [contact, setContact] = useState('Paris, France')
    const [UNI, setUNI] = useState('BSUIR')
    const [updateDataModalIsOpen, setUpdateDataModalIsOpen] = useState(false)


    return (
        <>
            {updateDataModalIsOpen && (
                <UpdateDataModalIsOpen
                    dataUser={[userName, surname, additionalName, decription, contact, UNI]}
                    setDataUser={[setUserName, setSurname, setAdditionalName, setSescription, setContact, setUNI]}
                    setUpdateDataModalIsOpen={setUpdateDataModalIsOpen} />
            )}

            <header className="header">
                <div className="profile-container">

                    <div className="profile__profile-header">
                        <Avatar></Avatar>
                    </div>
                    <div className="profile__info">
                        <div onClick={() => setUpdateDataModalIsOpen(true)} className="profile__update" >
                            <svg width={48} height={48} viewBox="0 0 2050 2050" data-name="Layer 3" id="Layer_3" fill="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <defs>
                                        <style>{`.cls-1 { fill: #000000; }`}</style>
                                    </defs>
                                    <path
                                        className="cls-1"
                                        d="M1592.4,609.3,1413.7,430.6a45,45,0,0,0-63.7,0L801,979.7a44.4,44.4,0,0,0-13,27.9l-17.1,195.7a44.9,44.9,0,0,0,44.8,48.9h3.9l195.8-17.1a44.9,44.9,0,0,0,27.9-13l430.6-430.6h0a.1.1,0,0,1,.1-.1l118.4-118.4A44.9,44.9,0,0,0,1592.4,609.3Zm-150.3,86.6L1327,580.8l54.9-54.8,115,115.1Z"
                                    ></path>
                                    <path
                                        className="cls-1"
                                        d="M982.2,1615a546.2,546.2,0,1,1,0-1092.4,557.1,557.1,0,0,1,89.5,7.3,45,45,0,0,1-7.3,89.4,47.1,47.1,0,0,1-7.4-.6,466,466,0,0,0-74.8-6.1,455.8,455.8,0,1,0,439.3,332.8,45,45,0,1,1,86.7-24.3,548.3,548.3,0,0,1,20.2,147.7A545.7,545.7,0,0,1,982.2,1615Z"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div className="profile__text">
                            <h1 className="profile__user-name">{userName} {surname} {additionalName} </h1>
                            <p className="profile__phrase" >{decription}</p>
                            <p className="profile__contact" > {contact}</p>
                            <div className="profile__UNI" > {UNI} </div>
                        </div>
                    </div>
                </div>
            </header>

        </>


    )
}



export default Header