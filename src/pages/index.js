import React from 'react';
import SEO from '../components/Seo';
import Section from '../components/Section';
import Hero from '../components/Hero';
import '../components/layout.scss';
import Layout from '../components/Layout';
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
        switch (Type) {
          case 'Hero':
            return <Hero Text={Text} />;
          case 'Content':
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
          default:
            return null;
        }
      })}
    </Layout>
  );
};

export default IndexPage;
