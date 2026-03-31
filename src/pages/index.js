import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.logoContainer}>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/REVA_University_Bangalore.png" 
                alt="REVA Logo" 
                className={styles.heroLogo}
            />
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/intro">
            Explore Courses & Resources
          </Link>
        </div>
        <div className={styles.hashtags}>
            #REVAuniversity #EducateToEnterprise
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="The official learning hub for REVA University. Educate to Enterprise.">
      <HomepageHeader />
      <main className="container text--center margin-vert--xl">
        <section className="row">
            <div className="col col--4">
                <div className="card shadow--md margin-bottom--lg">
                    <div className="card__body">
                        <h3>Innovation & Research</h3>
                        <p>Fostering student projects, patents, and hackathons.</p>
                    </div>
                </div>
            </div>
            <div className="col col--4">
                 <div className="card shadow--md margin-bottom--lg">
                    <div className="card__body">
                        <h3>Entrepreneurship</h3>
                        <p>Leverage REVA NEST for your startup journey.</p>
                    </div>
                </div>
            </div>
            <div className="col col--4">
                 <div className="card shadow--md margin-bottom--lg">
                    <div className="card__body">
                        <h3>Industry Readiness</h3>
                        <p>Placements, internships, and industry masterclasses.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
}

