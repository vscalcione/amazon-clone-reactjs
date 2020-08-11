import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, InputBase } from '@material-ui/core';
import './CartAppBar.css';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCartTwoTone';

export default function CartAppBar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6"> Shopping Cart </Typography>
                    <div className="appbar__search">
                        <div className="search_icon">
                            <SearchIcon className="search_icon" />
                        </div>
                        <InputBase placeholder="Search..." inputProps={{ 'aria-label': 'search' }} className="search_input" />
                    </div>
                    <Button color="inherit">
                        <ShoppingCart />
                    </Button>
                </Toolbar>
            </AppBar>
            <AppBar position="static"> Test </AppBar>
        </>
    );
}
