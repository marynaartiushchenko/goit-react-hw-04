import Modal from "react-modal";

 Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
    console.log(image); 
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        >
            <button onClick={onRequestClose}>Close</button>
            <img src={image.urls.regular} alt={image.description} /> 
        </Modal>
    );
};

export default ImageModal;