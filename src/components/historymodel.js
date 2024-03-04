// import React from 'react';
// import { Modal } from 'antd';

// const HistoryModal = ({ showModal, onClose }) => {
//     const handleCancel = () => {
//         onClose(); // Close the modal when Cancel is clicked
//     };

//     return (
//         <Modal
//             title="History Details"
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
//             // Set the modal as a drawer that opens from the right side
//             placement="right"
//             width={400} // Set the width of the drawer as needed
//         >
//             <div>
//                 History details for this credentials will be reflected here.
//             </div>
//         </Modal>
//     );
// }

// export default HistoryModal;



import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
const HistoryModal = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        History
      </Button>
      <Drawer title="History Detials" onClose={onClose} open={open}>
        <p>History details for this credentials will be reflected here.</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default HistoryModal;
