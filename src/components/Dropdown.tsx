import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import styles from '@/styles/Home.module.css'
import handleSelectChange from '../utils/handle-select-change';

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Options</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={(event) => handleSelectChange(event.target.value as string)}
          >
            <MenuItem value={'/breach'}>Breach</MenuItem>
            <MenuItem value={'/breachedaccount'}>Breached Account</MenuItem>
            <MenuItem value={'/breaches'}>Breaches</MenuItem>
            <MenuItem value={'/pasteaccount'}>Paste Account</MenuItem>
            <MenuItem value={'/pwnedpasswords'}>Pwned Passwords</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default Dropdown;
