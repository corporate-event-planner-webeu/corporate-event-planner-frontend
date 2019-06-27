import React from 'react';
import styled from 'styled-components';
import Footer from'../components/Footer';

const AboutPage = () => {
  return (
      <AboutPageWrapper>
        <span/>
        <div>
        <h2>Meet our team!</h2>
        <MembersSection>
          <Member>
            <h3>Frontend Architect</h3>
            <p>Anna Winther</p>
          </Member>

          <Member>
            <h3>Frontend Architect</h3>
            <p>Johnson Ogwuru</p>
          </Member>

          <Member>
            <h3>Backend Architect/Team Lead</h3>
            <p>Diana Ignatescu</p>
          </Member>
        </MembersSection>
        </div>
        <Footer/>
      </AboutPageWrapper>
  )
};

export default AboutPage;

const AboutPageWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
`;

const MembersSection = styled.div`
display: flex;
justify-content: space-between;
margin: 2.5rem;
`;
const Member = styled.div`
margin: 0 auto;
width: 70%;
h3 {
font-size: 2.4rem;
}

p {
font-size: 1.8rem;
}
`;