import React from 'react'
import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'
import {BrowserRouter as Router, Route, Link, Routes,NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(40,40,228,1) 46%, rgba(224,55,0,1) 100%);'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})
export default function Navbar() {
    const classes = useStyle();
  return (
    <div>
      <AppBar className={classes.header} position="static">
          <Toolbar>
          <NavLink className={classes.tabs} to="/">HOME</NavLink>
          <NavLink className={classes.tabs} to="/all-user">ALL USER</NavLink>
          <NavLink className={classes.tabs} to="/add-user">ADD PEOPLE</NavLink>
          <NavLink className={classes.tabs} to="">PROFILE</NavLink>
          </Toolbar>
      </AppBar>
    </div>
  )
}
