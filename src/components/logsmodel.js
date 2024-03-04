import React from 'react';
import { Modal } from 'antd';

const LogsModal = ({ showModal, onClose }) => {

    const handleCancel = () => {
        onClose(); // Close the modal when Cancel is clicked
    };

    return (
        <Modal
            title="Logs Detail"
            visible={showModal}
            onCancel={handleCancel}
            footer={[
                <button key="cancel" className="btn btn-secondary"style={{ marginRight: '0.5rem' }} onClick={handleCancel}>
                    Cancel
                </button>,
                <button key="ok" className="btn btn-primary"style={{ marginRight: '0.5rem' }} onClick={onClose}>
                    OK
                </button>
            ]}
        >
            Logs for this specific credentials will be reflected here.
        </Modal>
    );
}

export default LogsModal;