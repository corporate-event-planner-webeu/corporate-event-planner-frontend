import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from'../components/Footer';

import Events from '../assets/events.svg';
import Organizing from '../assets/organizin.svg';
import Scrum from '../assets/scrum.svg';

export default function LandingPage() {
    return (
        <LandingPageWrapper>
            <Homestyled>
              <HeaderWrapper>
                  <h1>Corporate event planner</h1>
                  <p>An easy way to keep track of all the details and and people to coordinate the event </p>
                  <p>Log in to see your upcoming events or sign up to get started!</p>
                  <div className="cta-buttons">
                    <Link to='./login'>Log In</Link>
                    <Link to='./signup'>Sign Up</Link>
                  </div>
              </HeaderWrapper>

              <ServicesSection>
                <div className="service">
                  <img src={Scrum} alt="scrum"/>
                  <p>Unicorn art party hammock, everyday carry thundercats distillery 8-bit offal blog single-origin coffee ugh yr. Mustache subway tile coloring book messenger bag try-hard asymmetrical. Shabby chic tote bag yuccie fashion axe pitchfork heirloom. Kale chips fingerstache bicycle rights, VHS asymmetrical man bun banh mi keytar semiotics bushwick.</p>
                </div>
                <div className="service reverse">
                  <p>Unicorn art party hammock, everyday carry thundercats distillery 8-bit offal blog single-origin coffee ugh yr. Mustache subway tile coloring book messenger bag try-hard asymmetrical. Shabby chic tote bag yuccie fashion axe pitchfork heirloom. Kale chips fingerstache bicycle rights, VHS asymmetrical man bun banh mi keytar semiotics bushwick.</p>
                  <img src={Organizing} alt="organizing"/>
                </div>
                <div className="service">
                  <img src={Events} alt="events"/>
                  <p>Unicorn art party hammock, everyday carry thundercats distillery 8-bit offal blog single-origin coffee ugh yr. Mustache subway tile coloring book messenger bag try-hard asymmetrical. Shabby chic tote bag yuccie fashion axe pitchfork heirloom. Kale chips fingerstache bicycle rights, VHS asymmetrical man bun banh mi keytar semiotics bushwick.</p>
                </div>
              </ServicesSection>

              <FeaturesSection>
                <Feature>
                  <IconWrapper>
                    <SeoIcon>
                      <i className="far fa-calendar-check"></i>
                    </SeoIcon>
                  </IconWrapper>
                  <h4>Stay in control & plan events like a pro</h4>
                  <p>Banh mi selvage master cleanse, cronut williamsburg seitan pop-up venmo tote bag kombucha cornhole chartreuse. Swag squid iPhone, single-origin coffee quinoa echo park asymmetrical mixtape. </p>
                </Feature>

                <Feature>
                  <IconWrapper>
                    <SeoIcon>
                      <i className="fas fa-shopping-cart"></i>
                    </SeoIcon>
                  </IconWrapper>
                  <h4>Build your shopping list the smart way</h4>
                  <p>Banh mi selvage master cleanse, cronut williamsburg seitan pop-up venmo tote bag kombucha cornhole chartreuse. Swag squid iPhone, single-origin coffee quinoa echo park asymmetrical mixtape. </p>
                </Feature>

                <Feature>
                  <IconWrapper>
                    <SeoIcon><i className="fas fa-tasks"></i></SeoIcon>
                  </IconWrapper>
                  <h4>Track your progress and budget easily</h4>
                  <p>Banh mi selvage master cleanse, cronut williamsburg seitan pop-up venmo tote bag kombucha cornhole chartreuse. Swag squid iPhone, single-origin coffee quinoa echo park asymmetrical mixtape. </p>
                </Feature>

              </FeaturesSection>
            </Homestyled>
            <Footer/>
        </LandingPageWrapper>
    )
}
const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: #FFFFFF;
`;

const Homestyled = styled.div`
  margin: 5rem 0;
`;

const HeaderWrapper = styled.div`
  color: #333;
  text-align: center;
  width: 100%;
  margin: 0 auto;

  @media(max-width: 800px) {
    padding: 0 2.5rem;
    width: 100%;
  }
  h1 {
    font-size: 6rem;
    padding: 2rem 0;
  }
  p {
    font-size: 2.5rem;
  }
  .cta-buttons {
    display: flex;
    width: 350px;
    justify-content: space-between;
    margin: 4rem auto;
    @media(max-width: 600px) {
    flex-direction: column;
    width: 100%;
    }
    a {
      align-self: center;
      padding: 1.2rem 2rem;
      width: 150px;
      font-size: 2.2rem;
      color: #07a0c3;
      background: none;
      border-radius: 3px;
      border: 1px solid #07a0c3;
      &:hover {
        background: linear-gradient(135deg, #07a0c3 0%,#89bde5 100%);
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
        transition: 0.3s ease-out;
      }
      @media(max-width: 600px) {
        width: 100%;
        margin-bottom: 1.5rem;
      }
    }
  }
`;

const FeaturesSection = styled.div`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  justify-content: space-between;
    @media(max-width: 800px) {
  flex-direction: column;
  width: 100%;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  @media(max-width: 800px) {
    width: 100%;
    padding: 3rem 2.5rem;
  }
  h4 {
    padding: 2rem 0;
    text-align: left;
    font-size: 2.4rem;
    @media(max-width: 800px) {
    text-align: center;

    }
  }
  p{
    text-align: left;
    @media(max-width: 800px) {
      text-align: center;
    }
  }
`;

const IconWrapper = styled.div`
  margin: 0 auto;
`;

const SeoIcon = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  background: linear-gradient(135deg, #07a0c3 0%,#89bde5 100%);
  i {
    text-align: center;
    font-size: 4rem;
    margin: auto;
    color: #FFFFFF;
  }
`;

const ServicesSection = styled.div`
  background: #f2fcff;
  margin: 6rem 0;
  .service {
    padding: 3rem 2.5rem;
    display: flex;
    justify-content: space-around;
    @media(max-width: 800px) {
      flex-direction: column;
      width: 100%;
      padding: 6rem 2.5rem;
    }
    img {
      width: 40%;
      @media(max-width: 800px) {
      width: 80%;
      padding-bottom: 4rem;
      margin: 0 auto;
      }
    }
    p {
      width: 40%;
      color: #333;
      align-self: center;
      text-align: left;
      @media(max-width: 800px) {
      width: 100%;
      }
    }
  }
  .reverse {
    @media(max-width: 800px) {
     flex-direction: column-reverse;
    }
  }
`;
