import "./Hero.css"

function Hero(){
    return(
        <section className="hero" id="inicio">
            <div className="hero-content">
                <h1>
                    Cuidamos do seu Pet com <span>Amor</span>
                </h1>
                <p>
                    Banho, tosa e atendimento especializado para o seu melhor amigo.
                </p>
                <button 
                onClick={() => {document.getElementById("contato").scrollIntoView({ behavior: "smooth"})}}
                >Agendar agora</button>
            </div>
        </section>
    )
}

export default Hero;