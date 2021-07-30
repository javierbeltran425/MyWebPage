import styled from 'styled-components'

import Header from '../Components/Header'

import Me from '../Resources/Imagenes/me.jpeg'
import Moon from '../Resources/Imagenes/moon.jpg'
import Nature from '../Resources/Imagenes/wood.jpg'

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

            <BackDivNature className="w-full">
                            <p className="text-white pt-32">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nibh lacinia vestibulum posuere, quam est viverra tortor, at vestibulum eros tortor sit amet quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis malesuada volutpat ante, sit amet volutpat augue bibendum id. Vestibulum et libero porttitor, euismod tellus non, finibus est. Duis aliquam nisi nec nisi eleifend consequat. Etiam urna metus, consequat sed pharetra ac, pellentesque ac nunc. Praesent feugiat pretium mi, vel tincidunt sapien tristique ut. Fusce vitae vulputate enim. In diam nibh, fermentum eget urna non, auctor tempus ex. Curabitur at neque vel orci fermentum dictum. Cras condimentum nunc id sagittis hendrerit. Maecenas accumsan est odio, non semper magna rhoncus vel. Nullam tellus justo, dapibus eget justo in, hendrerit blandit metus.

Vivamus auctor leo id hendrerit euismod. Maecenas eleifend diam eu nibh tincidunt, non eleifend sapien pretium. Proin blandit velit non laoreet posuere. Cras nisi libero, eleifend ut laoreet id, feugiat in dolor. Proin gravida, neque in gravida efficitur, ligula est suscipit urna, eu tristique ipsum mauris at sem. Phasellus nec commodo risus, vitae dapibus augue. Nullam sagittis leo elit, vitae porttitor justo elementum eget. Suspendisse ac ultrices sapien, sit amet feugiat erat. Donec in rhoncus urna, eget faucibus massa. Ut euismod leo mi. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Donec rutrum, velit a aliquam tempus, ex elit dapibus elit, sed ultricies orci metus quis est. Cras nec lorem libero. Ut eget mauris ut lacus vehicula eleifend ac vel turpis. Nunc iaculis tortor augue, quis tincidunt justo fringilla nec. Etiam elementum lacus tellus. Phasellus eu laoreet metus. Aliquam finibus sit amet erat nec ornare. Praesent laoreet feugiat risus sit amet vestibulum. Mauris pellentesque cursus tincidunt. Proin eleifend lectus at eros accumsan sodales. Vestibulum posuere dignissim lacus, non auctor orci suscipit non. Aliquam auctor condimentum ipsum, at feugiat orci blandit et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse et porta dui, et semper nulla. Etiam interdum, mi et convallis malesuada, eros mauris rhoncus lacus, vel pharetra felis turpis non ligula.

Quisque aliquam interdum ligula sed blandit. Aenean non metus velit. Integer ac volutpat ante. Nulla ac magna tortor. Integer iaculis diam non eleifend convallis. Curabitur sit amet ipsum eget turpis placerat porta. Curabitur sit amet mi eu augue aliquet feugiat. Donec vitae pellentesque ipsum, sit amet ultrices nibh. Quisque erat ex, congue vel libero sed, malesuada lobortis nibh. Fusce lobortis sit amet purus nec malesuada. Donec facilisis nisi neque, et sagittis leo finibus sit amet. Fusce velit tellus, hendrerit quis tempus et, vestibulum et libero. Proin eget elit odio.

Aliquam sed ante quis ligula vehicula molestie eu nec tortor. Suspendisse in tincidunt quam. Suspendisse a dui et libero auctor ultrices in sit amet neque. Quisque quis eros facilisis, consectetur tellus quis, mollis magna. Aliquam vitae lobortis urna. Integer felis quam, mattis hendrerit auctor quis, porta eget sem. Aenean lacus massa, eleifend vitae ipsum a, molestie maximus nulla. In sit amet placerat arcu. Proin imperdiet consectetur sem, vitae cursus augue. Nam nec mattis sem. Aenean sed magna quis nulla aliquet egestas sed et elit. Sed non pulvinar ipsum. Sed nec molestie dui, condimentum cursus erat.
                            </p>
            </BackDivNature>
        </>
    )
}

export default AboutMe