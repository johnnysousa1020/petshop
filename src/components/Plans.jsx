import "./Plans.css"

function Plans(){
    return(
        <section className="planos">
            <h2 className="titulos-planos">Nossos Planos</h2>
            <p className="subtitulo-planos">
                Escolha o melhor cuidado para o seu Pet
            </p>

            <div className="cards-planos">

                <div className="card-plano">
                    <h3>Básico</h3>
                    <p className="preco">R$ 49,90</p>
                    <ul>
                        <li>✔️ Banho</li>
                        <li>✔️ Corte de unhas</li>
                        <li>✔️ Limpeza de ouvidos</li>
                    </ul>
                    <button>Contratar</button>
                </div>

                <div className="card-plano destaque">
                    <span className="tag">Mais Popular</span>
                    <h3>Completo</h3>
                    <p className="preco">R$ 89,90</p>
                    <ul>
                        <li>✔️ Banho</li>
                        <li>✔️ Tosa</li>
                        <li>✔️ Hidratação</li>
                        <li>✔️ Perfume especial</li>
                    </ul>
                    <button>Contratar</button>
                </div>

                <div className="card-plano">
                    <h3>Premium</h3>
                    <p className="preco">R$ 149,90</p>
                    <ul>
                        <li>✔️ Banho</li>
                        <li>✔️ Tosa</li>
                        <li>✔️ Hidratação</li>
                        <li>✔️ Consulta veterinária</li>
                    </ul>
                    <button>Contratar</button>
                </div>

            </div>
        </section>
    )
}

export default Plans;