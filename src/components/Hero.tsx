import React from 'react';
import { Typography, Paper } from '@material-ui/core';

const Hero: React.FC<{ Text: string }> = ({ Text }) => {
  return (
    <Paper
      elevation={2}
      style={{
        height: 500,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      square
    >
      <Typography variant="h4">{Text}</Typography>
    </Paper>
  );
};

export default Hero;
