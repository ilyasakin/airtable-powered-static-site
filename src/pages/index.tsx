import React from 'react';
import SEO from '../components/Seo';
import Section from '../components/Section';
import Hero from '../components/Hero';
import '../components/layout.scss';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const data: Record<string, any> = useStaticQuery(graphql`
    {
      allAirtable {
        edges {
          node {
            data {
              Button
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

  const sections: Record<string, any> = data.allAirtable.edges;

  return (
    <Layout>
      <SEO title="Home" description="AirTable powered static site" lang="en" meta={[]} />
      {sections.map(
        (section: {
          node: {
            data: {
              Type: string;
              Text: string;
              Description: string;
              ImagePosition: string;
              ImgAddr: string;
              Button: string;
            };
          };
        }) => {
          const { Type, Text, Description, ImagePosition, ImgAddr, Button } = section.node.data;
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
                  Button={JSON.parse(Button)}
                />
              );
            default:
              return null;
          }
        },
      )}
    </Layout>
  );
};

export default IndexPage;
