import React from 'react';
import { Paper } from '@material-ui/core';
import ContentWithImage from './ContentWithImage';

interface Props {
  Text: string;
  Description: string;
  Image: { position: string; address: string } | undefined;
  Button: { name: string; slug: string } | undefined;
}

const Section: React.FC<Props> = ({ Text, Description, Image, Button }) => {
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
      {Image?.position === 'right' && (
        <ContentWithImage
          Text={Text}
          Description={Description}
          ImagePosition={Image.position}
          Button={Button}
        />
      )}

      <Paper
        className={`${Image?.position}`}
        style={{
          height: 300,
          width: 300,
        }}
        square
      >
        <img src={Image?.address} alt="" />
      </Paper>
      {Image?.position === 'left' && (
        <ContentWithImage
          Text={Text}
          Description={Description}
          ImagePosition={Image.position}
          Button={Button}
        />
      )}
    </Paper>
  );
};

export default Section;
