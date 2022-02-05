import React from 'react';

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
        가보지 않은 길을 두려워하지 않는 개발자입니다.
      </SectionText>
      <Button onClick={()=> window.location="https://feline-ceramic-f5b.notion.site/713560d2389d4bef9d38761d592745e5"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;