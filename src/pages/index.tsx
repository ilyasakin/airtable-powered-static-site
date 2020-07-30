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
              Button: boolean;
              ButtonText: string;
              ButtonNavigate: string;
            };
          };
        }) => {
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
        },
      )}
    </Layout>
  );
};

export default IndexPage;
