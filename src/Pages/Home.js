import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Header from '../Components/Header'
import GeneralButton from '../Components/GeneralButton'

import Me from '../Resources/Imagenes/me.jpeg'
import Moon from '../Resources/Imagenes/moon.jpg'

const BackDiv = styled.div`
    background: url(${Moon});
    background-size: cover;
`

const Home = () => {
    const history = useHistory()

    function ContactOnClick(e) {
        e.preventDefault()
        history.push('/contact')
    }

    return(
        <>
            <BackDiv className="w-full md:h-screen">
                <Header />
                <div className="flex flex-col md:flex-row w-full h-full pt-20">
                    <div className="flex justify-center w-full md:w-1/4 h-full overflow-hidden">
                        <img src={Me} className="w-2/4 md:w-3/4 rounded-full md:ml-20 mt-10 ring-2 ring-blue-600" alt=""/>
                    </div>
                    <div className="flex w-full md:w-3/4 flex-col mt-32">
                        <div className="text-white">
                            <h1 className="text-center md:text-5xl font-bold">¡Hola!, soy Javier Beltrán.</h1>
                            <h2 className="text-center md:text-2xl pt-5">Desarrollador web y desarrollador Full Stack.</h2>
                        </div>

                        <div className="flex flex-col md:flex-row w-full justify-center items-center mt-10">
                            <div className="my-5 md:mx-5">
                                <GeneralButton text={'Portafolio'} />
                            </div>
                            <div  onClick={ContactOnClick} className="my-5 md:mx-5">
                                <GeneralButton text={'Hablemos'} />
                            </div>
                        </div>
                    </div>
                </div>
            </BackDiv>
        </>
    )
}

export default Home