import "./Header.css"
import { useState } from "react";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <span className="paw">🐾</span>
                    <h1>PetCare</h1>
                </div>

                <nav className={menuOpen ? "nav-links active" : "nav-links"}>
                        <a href="#inicio">Inicio</a>
                        <a href="#servicos">Serviços</a>
                        <a href="#sobre">Sobre</a>
                </nav>

                <button 
                className="btn-agendar"
                onClick={() => {document.getElementById("contato").scrollIntoView({ behavior: "smooth"})}}
                >Agendar</button>

                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            </div>
        </header>
    )
}

export default Header;