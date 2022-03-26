import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import './styles.css';
import PropTypes from 'prop-types';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

ChipsArray.propTypes = {
    brandList: PropTypes.array
}

export default function ChipsArray(props) {
    const { brandList } = props
    const [brands, setBrands] = React.useState(brandList);
    
    React.useEffect(() => {
        setBrands(brandList);
    }, [brandList])

    const handleChipSelected = (chipToSelect) => () => {
            setBrands(brands.map((data) => data[0].label === chipToSelect.label //remapeia o array, verificando quando o label que esta sendo iterado é igual ao label que recebeu o click
                ? [{ ...data[0], isSelected: !data[0].isSelected }] // caso for igual, inverte o valor de 'isSelected
                : [data[0]]) // Caso contrário, mantém o mesmo valor.
            )}

    return (
        <div className='filter-container'>
            {brands.map((data) => {
                return (
                    <ListItem key={data[0].label}>
                        <Chip
                            label={data[0].label}
                            deleteIcon={data[0].isSelected ? undefined : <DoneIcon />}
                            color={data[0].isSelected ? "success" : undefined}
                            onDelete={handleChipSelected(data[0])}
                        />
                    </ListItem>
                );
            })}
        </div>
    );
}