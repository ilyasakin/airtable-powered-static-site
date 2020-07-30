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
              Image
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
        (
          section: {
            node: {
              data: {
                Type: string;
                Text: string;
                Description: string;
                Image: string;
                Button: string;
              };
            };
          },
          index: number,
        ) => {
          const { Type, Text, Description, Image, Button } = section.node.data;
          switch (Type) {
            case 'Hero':
              return <Hero Text={Text} key={`${Type}-${index}`} />;
            case 'Content':
              return (
                <Section
                  Text={Text}
                  Description={Description}
                  Image={JSON.parse(Image)}
                  Button={JSON.parse(Button)}
                  key={`${Type}-${index}`}
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
