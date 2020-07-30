import React from 'react';
import { Paper } from '@material-ui/core';
import ContentWithImage from './ContentWithImage';

interface Props {
  Text: string;
  Description: string;
  ImagePosition: string;
  ImgAddress: string;
  Button: { name: string; slug: string } | undefined;
}

const Section: React.FC<Props> = ({ Text, Description, ImagePosition, ImgAddress, Button }) => {
  return (
    <Paper
      elevation={5}
      style={{
        height: 400,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      square
    >
      {ImagePosition === 'right' && (
        <ContentWithImage
          Text={Text}
          Description={Description}
          ImagePosition={ImagePosition}
          Button={Button}
        />
      )}

      <Paper
        className={`${ImagePosition}`}
        style={{
          height: 300,
          width: 300,
        }}
        square
      >
        <img src={ImgAddress} alt="" />
      </Paper>
      {ImagePosition === 'left' && (
        <ContentWithImage
          Text={Text}
          Description={Description}
          ImagePosition={ImagePosition}
          Button={Button}
        />
      )}
    </Paper>
  );
};

export default Section;
