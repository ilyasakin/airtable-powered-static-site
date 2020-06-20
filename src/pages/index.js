import React from 'react';
import SEO from '../components/seo';
import Section from '../components/Section';
import Hero from '../components/Hero';
import '../components/layout.css';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable {
        edges {
          node {
            data {
              Button
              ButtonNavigate
              ButtonText
              Description
              ImagePosition
              ImgAddr
              Name
              Text
              Type
            }
          }
        }
      }
    }
  `);

  const sections = data.allAirtable.edges.reverse();

  return (
    <Layout>
      <SEO title="Home" />
      {sections.map((section) => {
        const {
          Type,
          Text,
          Description,
          ImagePosition,
          ImgAddr,
          Button,
          ButtonText,
          ButtonNavigate,
        } = section.node.data;
        if (Type === 'Hero') {
          return <Hero Text={Text} />;
        } else if (Type === 'Content') {
          return (
            <Section
              Text={Text}
              Description={Description}
              ImagePosition={ImagePosition}
              ImgAddress={ImgAddr}
              Btn={Button ? true : false}
              BtnText={Button ? ButtonText : ''}
              BtnNav={Button ? ButtonNavigate : ''}
            />
          );
        }
      })}
    </Layout>
  );
};

export default IndexPage;
