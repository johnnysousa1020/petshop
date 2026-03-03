import "./Contact.css"
import { useState, useEffect } from "react";

function Contact(){
    const [enviado, setEviado] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setEviado(true)
    }

    useEffect(() => {
        if(enviado){
            const fecharMensagem = () => setEviado(false)
            document.addEventListener("click", fecharMensagem)

            return () => {
                document.removeEventListener("click", fecharMensagem)
            }
        }
    }, [enviado])

    return(
        <section className="contato" id="contato">
            <h2 className="titulo-contato">Entre em Contato</h2>
            <p className="subtitulo-contato">Estamos prontos para cuidar do seu Pet 🐶</p>

            <div className="container-contato">

                <div className="info-contato">
                    <h3>Informações</h3>
                    <p>📍 São Paulo</p>
                    <p>📞 (11) 99999-9999</p>
                    <p>📧 contato@petshop.com</p>

                    <a className="btn-whatsapp">Falar no WhatsApp</a>
                </div>

                <form className="form-contato" onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Seu nome" required/>

                    <input 
                    type="email" 
                    placeholder="Seu email" required/>

                    <textarea 
                    placeholder="Sua mensagem" 
                    rows="5" required></textarea>

                    <button type="submit">Eviar Mensagem</button>
                </form>

                {enviado && (
                    <p className="success-messagesn">
                        ☑️ Mensagem enviada com sucesso!
                    </p>
                )}
            </div>
        </section>
    )
}

export default Contact;