import React from 'react';
import { Modal } from 'antd';

const AlertModal = ({ showModal, onClose }) => {

    const handleCancel = () => {
        onClose(); // Close the modal when Cancel is clicked
    };

    return (
        <Modal
            title="Alert"
            visible={showModal}
            onCancel={handleCancel}
            footer={[
                <button key="cancel" className="btn btn-secondary"style={{ marginRight: '0.5rem' }} onClick={handleCancel}>
                    Cancel
                </button>,
                <button key="ok" className="btn btn-primary"style={{ marginRight: '0.5rem' }} onClick={onClose}>
                    Understood
                </button>
            ]}
        >
            Your scraper request has been initiated. Please wait for 60 min.
        </Modal>
    );
}

export default AlertModal;



// import React from 'react';
// import { Modal } from 'antd';

// const CustomModal = ({ showModal, onClose, title, content }) => {
//     const handleCancel = () => {
//         onClose(); // Close the modal when Cancel is clicked
//     };

//     return (
//         <Modal
//             title={title}
//             visible={showModal}
//             onCancel={handleCancel}
//             footer={[
//                 <button key="cancel" className="btn btn-secondary" style={{ marginRight: '0.5rem' }} onClick={handleCancel}>
//                     Cancel
//                 </button>,
//                 <button key="ok" className="btn btn-primary" style={{ marginRight: '0.5rem' }} onClick={onClose}>
//                     OK
//                 </button>
//             ]}
//         >
//             {content}
//         </Modal>
//     );
// };

// export default CustomModal;

