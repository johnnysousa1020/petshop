import "./Services.css"

function Services(){
    return(
        <section className="services" id="servicos">
            <div className="services-container">

                <div className="services-header">
                    <h2>Nossos Serviços</h2>
                    <p>
                        Oferecemos cuidado completo para garantir
                        saúde, bem-estar e felicidade ao seu Pet.
                    </p>
                </div>

                <div className="services-cards">

                    <div className="service-card">
                        <div className="icon">🛁</div>
                        <h3>Banho & Tosa</h3>
                        <p>
                            Higiene completa com produtos de alta
                            qualidade e profissionais especializados.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="icon">🐶</div>
                        <h3>Consultas Veterinarias</h3>
                        <p>
                            Atendimento cuidadoso para manter a saúde
                            do seu melhor amigo sempre em dia.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="icon">🛍️</div>
                        <h3>Loja Pet</h3>
                        <p>
                            Rações, brinquedos e acessórios premium para
                            todas as fases da vida do seu pet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;