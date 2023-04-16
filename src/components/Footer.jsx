import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <h3>Empresa</h3>
                        <p>Somos una empresa que se dedica a ofrecer soluciones tecnológicas innovadoras para tus necesidades.</p>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <h3>Contáctanos</h3>
                        <p>Teléfono: +1-123-456-7890</p>
                        <p>Correo electrónico: info@empresa.com</p>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <h3>Síguenos en redes sociales</h3>
                        <ul className="social-media">
                            <li><a href="#"></a>Facebook</li>
                            <li><a href="#"></a>Instagram</li>
                            <li><a href="#"></a>Whatsapp</li>
                            <li><a href="#"></a>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
