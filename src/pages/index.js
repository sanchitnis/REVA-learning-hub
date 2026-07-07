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
                        <h3>CS101: Introduction to AI</h3>
                        <p>Exploring the foundations of Machine Learning and Neural Networks.</p>
                    </div>
                    <div className="card__footer">
                        <Link className="button button--secondary button--block" to="/CS101-Introduction-to-AI/introduction">
                            Open Course
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col col--4">
                 <div className="card shadow--md margin-bottom--lg">
                    <div className="card__body">
                        <h3>CS102: Modern Web Development</h3>
                        <p>Building scalable, high-performance web applications.</p>
                    </div>
                    <div className="card__footer">
                        <Link className="button button--secondary button--block" to="/CS102-Modern-Web-Development/introduction">
                            Open Course
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col col--4">
                 <div className="card shadow--md margin-bottom--lg">
                    <div className="card__body">
                        <h3>CSE490: Software 3.0</h3>
                        <p>Agentic Software Engineering with LLMs, RAG, and multi-agent systems.</p>
                    </div>
                    <div className="card__footer">
                        <Link className="button button--secondary button--block" to="/CSE490-Software-3.0">
                            Open Course
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
}

