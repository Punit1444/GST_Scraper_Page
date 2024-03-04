import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import 'ag-grid-enterprise';
import "ag-grid-enterprise/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-enterprise/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import CustomActionCellRenderer from './Buttons';


const ScraperPage = () => {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        { ClientName: "Tesla",GSTIN: "2AA1234RDFG", ID: "Model Y", Password: 64950, R1: true, '2B': true , '2A': true, IRN: true , Status: "Active" , Lastrun: "04/03/2024"},
        { ClientName: "Tesla",GSTIN: "2AA1234RDFG", ID: "Model Y", Password: 64950, R1: true, '2B': true , '2A': true, IRN: true , Status: "Active", Lastrun: "04/03/2024"},
        { ClientName: "Tesla",GSTIN: "2AA1234RDFG" , ID: "Model Y", Password: 64950, R1: true, '2B': true , '2A': true, IRN: true , Status: "Active", Lastrun: "04/03/2024"},
      ]);
    
    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "ClientName" ,headerName:"Client Name" },
        { field: "GSTIN" },
        { field: "ID" },
        { field: "Password" ,headerName:"PASSWORD"},
        { field: "R1" },
        { field: "2B" },
        { field: "2A" },
        { field: "IRN" },
        { field: "Status" },
        { field: "Lastrun" ,headerName:"Last Run" },
        { 
        field: "Action" ,width :270,
        cellRenderer: (params) => <CustomActionCellRenderer {...params} rowData={params.data} />
        }// Assuming you have a field named "Action" in your data
    ]);

    return (
      // wrapping container with theme & size
    <div>
        <div className="ag-theme-quartz" style={{ height: 1000 }} >
            <h1>Scrapers</h1>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                domLayout={'autoHeight'} // Add this line
                suppressHorizontalScroll={false} // Add this line if necessary
            />
        </div>
    </div>
    );
};

export default ScraperPage;




