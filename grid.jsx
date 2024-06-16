import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import * as XLSX from 'xlsx';
import Nav from './nav';
import './grid.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const tabOptions = [
    {
        id: 'option1',
        label: 'Option 1',
        data: [
            { role: 'app-EmailRepublisher', accountName: 'Sample1 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no', abcd: 'abcd', defg: 'defg' },
            { role: 'app-EmailRepublisher', accountName: 'Sample1 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-ReadOnly', accountName: 'Sample2 (Staging)', awsAccount: '1234-5678-9102', action: 'no', pending: 'no',abcd:'abcd',defg:'defg'},
            { role: 'core-AccountAdmin', accountName: 'Sample3 (Staging)', awsAccount: '1234-5678-9103', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-EmailRepublisher', accountName: 'Sample1 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no', abcd: 'abcd', defg: 'defg' },
            { role: 'app-EmailRepublisher', accountName: 'Sample1 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-ReadOnly', accountName: 'Sample2 (Staging)', awsAccount: '1234-5678-9102', action: 'no', pending: 'no',abcd:'abcd',defg:'defg'},
            { role: 'core-AccountAdmin', accountName: 'Sample3 (Staging)', awsAccount: '1234-5678-9103', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-EmailRepublisher', accountName: 'Sample1 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no', abcd: 'abcd', defg: 'defg' },
            { role: 'app-EmailRepublisher', accountName: 'Sample1 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-ReadOnly', accountName: 'Sample2 (Staging)', awsAccount: '1234-5678-9102', action: 'no', pending: 'no',abcd:'abcd',defg:'defg'},
            { role: 'core-AccountAdmin', accountName: 'Sample3 (Staging)', awsAccount: '1234-5678-9103', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-EmailRepublisher', accountName: 'Sample1 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no', abcd: 'abcd', defg: 'defg' },
            { role: 'app-EmailRepublisher', accountName: 'Sample1 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-ReadOnly', accountName: 'Sample2 (Staging)', awsAccount: '1234-5678-9102', action: 'no', pending: 'no',abcd:'abcd',defg:'defg'},
            { role: 'core-AccountAdmin', accountName: 'Sample3 (Staging)', awsAccount: '1234-5678-9103', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-EmailRepublisher', accountName: 'Sample1 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no', abcd: 'abcd', defg: 'defg' },
            { role: 'app-EmailRepublisher', accountName: 'Sample1 (Staging)', awsAccount: '1234-5678-9101', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            { role: 'app-ReadOnly', accountName: 'Sample2 (Staging)', awsAccount: '1234-5678-9102', action: 'no', pending: 'no',abcd:'abcd',defg:'defg'},
            { role: 'core-AccountAdmin', accountName: 'Sample3 (Staging)', awsAccount: '1234-5678-9103', action: 'no', pending: 'no' ,abcd:'abcd',defg:'defg'},
            // ... other data entries
        ]
    },
    {
        id: 'option2',
        label: 'Option 2',
        data: [
            { role: 'app-User', accountName: 'Sample4 (Staging)', awsAccount: '1234-5678-9104', action: 'no', pending: 'no', abcd: 'abcd', defg: 'defg' },
            // ... other data entries
        ]
    },
    // ... other tab options
];

const headers = ['role', 'accountName', 'awsAccount', 'action', 'pending', 'abcd', 'defg', 'xyz', 'nab'];

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
    const currentTabData = tabOptions.find(tab => tab.id === activeTab)?.data || [];
    const totalPages = Math.ceil(currentTabData.length / pageSize);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const pageSize1 = 5; // Number of tabs to show per page
    const [currentPage1, setCurrentPage1] = useState(0);

    const totalTabs = tabOptions.length;
    const totalPages1 = Math.ceil(totalTabs / pageSize1);

    const handleNextPage = () => {
        setCurrentPage1((prevPage) => Math.min(prevPage + 1, totalPages1 - 1));
    };

    const handlePrevPage = () => {
        setCurrentPage1((prevPage) => Math.max(prevPage - 1, 0));
    };

    const visibleTabs = tabOptions.slice(
        currentPage1 * pageSize1,
        currentPage1 * pageSize1 + pageSize1
    );

    const renderPaginationButtons = () => {
        const paginationButtons = [];

        if (totalPages <= 10) {
            for (let i = 1; i <= totalPages; i++) {
                paginationButtons.push(
                    <Button
                        key={i}
                        variant="contained"
                        onClick={() => handlePageChange(i)}
                        disabled={currentPage === i}
                    >
                        {i}
                    </Button>
                );
            }
        } else {
            paginationButtons.push(
                <Button
                    key={1}
                    variant="contained"
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                >
                    1
                </Button>
            );

            if (currentPage > 3) {
                paginationButtons.push(<span key="start-ellipsis">...</span>);
            }

            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            for (let i = startPage; i <= endPage; i++) {
                paginationButtons.push(
                    <Button
                        key={i}
                        variant="contained"
                        onClick={() => handlePageChange(i)}
                        disabled={currentPage === i}
                    >
                        {i}
                    </Button>
                );
            }

            if (currentPage < totalPages - 2) {
                paginationButtons.push(<span key="end-ellipsis">...</span>);
            }

            paginationButtons.push(
                <Button
                    key={totalPages}
                    variant="contained"
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    {totalPages}
                </Button>
            );
        }

        return paginationButtons;
    };

    return (
        <>
            <Nav />
            <div className="grid">
                <div className="nav-tabspanel">
                    <div className="nav-tabs">
                        {currentPage1 > 0 && (
                            <IconButton onClick={handlePrevPage}>
                                <ArrowBackIcon />
                            </IconButton>
                        )}
                        {visibleTabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => handleTabChange(tab.id)}
                            >
                                {tab.label} 
                            </button>
                        ))}
                        {currentPage1 < totalPages1 - 1 && (
                            <IconButton onClick={handleNextPage}>
                                <ArrowForwardIcon />
                            </IconButton>
                        )}
                    </div>
                    <div className="export-buttons">
                        <Button variant="contained" onClick={exportCurrentTab}>Count: {currentTabData.length}</Button>
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
                        {renderPaginationButtons()}
                    </div>
                )}

            </div>
        </>
    );
};

export default CustomGrid;
