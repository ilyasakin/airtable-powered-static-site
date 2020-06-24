import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { navigate } from 'gatsby';
import './App.scss';

const ContentWithImage = ({ Text, Description, ImagePosition, Btn, BtnText, BtnNav }) => {
  return (
    <div
      className={ImagePosition === 'right' ? 'p-right' : ImagePosition === 'left' ? 'p-left' : ''}
    >
      <Typography variant="h3" gutterBottom>
        {Text}
      </Typography>
      <Typography variant="body1">{Description}</Typography>
      {Btn && (
        <Button variant="contained" color="primary" onClick={() => navigate(BtnNav)}>
          {BtnText}
        </Button>
      )}
    </div>
  );
};

export default ContentWithImage;
