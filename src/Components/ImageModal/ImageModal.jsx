import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        >
            <button onClick={onRequestClose}>Close</button>
            <img src={imageUrl} alt="Large Image" />
        </Modal>
    );
};

export default ImageModal;