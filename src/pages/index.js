import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, OProjects, Career } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <OProjects />
    <Career /> 
    <Skills />
    <Contact />
  </Layout>
);
