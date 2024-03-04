// import React, { useState } from 'react';
// import CustomModal from './CustomModal';

// const ParentComponent = () => {
//     const [modal1Visible, setModal1Visible] = useState(false);
//     const [modal2Visible, setModal2Visible] = useState(false);
//     const [modal3Visible, setModal3Visible] = useState(false);

//     const openModal1 = () => {
//         setModal1Visible(true);
//     };

//     const openModal2 = () => {
//         setModal2Visible(true);
//     };

//     const openModal3 = () => {
//         setModal3Visible(true);
//     };

//     return (
//         <div>
//             <button onClick={openModal1}>Open Modal 1</button>
//             <button onClick={openModal2}>Open Modal 2</button>
//             <button onClick={openModal3}>Open Modal 3</button>

//             <CustomModal
//                 showModal={modal1Visible}
//                 onClose={() => setModal1Visible(false)}
//                 title="Alert"
//                 content="Your scraper request has been initiated. Please wait for 60 min."
//             />

//             <CustomModal
//                 showModal={modal2Visible}
//                 onClose={() => setModal2Visible(false)}
//                 title="Logs Detials"
//                 content="All Logs will be displayed here"
//             />

//             <CustomModal
//                 showModal={modal3Visible}
//                 onClose={() => setModal3Visible(false)}
//                 title="History Detials "
//                 content="All History detials will be displayed here"
//             />
//         </div>
//     );
// };

// export default ParentComponent;
