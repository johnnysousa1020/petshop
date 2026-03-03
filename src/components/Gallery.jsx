import pet from "../assets/banho.jpg"
import tosa from "../assets/tosa.jpg"
import clinica from "../assets/clinica.jpg"
import equipe from "../assets/equipe.jpg"
import feliz from "../assets/feliz.jpg"
import interno from "../assets/interno.jpg"
import "./Gallery.css"

function Gallery(){
    return(
        <section className="galeria">
            <h2 className="titulo-galeria">Nossa Galeria</h2>
            <p className="subtitulo-galeria">
                Momentos especiais e cuidados com carinho
            </p>

            <div className="grid-galeria">
                <div className="item-galeria">
                <img src={pet} alt="Pet banho" />
                <div className="overlay">
                    <span>Banho</span>
                </div>
                </div>

                <div className="item-galeria">
                <img src={tosa} alt="Pet tosado" />
                <div className="overlay">
                    <span>Tosa</span>
                </div>
                </div>

                <div className="item-galeria">
                <img src={clinica} alt="Clinica veterinária" />
                <div className="overlay">
                    <span>Clinica veterinária</span>
                </div>
                </div>

                <div className="item-galeria">
                <img src={equipe} alt="Equipe atendendo" />
                <div className="overlay">
                    <span>Equipe</span>
                </div>
                </div>

                <div className="item-galeria">
                <img src={feliz} alt="Pet feliz" />
                <div className="overlay">
                    <span>Pet</span>
                </div>
                </div>

                <div className="item-galeria">
                <img src={interno} alt="Espaço interno" />
                <div className="overlay">
                    <span>Espaço interno</span>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;
