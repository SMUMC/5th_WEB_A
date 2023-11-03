import ReactDOM from 'react-dom';

const ModalPortal = ({ children }) => {
    if (typeof window === 'undefined') {
        return null;
    }

    const node = document.getElementById('modal-root');
    return ReactDOM.createPortal(children, node);
};

export default ModalPortal;
