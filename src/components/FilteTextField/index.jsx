import * as React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

FilterTextField.propTypes = {
    handleFilterProduct: PropTypes.func
}

export default function FilterTextField(props) {
    const { handleFilterProduct } = props;
    return (
        <TextField
            onChange={(e) => handleFilterProduct(e.target.value)}
            style={{
                id:"filtered-textField",
                marginLeft: 10,
                marginTop: 2,
                minWidth: 210
            }}
            placeholder='Pesquisar por descrição'
            variant="standard"
            InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
            }}>
        </TextField>
    )
}