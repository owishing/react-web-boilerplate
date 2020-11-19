import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Select,
} from '@material-ui/core';
import { AccountCircle, BarChart, Star, Settings } from '@material-ui/icons';
import style from './style.scss';

export const Layout = (props) => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const [app, setApp] = useState('TK Planner');
  const [platform, setPlatform] = useState('Android');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={style['layout-container']}>
      <AppBar position="static">
        <Toolbar className={style['tool-bar']}>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={style.drawer}
        variant="permanent"
        classes={{
          paper: style['drawer-paper'],
        }}
        anchor="left"
      >
        <div className={style['drawer-content-container']}>
          <div className={style['menu-title']}>
            <div className={style['site-title']}>APP INSIGHT</div>
            <div>
              <Select
                classes={{ select: style.select, icon: style.icon }}
                value={app}
                onChange={(e) => setApp(e.target.value)}
              >
                <MenuItem value="TK Planner">TK Planner</MenuItem>
                <MenuItem value="TKPro">TKPro</MenuItem>
              </Select>
            </div>
            <div>
              <Select
                classes={{ select: style.select, icon: style.icon }}
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              >
                <MenuItem value="Android">Android</MenuItem>
                <MenuItem value="iOS">iOS</MenuItem>
              </Select>
            </div>
          </div>
          <div
            className={style['menu-item']}
            onClick={() => history.push('report')}
          >
            <BarChart className={style['item-icon']} />
            Reports
          </div>
          <div
            className={style['menu-item']}
            onClick={() => history.push('feedback')}
          >
            <Star className={style['item-icon']} />
            Feedbacks
          </div>
          <div
            className={style['menu-item']}
            onClick={() => history.push('setting')}
          >
            <Settings className={style['item-icon']} />
            Settings
          </div>
        </div>
      </Drawer>
      <main>{props.children}</main>
    </div>
  );
};
