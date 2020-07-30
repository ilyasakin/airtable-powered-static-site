import React from 'react';
import { Typography, Button as _Button } from '@material-ui/core';
import { navigate } from 'gatsby';
import './App.scss';

interface Props {
  Text: string;
  Description: string;
  ImagePosition: string;
  Button: { name: string; slug: string } | undefined;
}

const ContentWithImage: React.FC<Props> = ({ Text, Description, ImagePosition, Button }) => {
  return (
    <div
      className={ImagePosition === 'right' ? 'p-right' : ImagePosition === 'left' ? 'p-left' : ''}
    >
      <Typography variant="h3" gutterBottom>
        {Text}
      </Typography>
      <Typography variant="body1">{Description}</Typography>
      {Button && (
        <_Button variant="contained" color="primary" onClick={() => navigate(Button.slug)}>
          {Button.name}
        </_Button>
      )}
    </div>
  );
};

export default ContentWithImage;
