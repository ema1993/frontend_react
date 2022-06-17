import React from "react";
import '../styles/components/pages/ServiciosPage.css';

const ServiciosPage = (props) => {
    return (
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="img/servicios/ferroviario.jpg" alt="Tren" />
            <div className="info">
                <h4>Transporte Ferroviario</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere similique, molestias at officia
                    consequatur error dolor. Laborum beatae natus quaerat rerum aliquid! Consectetur ipsa minus labore
                    sequi assumenda accusamus quis?

                </p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/aereo.jpg" alt="Avion" />
            <div className="info">
                <h4>Transporte Aereo</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere similique, molestias at officia
                    consequatur error dolor. Laborum beatae natus quaerat rerum aliquid! Consectetur ipsa minus labore
                    sequi assumenda accusamus quis?

                </p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/maritimo.jpg" alt="Mar" />
            <div className="info">
                <h4>Transporte Maritimo</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere similique, molestias at officia
                    consequatur error dolor. Laborum beatae natus quaerat rerum aliquid! Consectetur ipsa minus labore
                    sequi assumenda accusamus quis?

                </p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/terrestre.jpg" alt="Terrestre" />
            <div className="info">
                <h4>Transporte Terrestre</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere similique, molestias at officia
                    consequatur error dolor. Laborum beatae natus quaerat rerum aliquid! Consectetur ipsa minus labore
                    sequi assumenda accusamus quis?

                </p>
            </div>
        </div>
    </main>
    );
}

export default ServiciosPage;