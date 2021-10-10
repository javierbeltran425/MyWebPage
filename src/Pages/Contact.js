import styled from 'styled-components'

import { useRef } from 'react'
import React, { useState } from 'react';

import Header from '../Components/Header'
import GeneralButton from '../Components/GeneralButton'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

import Moon from '../Resources/Imagenes/moon.jpg'

const BackDiv = styled.div`
    background: url(${Moon});
    background-size: cover;
`

const Contact = () => {
    var subject = useRef(null), email = useRef(null), name = useRef(null), message = useRef(null),
        brand = useRef(null)

    return(
        <>
            <BackDiv className="w-screen md:h-screen">
                <Header />
                <h1 className="text-white text-center text-xl md:text-5xl font-bold pt-20">¡TRABAJEMOS JUNTOS!</h1>
                <h2 className="text-white text-center md:text-3xl font-bold pt-5">¡HABLEMOS!</h2>

                <div className="w-full flex flex-col justify-center items-center mt-5">
                    <form className="flex flex-col md:flex-row w-full text-white">
                        <div className="flex flex-col items-center md:items-end justify-around md:w-1/2 md:mr-5">

                            <span className="p-float-label my-3 md:my-0">
                                <InputText id="subject" ref={subject} className="p-inputtext-sm p-d-block p-mb-2" />
                                <label htmlFor="subject">Asunto</label>
                            </span>

                            <span className="p-float-label my-3 md:my-0">
                                <InputText id="email" ref={email} className="p-inputtext-sm p-d-block p-mb-2" />
                                <label htmlFor="email">Tu correo</label>
                            </span>

                            <span className="p-float-label my-3 md:my-0">
                                <InputText id="name" ref={name} className="p-inputtext-sm p-d-block p-mb-2" />
                                <label htmlFor="name">Tu nombre</label>
                            </span>

                            <span className="p-float-label my-3 md:my-0">
                                <InputText id="company" ref={name} className="p-inputtext-sm p-d-block p-mb-2" />
                                <label htmlFor="company">Empresa (Opcional)</label>
                            </span>
                        </div>

                        <div className="w-full h-full">
                            <div className="flex flex-col items-center md:items-start w-full pl-5">
                                <label className="text-lg font-bold mt-3">Escribeme un mensaje: </label>
                                <InputTextarea ref={message} rows={10} className="w-3/4" />
                            </div>
                        </div>

                    </form>

                    <div className="flex justify-center w-full h-full mt-10 mb-10">
                        <GeneralButton text={"Enviar"} />
                    </div>
                </div>

            </BackDiv>
        </>
    )
}

export default Contact