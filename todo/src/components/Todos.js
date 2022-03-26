import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Bachdrop";

function Todos(props) {

    const [openModal, setModal] = useState(false);
    
    function deleteHundler() {
        setModal(true);
    }

    function backdropHundler() {
        setModal(false);
    }

    return (
        <div className="card">
            <div className="content">
                <h2>{props.text}</h2>
            </div>
            <div className="btn">
                <button onClick={deleteHundler}>Delete</button>
            </div>
            {openModal ? <Modal onCancel={backdropHundler} onConfirm={backdropHundler}  /> : null}
            {openModal ? <Backdrop onCancel={backdropHundler} /> : null}
        </div> 
    );
}

export default Todos