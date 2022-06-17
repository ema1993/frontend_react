import React from "react";
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eaque magnam temporibus porro
                    necessitatibus, cumque sunt et ea eos id delectus pariatur provident optio officiis dolores aut ratione
                    laboriosam nesciunt!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero amet tenetur voluptas explicabo nihil
                    eaque aliquid, labore magni quaerat quo veniam adipisci consequatur tempora nemo repellendus minus
                    nulla, optio nisi?

                </p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quaerat animi. Cupiditate
                            beatae doloremque ipsam magni nobis et odio architecto impedit quam consectetur illum quas
                            incidunt itaque, animi consequuntur cumque!

                        </p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros2.jpg" alt="Juan Gomez" />
                        <h5>Diana Reyes</h5>
                        <h6>Gerente Comercial</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quaerat animi. Cupiditate
                            beatae doloremque ipsam magni nobis et odio architecto impedit quam consectetur illum quas
                            incidunt itaque, animi consequuntur cumque!

                        </p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros3.jpg" alt="Juan Gomez" />
                        <h5>Roberto Zaptos</h5>
                        <h6>Gerente de Sistemas</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quaerat animi. Cupiditate
                            beatae doloremque ipsam magni nobis et odio architecto impedit quam consectetur illum quas
                            incidunt itaque, animi consequuntur cumque!

                        </p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros4.jpg" alt="Juan Gomez" />
                        <h5>Sandra Mastropiero</h5>
                        <h6>Gerente de Marketing</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quaerat animi. Cupiditate
                            beatae doloremque ipsam magni nobis et odio architecto impedit quam consectetur illum quas
                            incidunt itaque, animi consequuntur cumque!

                        </p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros5.jpg" alt="Juan Gomez" />
                        <h5>Luciano Figuero</h5>
                        <h6>Gerente Logistica</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quaerat animi. Cupiditate
                            beatae doloremque ipsam magni nobis et odio architecto impedit quam consectetur illum quas
                            incidunt itaque, animi consequuntur cumque!

                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;