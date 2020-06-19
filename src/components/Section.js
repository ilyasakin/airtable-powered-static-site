import React from "react"
import { Typography, Paper, Button } from "@material-ui/core"
import { navigate } from "gatsby"

const Section = ({
  Text,
  Description,
  ImagePosition,
  ImgAddress,
  Btn,
  BtnText,
  BtnNav,
}) => {
  return (
    <Paper
      elevation={5}
      style={{
        height: 400,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      square
    >
      {ImagePosition === "right" && (
        <div style={{ paddingRight: 100 }}>
          <Typography variant="h3" gutterBottom>
            {Text}
          </Typography>
          <Typography variant="body1">{Description}</Typography>
          {Btn && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate({ BtnNav })}
            >
              {BtnText}
            </Button>
          )}
        </div>
      )}

      <Paper
        className={`${ImagePosition}`}
        style={{
          height: 300,
          width: 300,
        }}
        square
      >
        <img src={ImgAddress} />
      </Paper>
      {ImagePosition === "left" && (
        <div style={{ paddingLeft: 100 }}>
          <Typography variant="h3" gutterBottom>
            {Text}
          </Typography>
          <Typography variant="body1">{Description}</Typography>
          {Btn && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate({ BtnNav })}
            >
              {BtnText}
            </Button>
          )}
        </div>
      )}
    </Paper>
  )
}

export default Section
