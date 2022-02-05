import React from 'react';
import { DiFirebase, DiNodejs, DiReact, DiJava } from 'react-icons/di';
import { FaFigma, FaVuejs } from "react-icons/fa";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Techs</SectionTitle>
    <SectionText>
      ❤️ Web ❤️
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <FaVuejs size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, Vue.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaFigma size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Infra</ListTitle>
          <ListParagraph>
            Docker, Kubernetes
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>

);

export default Technologies;
