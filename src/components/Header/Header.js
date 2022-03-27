import * as React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import { Navigate } from './Navigate';

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header = (props) => (
  <>
    <CssBaseline />

    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>
          <Navigate />
        </Toolbar>
      </AppBar>
    </HideOnScroll>

    <Toolbar />
  </>
);

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
