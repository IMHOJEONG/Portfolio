import Accomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section, ShowingContainer } from '../styles/GlobalComponents';
import { callback } from '../layout/IntersectionObserver';
import React, { useMemo , useEffect } from 'react';

const FactoryShowingContainer = (component, refs) => {

    return (

      <ShowingContainer ref={refs}>
        {component}
      </ShowingContainer>
    
    );

}

const Home = () => {

  
  const refs = 
    useMemo(
      () => 
        new Array(5).
        fill(0).map(i=>React.createRef()), 
      []
  );

  useEffect(()=>{
    
      let observer = new IntersectionObserver(
        callback
        );
        
      refs.forEach((data,index) => observer.observe(data.current));
    
      return () => observer.disconnect();
  }, []);
    
    
    return (
      <Layout>
      {
        FactoryShowingContainer(
          
          <Section grid>
            <Hero />
            <BgAnimation />
          </Section>
          ,refs[0]
        )
      }
      {
        FactoryShowingContainer(
          
          <Projects/>
          ,refs[1]
        )
      }
      {
        FactoryShowingContainer(
          
          <Technologies />
          ,refs[2]
        )
      }
      {
        FactoryShowingContainer(
          
          <Timeline />
          ,refs[3]
        )
      }
      {
        FactoryShowingContainer(
          
          <Accomplishments />
          ,refs[4]
        )
      }

      
    </Layout>
  );
};

export default Home;
