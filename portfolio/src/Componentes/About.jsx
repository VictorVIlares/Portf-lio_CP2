import img from "../assets/profile.jpg";

const About = () => {
    return (  
                
            <div id= "About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
                <img data-aos="fade-down" src={img} width={290} height={290} className='rounded border-2 p-1 border-cyan-400 img_glow' alt="imagem" />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-cyan-400 uppercase">Sobre Mim</h1>
                <h1 data-aos="fade-left" className="text-[20px] font-semibold mb-8 leading-normal">Sou uma pessoa dedicada com uma paixão inabalável pela tecnologia e uma capacidade inata de me comunicar efetivamente. Com uma ótima interação interpessoal, sempre construo conexões significativas com colegas de equipe, clientes e parceiros de negócios. Minha habilidade de aprender rapidamente permite-me abordar desafios com uma mentalidade ágil. Estou sempre ansioso para abraçar novos conhecimentos e enfrentar novos desafios. Com uma base em programação, tenho noções básicas que me proporcionam uma compreensão abrangente do ambiente tecnológico.</h1>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <button className="neno-button shadow-x1 hover:shadow-cyan-400 text-white border-2 hover:bg-cyan-400 border-cyan-400 rounded-lg py-4 px-8 uppercase relative overflow-hidden ">Resumir</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;