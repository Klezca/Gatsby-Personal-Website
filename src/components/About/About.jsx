import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    // eslint-disable-next-line no-multi-str
                    'Recent graduate with 1+ year of work experience \
                  in two different Australian start-ups (Treiner and Shifra), \
                  where I had hands on experience designing and building out AWS cloud networks and infrastructures \
                  for Development, Staging and Production environment that are needed for existing Client-side SPA \
                  or Server-side rendered (SSR) web application(s).'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    // eslint-disable-next-line no-multi-str
                    'I have a broad knowledge and \
                    hands-on experience in software development practices \
                    (Agile, CI/CD, Continuous Deployment, secret management,\
                    Gitflow workflow), Linux system administration, \
                    network administration, database administration, security and storage in the AWS cloud.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    // eslint-disable-next-line no-multi-str
                    "I'm basically the operations / infrastructure person \
                    who write code to automate as much manual \
                    process / work as possible."}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
