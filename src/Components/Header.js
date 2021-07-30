import { useHistory } from 'react-router-dom'

const Header =() => {
    const history = useHistory()

    /**
     * Navigation section
     */
    function HomeOnClick(e) {
        e.preventDefault()
        history.push('/')
    }

    function AboutMeOnClick(e) {
        e.preventDefault()
        history.push('/aboutme')
    }

    return(
        <div className="fixed md:flex w-full h-auto justify-between font-bold overflow-x-auto">
            <div className="hidden md:flex text-white">
                <h1 onClick={HomeOnClick} className="text-white p-5 hover:text-blue-600 duration-500 cursor-pointer">Javier Beltrán</h1>
            </div>
            <div className="text-white text-center">
                <ul className="flex items-center text-white p-5 flex flex-row">
                    <li onClick={HomeOnClick} className="cursor-pointer hover:bg-white hover:text-black duration-500 px-4 rounded-full">Inicio</li>
                    <li className="cursor-pointer hover:bg-white hover:text-black duration-500 px-4 rounded-full">Portafolio</li>
                    <li onClick={AboutMeOnClick} className="cursor-pointer hover:bg-white hover:text-black duration-500 px-4 rounded-full">Sobre mí</li>
                    <li className="cursor-pointer hover:bg-white hover:text-black duration-500 px-4 rounded-full">Contacto</li>
                </ul>
            </div>
        </div>
    )
}

export default Header