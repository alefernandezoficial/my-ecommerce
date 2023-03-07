import React from 'react'
import '../../styles/pages/Contact.css';

function Contact() {
    return (
        <div className='contact-container-info'>
            <h1>Contacto:</h1>

            <h4><i class="bi bi-instagram"></i> <a href='http://www.instagram.com/sickgamersoficial'>Instagram Oficial</a></h4>
            <p>Podras encontrar informacion sobre las competiciones y encuentros multinaciones e internacionales</p>

            <h4><i class="bi bi-facebook"></i> <a href='http://www.facebook.com/sickgamersoficial'>Facebook Oficial</a></h4>
            <p>Informacion detallada sobre productos y accesorios</p>

            <h4><i class="bi bi-linkedin"></i> <a href='http://www.linkedin.com/sickgamersoficial'>Linkedin Oficial</a></h4>
            <p>Posibilidad de trabajo estable en nuestras instalaciones</p>

            <h4><i class="bi bi-whatsapp"></i> <a href='http://wa.me/sickgamersoficial'>Whatsapp Oficial</a></h4>
            <p>Medio de contacto oficial para consultas de productos y accesorios</p>

            <h1>Email: </h1>
            <i class="bi bi-envelope-at-fill"></i> <a href='mailto:atencionalcliente@sickgamersoficial.com.ar'>Atencion al Cliente</a>
            <hr></hr>
            <i class="bi bi-envelope-at-fill"></i> <a href='mailto:soportetecnico@sickgamersoficial.com.ar'>Soporte Tecnico</a>
            <hr></hr>
            <i class="bi bi-envelope-at-fill"></i> <a href='mailto:administracion@sickgamersoficial.com.ar'>Administracion</a>
        </div>
    )
}

export default Contact
