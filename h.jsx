import React, { useState } from 'react';
import {
    Autocomplete,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
} from '@mui/material';
import Nav from './nav';
import './Barclays.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Barclays = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [showTable, setShowTable] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if (selectedOption) {
            setShowTable(true);
        } else {
            setShowTable(false);
        }
    };

    const handleOptionChange = (event, value) => {
        setSelectedOption(value);
        if (inputValue && value) {
            setShowTable(true);
        } else {
            setShowTable(false);
        }
    };

    const myOptions = ['One', 'Two', 'Three', 'Four', 'Five'];

    const data = [
        { sales: '$50,000.00' },
        { sales: '$10,000.00' },
        { sales: '$85,000.00' },
        { sales: '$65,000.00' },
        { sales: '$98,000.00' },
        { sales: '$108,000.00' }
    ];

    return (
        <>
            <Nav />
            <div className="placeholder">
                <form>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Identifier"
                        className="input-field"
                    />
                </form>
            </div>
            <div className="dropdown">
                <Autocomplete
                    autoSelect
                    options={myOptions}
                    onChange={handleOptionChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="ESMP"
                            sx={{
                                '& .MuiInputBase-root': {
                                    fontSize: 'medium',
                                    padding: '5px',
                                    color: '#151E28',
                                },
                                '& .MuiFormLabel-root': {
                                    fontSize: 'medium',
                                    color: '#151E28',
                                },
                                '& .MuiSvgIcon-root': {
                                    color: '#151E28',
                                },
                            }}
                        />
                    )}
                    componentsProps={{
                        paper: {
                            sx: {
                                backgroundColor: '#f9f9f9',
                                color: '#151E28',
                                maxHeight: '150px',
                                overflow: 'auto',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                scrollbarWidth: 'none',
                            },
                        },
                    }}
                />
            </div>
            <div className='tableandbtns'>
                {showTable && (
                    <TableContainer component={Paper} className="table-container">
                        <Table className="table-fill">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="text-left">Select</TableCell>
                                    <TableCell className="text-left">Sales</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => (
                                    <TableRow key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                        <TableCell className="select-cell">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell className="text-left">{item.sales}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                <div className='dateandrecent'>
                    <div className='recentprice'>
                        <Checkbox />
                        <span>Recent Prices</span>
                    </div>
                    
                </div>

            </div>

        </>
    );
};

export default Barclays;
