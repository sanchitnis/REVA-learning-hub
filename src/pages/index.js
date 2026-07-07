import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGlow}></div>
      <div className={`container ${styles.heroContent}`}>
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
      <main className="container margin-vert--xl">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" style={{ fontSize: '2.2rem', fontWeight: 800 }}>Explore Academic Programs</Heading>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Instant access to active learning material, syllabi, and presentation decks.</p>
        </div>
        
        <section className="row">
            {/* Card 1: CS101 */}
            <div className="col col--4 margin-bottom--lg">
                <div className={styles.glassCard}>
                    <div className={styles.cardBody}>
                        <div className={styles.badge}>Self-Paced</div>
                        <div className={styles.cardIcon}>
                          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <Heading as="h3" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>CS101: Introduction to AI</Heading>
                        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>Exploring the foundations of Machine Learning, neural networks, and applications of modern AI models.</p>
                    </div>
                    <div className={styles.cardFooter}>
                        <Link className="button button--secondary button--block" to="/CS101-Introduction-to-AI/introduction">
                            Open Course
                        </Link>
                    </div>
                </div>
            </div>

            {/* Card 2: CS102 */}
            <div className="col col--4 margin-bottom--lg">
                 <div className={styles.glassCard}>
                    <div className={styles.cardBody}>
                        <div className={styles.badge}>Interactive</div>
                        <div className={styles.cardIcon}>
                          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <Heading as="h3" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>CS102: Modern Web Dev</Heading>
                        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>Building scalable, high-performance web applications using modern Javascript frameworks and static build tools.</p>
                    </div>
                    <div className={styles.cardFooter} style={{ display: 'flex', gap: '8px' }}>
                        <Link className="button button--secondary button--sm button--block" style={{ margin: 0 }} to="/CS102-Modern-Web-Development/introduction">
                            Open Course
                        </Link>
                        <Link className="button button--primary button--sm button--block" style={{ margin: 0 }} href="pathname:///presentations/sample-presentation/">
                            Open Slides
                        </Link>
                    </div>
                </div>
            </div>

            {/* Card 3: CSE490 */}
            <div className="col col--4 margin-bottom--lg">
                 <div className={styles.glassCard}>
                    <div className={styles.cardBody}>
                        <div className={`${styles.badge} ${styles.badgeGreen}`}>Interactive + Lab</div>
                        <div className={styles.cardIcon}>
                          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <Heading as="h3" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>CSE490: Software 3.0</Heading>
                        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>Agentic Software Engineering. Learn context orchestration, ReAct patterns, RAG pipelines, and multi-agent frameworks.</p>
                    </div>
                    <div className={styles.cardFooter} style={{ display: 'flex', gap: '8px' }}>
                        <Link className="button button--secondary button--sm button--block" style={{ margin: 0 }} to="/CSE490-Software-3.0">
                            Open Course
                        </Link>
                        <Link className="button button--primary button--sm button--block" style={{ margin: 0 }} href="pathname:///presentations/SW3/">
                            Open Slides
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
}

