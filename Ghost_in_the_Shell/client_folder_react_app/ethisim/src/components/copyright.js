import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
  return (
    <Typography color="textSecondary" align="center">
      Copyright © Ethisim {new Date().getFullYear()}{'.'}
    </Typography>
  );
}