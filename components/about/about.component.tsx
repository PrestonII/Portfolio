import React from 'react';
import Link from 'next/link'
import Layout from '../Layout';
import PageLink from '../PageLink';
import ROUTES from '../Routes';
import styles from './about.module.scss';

interface IAbout {
  title: string;
  sectionTitle: string;
  sectionContent?: string;
  sectionNext?: string;
}

const summary = `
Over the last 10 years I've made a career of tackling difficult challenges at the 
intersection of design and technology. With a background in architecture, 
visual design and software development I've been able to take a unique approach to 
problem solving that leads to incredible results. 
I've also contributed to the industry by speaking about my work at multiple 
industry conferences, including Autodesk University.
`

const About = ({title, sectionTitle, sectionContent}: IAbout) => (
  <div className={styles.about}>
    <div className={styles.about__title}>
      <h2>{title}</h2>
    </div>
    <div className={styles.about__jumbotron}></div>
    <div className={styles.about__summary}>
      <div className={styles.about__summary__header}>
        <h2>Now</h2>
        <h4>hlw</h4>
      </div>
      <p>{summary}</p>
    </div>
  </div>
)

export default About;