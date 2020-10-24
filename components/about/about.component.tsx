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

const About = ({title, sectionTitle, sectionContent}: IAbout) => (
  <div className={styles.about}>
    <div className={styles.about__title}>
      <h2>{title}</h2>
    </div>
    <div className={styles.about__jumbotron}></div>
    <div className={styles.about__summary}>
      <h2>Now</h2>
      <h4>hlw</h4>
    </div>
  </div>
)

export default About;