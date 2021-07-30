import styled from 'styled-components'

import { useRef } from 'react'

import Header from '../Components/Header'
import GeneralButton from '../Components/GeneralButton'

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
            <BackDiv className="w-full">
                <Header />
                <h1 className="text-white text-center text-xl md:text-5xl font-bold pt-16">¿Estas listo para trabajar con migo?</h1>
                <h2 className="text-white text-center md:text-3xl font-bold pt-5">¡HABLEMOS!</h2>

                <div className="w-full flex flex-col justify-center items-center mt-5">
                    <form className="flex flex-col md:flex-row w-full text-white">
                        <div className="flex flex-col md:items-end justify-center w-full mr-5">

                            <div className="flex flex-row justify-end w-5/6 md:w-3/4">
                                <label className="md:text-lg font-bold mt-3 ml-5">Asunto:</label>
                                <input ref={subject} type="text" className="my-3 ml-2 w-2/3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>

                            <div className="flex flex-row justify-end w-5/6 md:w-3/4">
                                <label className="md:text-lg font-bold mt-3 ml-5">Tu correo:</label>
                                <input ref={email} type="text" className="my-3 ml-2 w-2/3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>

                            <div className="flex flex-row justify-end w-5/6 md:w-3/4">
                                <label className="md:text-lg font-bold mt-3 ml-5">Tu nombre:</label>
                                <input ref={name} type="text" className="my-3 ml-2 w-2/3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>

                            <div className="flex flex-row justify-end w-5/6 md:w-3/4">
                                <label className="md:text-lg font-bold mt-3 ml-5">Empresa (opcional): </label>
                                <input ref={brand} type="text" className="my-3 ml-2 w-2/3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>
                        </div>

                        <div className="w-full h-full">
                            <div className="flex flex-col items-center md:items-start w-full pl-5">
                                <label className="text-lg font-bold mt-3">Escribeme un mensaje: </label>
                                <textarea ref={message} type="text" rows="8" className="my-3 w-3/4 border rounded shadow-md text-gray-600 px-2 py-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></textarea>
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