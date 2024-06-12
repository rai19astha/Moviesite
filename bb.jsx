// Example React component

import React, { useState, useEffect } from 'react';

const YourComponent = () => {
    const [identifierTypes, setIdentifierTypes] = useState([]);
    const [dataSources, setDataSources] = useState([]);
    const [timeSeriesData, setTimeSeriesData] = useState([]);

    useEffect(() => {
        // Fetch identifier types
        fetch('/api/identifierTypes')
            .then(response => response.json())
            .then(data => setIdentifierTypes(data))
            .catch(error => console.error('Error fetching identifier types:', error));
    }, []);

    const handleIdentifierTypeChange = (e) => {
        const selectedIdentifierType = e.target.value;
        // Fetch data sources for the selected identifier type
        fetch(`/api/dataSources/${security}/${selectedIdentifierType}`)
            .then(response => response.json())
            .then(data => setDataSources(data))
            .catch(error => console.error('Error fetching data sources:', error));
    };

    const handleGetTimeSeriesData = () => {
        // Example of POST request with body
        fetch('/api/timeSeriesData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                security: security,
                identifierType: identifierType,
                dataSources: selectedDataSources,
                startDate: startDate,
                endDate: endDate,
                isRecentPriceChecked: isRecentPriceChecked
            }),
        })
        .then(response => response.json())
        .then(data => setTimeSeriesData(data))
        .catch(error => console.error('Error fetching time series data:', error));
    };

    return (
        <div>
            <select onChange={handleIdentifierTypeChange}>
                {identifierTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>
            <button onClick={handleGetTimeSeriesData}>Get Time Series Data</button>
            {/* Display time series data here */}
        </div>
    );
};

export default YourComponent;
