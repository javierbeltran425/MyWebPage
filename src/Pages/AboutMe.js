import styled from 'styled-components'

import Header from '../Components/Header'

import Me from '../Resources/Imagenes/me.jpeg'
import Moon from '../Resources/Imagenes/moon.jpg'
import Nature from '../Resources/Imagenes/wood.jpg'
import c from '../Resources/Imagenes/c.png'
import cPlus from '../Resources/Imagenes/c++.png'
import cSharp from '../Resources/Imagenes/cSharp.png'
import java from '../Resources/Imagenes/java.png'
import js from '../Resources/Imagenes/js.png'
import sql from '../Resources/Imagenes/sql.png'
import react from '../Resources/Imagenes/react.png'
import sass from '../Resources/Imagenes/sass.png'
import nodejs from '../Resources/Imagenes/nodejs.png'
import bootstrap from '../Resources/Imagenes/bootstrap.png'
import tailwindcss from '../Resources/Imagenes/tailwindcss.svg'
import expressjs from '../Resources/Imagenes/expressjs.png'
import mongodb from '../Resources/Imagenes/MongoDB.png'
import postgre from '../Resources/Imagenes/postgre.png'
import mysql from '../Resources/Imagenes/MySQL.png'
import oracledb from '../Resources/Imagenes/oracledb.svg'

const BackDiv = styled.div`
    background: url(${Moon});
    background-size: cover;
    background-attachment: fixed;
`

const BackDivNature = styled.div`
    background: url(${Nature});
    background-size: cover;
    background-attachment: fixed;
`

const AboutMe = () => {
    return(
        <>
            <Header />
            <BackDiv className="w-full md:h-screen">
                <div className="flex flex-col md:flex-row w-full h-auto pt-20">
                    <div className="flex justify-center w-full h-full md:w-1/4 overflow-hidden">
                        <img src={Me} className="w-2/4 md:w-3/4 rounded-full md:ml-20 mt-10 ring-2 ring-blue-600" alt=""/>
                    </div>
                    <div className="flex w-full h-full md:w-3/4 flex-col mt-20 overflow-y-auto">
                        <div className="text-white ml-10 md:ml-20 mr-5">
                            <h1 className="md:text-2xl">¿Quién soy?</h1>
                            <h2 className="text-xl md:text-5xl font-bold">¡HOLA!</h2>
                            <p className="mt-4 font-bold pb-5">
                                Mi nombre es Javier Beltrán. <br/><br/>
                                Soy estudiante de ingenieria informática en mi penúltimo año de carrera. <br/><br/>

                                Desarrollador Full Stack y mi especialidad es el desarrollo web con React, soy muy apasionado y 
                                dedicado a mi trabajo. He dedicado mucho tiempo a la investigación y la práctica para poder adquirir 
                                las habilidades necesarias para realizar desarrollos de cálidad.
                            </p>
                        </div>
                    </div>
                </div>
            </BackDiv>

            <BackDivNature className="w-full md:h-screen">
                <h1 className="text-white pt-10 md:pt-24 px-10 font-extrabold text-xl">LENGUAJES DE PROGRAMACIÓN Y FRAMEWORKS</h1>
                <div className="flex flex-row flex-wrap w-full items-center justify-center">
                    <img src={c} alt="c logo" className="w-18 h-20 mx-10 my-5 md:my-0" />
                    <img src={cPlus} alt="c++ logo" className="w-18 h-20 mx-10 my-5 md:my-0" />
                    <img src={cSharp} alt="c# logo" className="w-18 h-20 mx-10 my-5 md:my-0" />
                    <img src={java} alt="c# logo" className="w-24 h-24 mx-10 my-5 md:my-0" />
                    <img src={js} alt="js logo" className="w-28 h-24 mx-5 md:mx-10 my-5 md:my-0" />
                    <img src={sql} alt="sql logo" className="w-24 h-24 mx-10 my-5 md:my-0" />
                    <div className="flex flex-col my-5 md:my-0">
                        <h3 className="text-white text-center text-xl font-bold p-2">React</h3>
                        <img src={react} alt="react logo" className="w-24 h-auto mx-10 animate-spin-slow" />
                    </div>
                    <img src={sass} alt="sass logo" className="w-24 h-20 mx-10 my-5 md:my-0" />
                    <img src={nodejs} alt="nodejs logo" className="w-20 h-24 mx-10 my-5 md:my-0" />
                    <img src={bootstrap} alt="bootstrap logo" className="w-32 mx-5 md:mx-10 my-5 md:my-0" />
                    <div className="flex flex-row items-center my-5 md:my-0">
                        <img src={tailwindcss} alt="tailwindcss logo" className="w-20 h-auto mr-5" />
                        <h3 className="text-white text-center text-3xl font-bold">Taildwindcss</h3>
                    </div>
                    <img src={expressjs} alt="bootstrap logo" className="w-52 mx-10 my-5 md:my-0" />
                </div>
                <h1 className="text-white pt-10 pl-10 font-extrabold text-xl">BASES DE DATOS</h1>
                <div className="flex flex-row flex-wrap w-full items-center justify-center mt-5">
                    <div className="flex flex-row items-center my-5 md:my-0 mx-5 mt-5">
                        <img src={mongodb} alt="mongodb logo" className="w-20 h-auto" />
                        <h3 className="text-white text-center text-3xl font-bold">MongoDB</h3>
                    </div>
                    <div className="flex flex-row items-center my-5 md:my-0 mx-5 mt-5">
                        <img src={postgre} alt="postgre logo" className="w-20 h-auto" />
                        <h3 className="text-white text-center text-3xl font-bold px-3">PostgreSQL</h3>
                    </div>
                    <img src={mysql} alt="mysql logo" className="w-32 h-24 my-5 md:my-0 mx-10" />
                    <img src={oracledb} alt="oracledb logo" className="w-48 mx-10 my-5 md:my-0 rounded-md" />
                </div>
            </BackDivNature>
        </>
    )
}

export default AboutMe