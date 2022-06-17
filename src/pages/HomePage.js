import React from "react";
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="Avion" />

            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam minima veritatis, asperiores debitis minus, quae
                        molestias natus voluptatem culpa est et ab non, enim
                        vero! Iusto provident consectetur iste maiores!
                    </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos minima, qui commodi ab
                        animi vitae id maiores assumenda ducimus eum. Tenetur accusamus tempora dolor repudiandae, expedita
                        reprehenderit rem voluptate.

                    </p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">
                            Simplemente Excelente
                        </span>
                        <span class="autor">
                            Juan Perez - zapatos.com
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;