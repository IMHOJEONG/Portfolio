import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 2019, text: 'OpenHack Hackerthon 대상'},
  { number: 2020, text: 'CCCR Cloud Project 장려상', },
  { number: 2021, text: 'SSAFY 공통프로젝트 우수상', },
  { number: 2021, text: 'SSAFY 특화프로젝트 우수상', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
