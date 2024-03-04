// import React, { useState } from 'react';
// import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
// import 'ag-grid-enterprise';
// import "ag-grid-enterprise/styles/ag-grid.css"; // Mandatory CSS required by the grid
// import "ag-grid-enterprise/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
// import AlertModal from './alert'; // Assuming AlertModal component is in './AlertModal'

// const CustomActionCellRenderer = (props) => {
//     const { rowData } = props;
//     const [showModal, setShowModal] = useState(false); // State to control modal visibility

//     // Define click handler for the RUN button
//     const handleRunClick = () => {
//         console.log("RUN button clicked", rowData);
//         setShowModal(true); // Open the modal
//     };

//     const handleLogsClick = () => {
//         console.log("LOGS button clicked", rowData);
//     };

//     const handleHistoryClick = () => {
//         console.log("History button clicked", rowData);
//     };
    

//     return (
//         <div className='container' style={{ paddingRight: '0.5rem' }}>
//             <button type="button" className="btn btn-primary" style={{ marginRight: '0.5rem' }} id="liveAlertBtn" onClick={handleRunClick}>RUN</button>
//             <button type="button" className="btn btn-info" style={{ marginRight: '0.5rem' }} onClick={handleLogsClick}>LOGS</button>
//             <button type="button" className="btn btn-info" style={{ marginRight: '0.5rem' }} onClick={handleHistoryClick}>History</button>
            
//             {/* Render the modal component */}
//             <AlertModal showModal={showModal} onClose={() => setShowModal(false)} />
//         </div>
//     );
// };

// export default CustomActionCellRenderer;







import React, { useState } from 'react';
import AlertModal from './alert'; // Assuming AlertModal component is in './AlertModal'
import LogsModal from './logsmodel'; // Assuming LogsModal component is in './LogsModal'
import HistoryModal from './historymodel'; // Assuming HistoryModal component is in './HistoryModal'

const CustomActionCellRenderer = (props) => {
    const { rowData } = props;

    const [showRunModal, setShowRunModal] = useState(false);
    const [showLogsModal, setShowLogsModal] = useState(false);
    const [showHistoryModal, setShowHistoryModal] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState();

    const handleRunClick = () => {
        console.log("RUN button clicked", rowData);
        setShowRunModal(true);
        setIsButtonDisabled(true); 
    };
    const handleModalClose = () => {
      setShowRunModal(false);
      setIsButtonDisabled(false); // Enable the button when the modal is closed
  };

    const handleLogsClick = () => {
        console.log("LOGS button clicked", rowData);
        setShowLogsModal(true);
    };

    const handleHistoryClick = () => {
        console.log("History button clicked", rowData);
        setShowHistoryModal(true);
    };

    return (
        <div className='container' style={{ paddingRight: '0.5rem' }}>
            <button type="button" className="btn btn-primary" style={{ marginRight: '0.5rem' }} disabled={isButtonDisabled}  onClick={handleRunClick}>RUN</button>
            <button type="button" className="btn btn-info" style={{ marginRight: '0.5rem' }} onClick={handleLogsClick}>LOGS</button>
            {/* <button type="button" className="btn btn-info" style={{ marginRight: '0.5rem' }} onClick={handleHistoryClick}>History</button> */}
            
            {/* Render the modals */}
            <AlertModal showModal={showRunModal} onClose={handleModalClose} />
            <LogsModal showModal={showLogsModal} onClose={() => setShowLogsModal(false)} />
            <HistoryModal showModal={showHistoryModal} onClose={() => setShowHistoryModal(false)} />
        </div>
    );
};

export default CustomActionCellRenderer;

