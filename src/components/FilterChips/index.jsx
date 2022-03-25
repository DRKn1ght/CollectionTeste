import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Brands from '../../data/brands';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css';
import brands from '../../data/brands';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
    const brandSelected = Brands.map((data) => [{ label: data.label, isSelected: false }]); // Cria uma tupla das marcas com um valor booleano para cada item
    const [isSelected, setSelected] = React.useState(brandSelected)
    // console.log(isSelected.map((data) => data[0].label === "Portobello" ? [{ ...data[0], isSelected: !data[0].isSelected }] : [data[0]]))
    // console.log(Brands.map((data) => [{ ...data, isSelected: false }]))
    // console.log(isSelected);
    const handleChipSelected = (chipToSelect) => () => {
        setSelected(
            isSelected.map((data) => data[0].label === chipToSelect.label //remapeia o array, verificando quando o label que esta sendo iterado é igual ao label que recebeu o click
                ? [{ ...data[0], isSelected: !data[0].isSelected }] // caso for igual, inverte o valor de 'isSelected
                : [data[0]]) // Caso contrário, mantém o mesmo valor.
        )
        console.log(chipToSelect.isSelected);
    }

    return (
        <div className='filter-container'>
            {isSelected.map((data) => {
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