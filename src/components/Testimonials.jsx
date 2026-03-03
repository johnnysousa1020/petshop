import "./Testimonials.css"

function Testimonials(){
    return(
        <section className="depoimentos">
            <h2 className="titulo-depoimentos">
                O que nossos clientes dizem
            </h2>
            <p className="subtitulo-depoimentos">
                Amor e cuidado que fazem a diferença 🐾
            </p>

            <div className="cards-depoimentos">

                <div className="card-depoimento">
                    <p>
                        "Meu cachorro voltou feliz e super cheiroso!
                        Atendimento incrível"
                    </p>
                    <h4>- Mariana Silva</h4>
                </div>

                <div className="card-depoimento destaques">
                    <p>
                        "Equipe muito atenciosa e profissional.
                        Recomendo demais!"
                    </p>
                    <h4>- Carlos Oliveira</h4>
                </div>

                <div className="card-depoimento">
                    <p>
                        "Ambiente limpo e organizado. Meu pet foi muito
                        bem cuidado."
                    </p>
                    <h4>- Fernanda Souza</h4>
                </div>
            </div>

        </section>
    )
}

export default Testimonials;