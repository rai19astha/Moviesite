import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Nav from './nav';
import './grid.css';
import * as XLSX from 'xlsx';
import Navtab from './navtab';

const tabOptions = [
    {
        id: 'option1',
        label: 'Option 1',
        data: [
            { role: 'app-EmailRepublisher', accountName: 'Sample1 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-ReadOnly', accountName: 'Sample2 (Staging)', awsAccount: '1234-5678-9102', action: 'no', pending: 'no',abcd:'abcd',defg:'defg'},
            { role: 'core-AccountAdmin', accountName: 'Sample3 (Staging)', awsAccount: '1234-5678-9103', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-EmailRepublisher', accountName: 'Sample4 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' },
            { role: 'app-ReadOnly', accountName: 'Sample5 (Staging)', awsAccount: '1234-5678-9102', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'core-AccountAdmin', accountName: 'Sample6 (Staging)', awsAccount: '1234-5678-9103', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-EmailRepublisher', accountName: 'Sample7 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no',abcd:'abcd',defg:'defg'},
            { role: 'app-ReadOnly', accountName: 'Sample8 (Staging)', awsAccount: '1234-5678-9102', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'core-AccountAdmin', accountName: 'Sample9 (Staging)', awsAccount: '1234-5678-9103', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'}
        ]
    },
    {
        id: 'option2',
        label: 'Option 2',
        data: [
            { role: 'app-User', accountName: 'Sample4 (Staging)', awsAccount: '1234-5678-9104', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' },
            { role: 'app-Developer', accountName: 'Sample5 (Staging)', awsAccount: '1234-5678-9105', action: 'no', pending: 'no',abcd:'abcd' ,defg:'defg'},
            { role: 'core-Admin', accountName: 'Sample6 (Staging)', awsAccount: '1234-5678-9106', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' }
        ]
    },
    {
        id: 'option3',
        label: 'Option 3',
        data: [
            { role: 'app-User', accountName: 'Sample4 (Staging)', awsAccount: '1234-5678-9104', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' },
            { role: 'app-Developer', accountName: 'Sample5 (Staging)', awsAccount: '1234-5678-9105', action: 'no', pending: 'no',abcd:'abcd' ,defg:'defg'},
            { role: 'core-Admin', accountName: 'Sample6 (Staging)', awsAccount: '1234-5678-9106', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' }
        ]
    },
    {
        id: 'option4',
        label: 'Option 4',
        data: [
            { role: 'app-User', accountName: 'Sample4 (Staging)', awsAccount: '1234-5678-9104', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' },
            { role: 'app-Developer', accountName: 'Sample5 (Staging)', awsAccount: '1234-5678-9105', action: 'no', pending: 'no',abcd:'abcd' ,defg:'defg'},
            { role: 'core-Admin', accountName: 'Sample6 (Staging)', awsAccount: '1234-5678-9106', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' }
        ]
    },
    {
        id: 'option5',
        label: 'Option 5',
        data: [
            { role: 'app-User', accountName: 'Sample4 (Staging)', awsAccount: '1234-5678-9104', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' },
            { role: 'app-Developer', accountName: 'Sample5 (Staging)', awsAccount: '1234-5678-9105', action: 'no', pending: 'no',abcd:'abcd' ,defg:'defg'},
            { role: 'core-Admin', accountName: 'Sample6 (Staging)', awsAccount: '1234-5678-9106', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' }
        ]
    },
    {
        id: 'option6',
        label: 'Option 6',
        data: [
            { role: 'app-User', accountName: 'Sample4 (Staging)', awsAccount: '1234-5678-9104', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' },
            { role: 'app-Developer', accountName: 'Sample5 (Staging)', awsAccount: '1234-5678-9105', action: 'no', pending: 'no',abcd:'abcd' ,defg:'defg'},
            { role: 'core-Admin', accountName: 'Sample6 (Staging)', awsAccount: '1234-5678-9106', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' }
        ]
    },
    {
        id: 'option7',
        label: 'Option 7',
        data: [
            { role: 'app-User', accountName: 'Sample4 (Staging)', awsAccount: '1234-5678-9104', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' },
            { role: 'app-Developer', accountName: 'Sample5 (Staging)', awsAccount: '1234-5678-9105', action: 'no', pending: 'no',abcd:'abcd' ,defg:'defg'},
            { role: 'core-Admin', accountName: 'Sample6 (Staging)', awsAccount: '1234-5678-9106', action: 'no', pending: 'no',abcd:'abcd',defg:'defg' }
        ]
    },
    
];

const headers = ['role', 'accountName', 'awsAccount', 'action', 'pending','abcd','defg','xyz','nab'];

const CustomGrid = () => {
    const [activeTab, setActiveTab] = useState(tabOptions[0].id); // Default to the first tab
    const [currentPage, setCurrentPage] = useState(1);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setCurrentPage(1); // Reset pagination when changing tabs
    };

    const exportToExcel = (data, label) => {
        const fileName = `${label}.xlsx`;
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        return wb;
    };

    const exportCurrentTab = () => {
        const currentTab = tabOptions.find(tab => tab.id === activeTab);
        if (currentTab) {
            const wb = exportToExcel(currentTab.data, currentTab.label);
            XLSX.writeFile(wb, `${currentTab.label}.xlsx`);
        }
    };

    const exportAllTabs = () => {
        const wb = XLSX.utils.book_new();
        tabOptions.forEach(tab => {
            const ws = XLSX.utils.json_to_sheet(tab.data);
            XLSX.utils.book_append_sheet(wb, ws, tab.label);
        });
        XLSX.writeFile(wb, 'all_tabs.xlsx');
    };

    const pageSize = 8;
    const currentTabData = tabOptions.find(tab => tab.id === activeTab)?.data;
    const totalPages = Math.ceil(currentTabData.length / pageSize);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <>
            <Nav />
            <div className="grid">
                <div className="nav-tabspanel">
                <Navtab
                tabOptions={tabOptions}
                activeTab={activeTab}
                handleTabChange={handleTabChange}
            />
                    <div className="export-buttons">
                        <Button variant="contained" onClick={exportCurrentTab}>Export Current Tab to Excel</Button>
                        <Button variant="contained" onClick={exportAllTabs}>Export All Tabs to Excel</Button>
                    </div>
                </div>
                <div className='grid-view'>
                    <div className="header-row">
                        {headers.map((header, index) => (
                            <div key={index} className="header-cell">
                                {header}
                            </div>
                        ))}
                    </div>
                    {currentTabData
                        .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                        .map((item, index) => (
                            <div key={index} className={`data-row ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}>
                                {headers.map((header, idx) => (
                                    <div key={idx} className="data-cell">
                                        {item[header]}
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>

                {totalPages > 1 && (
                    <div className="pagination">
                        <Button
                            variant="contained"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CustomGrid;
