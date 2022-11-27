import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <h1>Theory</h1>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Theory
          </Link>
        </div>

        <div className={styles.content}>
          <h1>Blog</h1>
          <Link className="button button--secondary button--lg" to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
