const GeneralButton = ({ text }) => {
    return(
        <>
            <button className="text-white text-xl w-32 p-1 rounded-full ring-2 ring-blue-600 hover:bg-white hover:text-black duration-500">{text}</button>
        </>
    )
}

export default GeneralButton