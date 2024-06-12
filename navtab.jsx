// Nav.js
import React from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './grid.css';
const Navtab = ({ tabOptions, activeTab, handleTabChange }) => {
    const pageSize = 5; // Number of tabs to show per page
    const [currentPage, setCurrentPage] = React.useState(0);

    const totalTabs = tabOptions.length;
    const totalPages = Math.ceil(totalTabs / pageSize);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const visibleTabs = tabOptions.slice(
        currentPage * pageSize,
        currentPage * pageSize + pageSize
    );

    return (
        <div className="nav-tabs">
            {currentPage > 0 && (
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
                    {tab.label} ({tab.data.length})
                </button>
            ))}
            {currentPage < totalPages - 1 && (
                <IconButton onClick={handleNextPage}>
                    <ArrowForwardIcon />
                </IconButton>
            )}
        </div>
    );
};

export default Navtab;
