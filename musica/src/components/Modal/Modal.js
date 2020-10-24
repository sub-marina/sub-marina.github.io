import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Modal = (props) => {
    const { header, closeButton, text, actions, closeModal } = props;

    return (
        <div className='modal-wrapper' onClick={closeModal}>
            <div className='modal'>
                <div className='modal-header'>
                    <span>{header}</span>
                    {closeButton && <Button children='&#x2715;' className='btn-close-icon' onClick={() => closeModal} />}
                </div>
                <div className='modal-body'>
                    <p>{text}</p>
                </div>
                <div className='modal-footer'>
                    {actions}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    header: PropTypes.string,
    closeButton: PropTypes.bool.isRequired,
    text: PropTypes.string,
    actions: PropTypes.array,
    closeModal: PropTypes.func.isRequired
}

Modal.defaultProps = {
    header: 'Information',
    text: 'Confirm your action',
    actions: []
}

export default Modal;