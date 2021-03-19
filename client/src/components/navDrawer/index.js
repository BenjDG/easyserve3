import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

export default function NavDrawer ({ logout }) {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {['Inbox'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}

        <Link component={RouterLink} to='/' color='inherit'>
          <ListItem button>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>
        <Link component={RouterLink} to='/login' color='inherit'>
          <ListItem button>
            <ListItemText primary='Login' />
          </ListItem>
        </Link>
        <Link component={RouterLink} to='/mainmenu' color='inherit'>
          <ListItem button>
            <ListItemText primary='Main Menu' />
          </ListItem>
        </Link>
        <Link component={RouterLink} to='/order' color='inherit'>
          <ListItem button>
            <ListItemText primary='Order' />
          </ListItem>
        </Link>
        <Link component={RouterLink} to='/vieworders' color='inherit'>
          <ListItem button>
            <ListItemText primary='View All Orders' />
          </ListItem>
        </Link>
        <Link component={RouterLink} to='/cookview' color='inherit'>
          <ListItem button>
            <ListItemText primary='Cook View' />
          </ListItem>
        </Link>
        <Link onClick={logout} color='inherit'>
          <ListItem button>
            <ListItemText primary='Logout' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant='contained'><MenuIcon /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
