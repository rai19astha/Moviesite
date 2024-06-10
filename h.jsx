import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Checkbox} from '@mui/material';

import './Barclays.css'; // Import your CSS file here

const Barclays = () => {
    const [inputValue, setInputValue] = useState('');
    const [showTable, setShowTable] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      
    };
    
    const handlebtn1 =()=>{
        setShowTable(true);
        setBtnClicked(true);
    };
    const myOptions = ['One', 'Two', 'Three', 'Four', 'Five']; 
    const data = ['One', 'Two', 'Three', 'Four', 'Five']; 
  return (
   <>    
   <nav className="navbar">
       <div>
        <h1>THOR</h1>
      </div>
      <div className="nav-links">
        <span><a href="#home">Home</a></span>
        <span><a href="#about">About</a></span>
        <span><a href="#contact">Contact</a></span>
      </div>
    </nav>
    <div className="placeholder">
        <form >
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Request Number"
            />
        </form>
    </div>    
    <div className='dropdown'>
        <Autocomplete
          autoSelect
          options={myOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="ESMP"
              sx={{
                '& .MuiInputBase-root': {
                  fontSize: 'medium', // Change the font size of the input
                  padding: '5px',   // Change the padding of the input
                  color: '#FFF'
                },
                '& .MuiFormLabel-root': {
                  fontSize: 'medium',  // Change the font size of the label
                  color: '#FFF',               
                },
                '& .MuiSvgIcon-root': {
                  color: '#FFF' // Change the color of the triangular button
                }
              }}
            />
          )}
          componentsProps={{
            paper: {
              sx: {
                backgroundColor: '#151E28', // Change the background of the dropdown menu
                color: '#FFF', // Change the font color of the dropdown menu
                maxHeight: '150px', // Set the max height of the dropdown menu
                overflow: 'auto', // Make the dropdown menu scrollable
                '&::-webkit-scrollbar': {
                  display: 'none' // Hide the scrollbar for WebKit browsers
                },
                scrollbarWidth: 'none' // Hide the scrollbar for Firefox
              }
            }
          }}

        />
      </div>
      <button type="submit" className={`btn1 ${btnClicked ? 'btn1afterclick' : ''}`} onClick={handlebtn1}>GET DATA IN FORM</button>
      {showTable && data && (
       <TableContainer className="table-container">
       <Table>
           <TableHead>
               <TableRow>
                   <TableCell className='tablecell'>Select</TableCell>
                   <TableCell className='tablecell'>Data</TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
               {data.map((item, index) => (
                   <TableRow key={index}>
                       <TableCell className="select-cell">
                           <Checkbox />
                       </TableCell>
                       <TableCell className="data-cell">{item}</TableCell>
                   </TableRow>
               ))}
           </TableBody>
       </Table>
   </TableContainer>
      )}
   </>
  );
}

export default Barclays;


