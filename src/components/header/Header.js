import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import Buttons from '../button/Buttons';
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Header = ({ changeTheme, setChangeTheme }) => {
  const [drawer, setDrawer] = useState(false);

  const handleToggle = () => {
    setChangeTheme(!changeTheme); // Toggle the state
  };

  const backgroundColor = changeTheme ? 'white' : 'black';
  const textColor = changeTheme ? 'black' : 'white';

  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor }} className="header">
      <div className="leftside">
        <h1 style={{ color: textColor }}>CryptoTracker</h1>
      </div>
      <div className="rightside">
        <Switch {...label} checked={changeTheme} onClick={handleToggle} />
        <Link to="/" style={{ color: textColor }}>
          Home
        </Link>
        <Link to="/compare" style={{ color: textColor }}>
          Compare
        </Link>
        <Buttons btn="Dashboard" onclick={() => navigate('/dashboard')} />
      </div>
      <div className="menu_drawer">
        <Button onClick={() => setDrawer(true)}>
          <MenuIcon />
        </Button>
        <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
          <div style={{ backgroundColor }} className="all_menu">
            <Link to="/" style={{ color: textColor }}>
              Home
            </Link>
            <Link to="/compare" style={{ color: textColor }}>
              Compare
            </Link>
            <Buttons btn="Dashboard" onclick={() => navigate('/dashboard')} />
            <Switch {...label} checked={changeTheme} onClick={handleToggle} />
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
