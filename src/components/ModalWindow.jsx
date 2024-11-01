
import React from 'react'
import '../assets/styles/modalWindow.css'
import { useState, useEffect } from 'react';


export default function UpdateDataModalIsOpen({ dataUser, setDataUser, setUpdateDataModalIsOpen }) {

    const [userName,surname,additionalName,description, contact, UNI] = dataUser

    const [inputUserName, setInputUserName] = useState(userName)
    const [inputSurname,setInputSurname] = useState(surname)
    const [inputAdditionalName,setInputAdditionalName] = useState(additionalName)
    const [inputDescription, setInputDescription] = useState(description);
    const [inputContact, setInputContact] = useState(contact);
    const [inputUNI, setInputUNI] = useState(UNI);

    function updateData() {
        // event.preventDefault();
        const [setUserName,setSurname, setAdditionalName,setDescription, setContact, setUNI] = setDataUser;
        setUserName(inputUserName)
        setDescription(inputDescription)
        setSurname(inputSurname)
        setAdditionalName(inputAdditionalName)
        setContact(inputContact)
        setUNI(inputUNI)
        setUpdateDataModalIsOpen(false)
    }

    useEffect(() => { setInputUserName(userName); }, [userName]);

    return (

        <div className="modal-window">
            <div className='modal-window__container'>
                <div className="modal-window__header" >
                    <h2 className='modal-window__title'>Редактирование сведеней</h2>
                    <button onClick={() => setUpdateDataModalIsOpen(false)}
                        type="button"
                        className="modal-window__btn-close" >&times;</button>
                </div>
                <div className="modal-window__update-data">
                    <p className="modal-window__required-field">* Обезательное к заполнению</p>

                    <p className="modal-window__input-label">Имя*</p>
                    <input value={inputUserName}
                        onChange={(event) => setInputUserName(event.target.value)}
                        type="text" className="modal-window__user-name" id="modal-window__user-name" required />

                    <p className="modal-window__input-label">Фамилия*</p>
                    <input value={inputSurname}
                        onChange={(event) => setInputSurname(event.target.value)}
                        type="text" className="modal-window__surname-name" id="modal-window__surname-name" required />

                    <p className="modal-window__input-label">Дополнительное имя</p>
                    <input value={inputAdditionalName}
                        onChange={(event) => setInputAdditionalName(event.target.value)}
                        type="text" className="modal-window__additional-name" id="modal-window__additional-name" />

                    <p className="modal-window__input-label" >Заголовок*</p>
                    <input value={inputDescription}
                        onChange={(event) => setInputDescription(event.target.value)}
                        type="text" className="modal-window__decripion" required />


                    <h3 className="modal-window__title-education" >Образование</h3>
                    <input value={inputUNI}
                        onChange={(event) => setInputUNI(event.target.value)} 
                    type="text" className="modal-window__input-UNI" required />

                    <h3 className="modal-window__country" >Регион</h3>
                    <input value={inputContact}
                        onChange={(event) => setInputContact(event.target.value)}
                        type="text" className="modal-window__input-country" required />


                    <button
                        type="button"
                        className="modal-window__btn-update"
                        onClick={updateData}
                    >Сохранить</button>
                </div>
            </div>
        </div>
    )
}