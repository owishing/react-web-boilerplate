import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export const Copyright = (props) => (
  <Typography align="center" color="textSecondary" variant="body2">
    {'Copyright © '}
    <Link color="inherit" href="https://www.theknot.com/">
      The Knot
    </Link>{' '}
    {props.year || new Date().getFullYear()}.
  </Typography>
);

Copyright.propTypes = {
  year: PropTypes.number,
};
