import React from 'react';
import { HeroText } from '../../constants/text';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Web Dev Portfolio
      </SectionTitle>
      <SectionText>
        {HeroText}
      </SectionText>
      <Button onClick={()=> window.location="https://feline-ceramic-f5b.notion.site/713560d2389d4bef9d38761d592745e5"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;