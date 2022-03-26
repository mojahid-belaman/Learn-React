function Modal(props) {

    function cancelModal() {
        props.onCancel();
    }

    function confirmModal() {
        props.onConfirm();
    }

    return (
        <div className="modal">
            <p>Are You Sure ?</p>
            <button className="cancel" onClick={cancelModal}>Cancel</button>
            <button className="delete" onClick={confirmModal}>Delete</button>
        </div>
    );
}

export default Modal;