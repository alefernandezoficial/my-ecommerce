import React from 'react';
import '../styles/Header.css';

import Imgbk from "../assets/images/img-bk.jpg";
import Imgbk2 from "../assets/images/img-bk2.jpg";
import Imgbk3 from "../assets/images/img-bk3.jpg";

function Header() {
    return (
        <header>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Imgbk} className="d-block w-100" alt="img-bk" />
                        <h3>Accesorios Gaming</h3>
                        <h2><span className="badge rounded-pill text-bg-danger">¡Las mejores marcas!</span></h2>
                        <p><i className="bi bi-headset"></i> - <i className="bi bi-mouse2"></i> - <i className="bi bi-display"></i></p>
                    </div>
                    <div className="carousel-item">
                        <img src={Imgbk2} className="d-block w-100" alt="img-bk2" />
                        <h3>Lo mejor calidad precio</h3>
                        <h2><span className="badge rounded-pill text-bg-danger">¡Al mejor precio lista!</span></h2>
                        <p><i className="bi bi-headset"></i> - <i className="bi bi-mouse2"></i> - <i className="bi bi-display"></i></p>
                    </div>
                    <div className="carousel-item">
                        <img src={Imgbk3} className="d-block w-100" alt="img-bk3" />
                        <h3>Indumentarias Gaming</h3>
                        <h2><span className="badge rounded-pill text-bg-danger">¡Tus prendas favoritas!</span></h2>
                        <p><i className="bi bi-person-heart"></i> - <i className="bi bi-bag-heart-fill"></i> - <i className="bi bi-shop"></i></p>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </header>
    )
}

export default Header
