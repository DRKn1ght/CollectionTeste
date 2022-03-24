import React from 'react'
import './styles.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Header() {
  return (
    <header className='Container'>
        <Typography variant="h6" sx={ typoGraphStyle }>
            LOGO 
        </Typography>
        <Button sx={{color: 'white'}} variant="text">
            Produtos
        </Button>
        <Button sx={{color: 'white'}} variant="text">
            Sobre
        </Button>
    </header>
  )
}

const typoGraphStyle = {
  color: 'white',
  mr: 2,
  display: { xs: 'none', md: 'flex'}
}