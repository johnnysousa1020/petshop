import "./Footer.css"

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-col">
                    <h3>PetCare</h3>
                    <p>
                        Cuidando do seu pet com amor, carinho e
                        profissionalismo
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Planos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contato</h4>
                    <p>📍 São Paulo</p>
                    <p>📞 (11) 99999-9999</p>
                    <p>📧 contato@petshop.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>{new Date().getFullYear()} PetCare - Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;