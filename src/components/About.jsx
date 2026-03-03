import "./About.css"
import sobre from "../assets/sobre.jpg"

function About(){
    return(
        <section className="about" id="sobre">
            <div className="about-container">

                <div className="about-image">
                    <img src={sobre} alt="Equipe cuidando de pet" />
                </div>

                <div className="about-content">
                    <h2>Sobre Nós</h2>
                    <p>
                        Somos apaixonados por pets e dedicamos a oferecer
                        o melhor cuidando
                        para garantir saúde, bem-estar e felicidade ao seu
                        melhor amigo.
                    </p>
                    <p>
                        Nossa equipe é formada por profissionais experientes,
                        prontos para
                        atender com carinho, responsabilidade e excelência.
                    </p>

                    <div className="abou-stats">
                        <div>
                            <h3>+500</h3>
                            <span>Pets Atendidos</span>
                        </div>

                        <div>
                            <h3>5⭐</h3>
                            <span>Avaliação Média</span>
                        </div>

                        <div>
                            <h3>24h</h3>
                            <span>Suporte</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;