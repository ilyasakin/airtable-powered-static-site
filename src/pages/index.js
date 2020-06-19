import React, { useState, useEffect } from "react"
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core"
import SEO from "../components/seo"
import Airtable from "airtable"
import Section from "../components/Section"
import Hero from "../components/Hero"
import "../components/layout.css"

const base = new Airtable({ apiKey: process.env.AIRTABLE_APIKEY }).base(
  "appjuAYwNl8BiwjoB"
)

const IndexPage = () => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    base("Home")
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records) {
          console.log(records)
          setSections(records)
        },
        function done(err) {
          if (err) {
            console.error(err)
            return
          }
        }
      )
  }, [])

  return (
    <div>
      <SEO title="Home" />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Home</Typography>
        </Toolbar>
      </AppBar>
      {sections.map(section => {
        if (section.fields.Type === "Hero") {
          return <Hero Text={section.fields.Text} />
        } else if (section.fields.Type === "Content") {
          return (
            <Section
              Text={section.fields.Text}
              Description={section.fields.Description}
              ImagePosition={section.fields.ImagePosition}
              ImgAddress={section.fields.ImgAddr}
              Btn={section.fields.Button ? true : false}
              BtnText={section.fields.Button ? section.fields.ButtonText : ""}
              BtnNav={
                section.fields.Button ? section.fields.ButtonNavigate : ""
              }
            />
          )
        }
      })}
    </div>
  )
}

export default IndexPage
