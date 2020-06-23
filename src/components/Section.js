import React from 'react';
import { Paper } from '@material-ui/core';
import ContentWithImage from './ContentWithImage';

const Section = ({ Text, Description, ImagePosition, ImgAddress, Btn, BtnText, BtnNav }) => {
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
          Btn={Btn}
          BtnText={BtnText}
          BtnNav={BtnNav}
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
          Btn={Btn}
          BtnText={BtnText}
          BtnNav={BtnNav}
        />
      )}
    </Paper>
  );
};

export default Section;
