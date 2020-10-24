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
    <div className={styles.about__title}></div>
    <div className={styles.about__jumbotron}></div>
    <div className={styles.about__summary}></div>
  </div>
)

export default About;