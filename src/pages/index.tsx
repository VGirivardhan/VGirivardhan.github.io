import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Girivardhan Velpula - Software Development Engineer"
      description="Backend systems, AI integration, and test management software. Expert in Golang, Python, GraphQL, and scalable architectures."
    >
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1>Girivardhan Velpula</h1>
                <h2>Software Development Engineer</h2>
                <p>
                  Software Development Engineer with 15+ months of professional experience at fast-paced startups,
                  building scalable production systems with modern technologies including AI
                  and microservices architecture.
                  Specialized in Golang, Python, and distributed systems.
                </p>
                <div className={styles.availability}>
                  <span className={styles.availabilityDot}></span>
                  Available for opportunities
                </div>
              </div>
              <div className={styles.heroImage}>
                <img src="/img/photo.jpg" alt="Girivardhan Velpula" />
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary Section */}
        <section className={styles.summary}>
          <div className={styles.container}>
            <h2>Professional Summary</h2>
            <div className={styles.summaryContent}>
              <p>
                With 15+ months of professional experience, I specialize in software development,
                monitoring and alerting systems, worker models, webhook processing, and feature development
                for large-scale SaaS products. My expertise spans third-party integrations (JIRA, HubSpot, AWS S3),
                AI-driven automation, and building production-ready microservices using Golang and Python.
              </p>
              <p>
                At GreedyGame, I am part of the AdX Team - the company&apos;s primary revenue resource.
                I developed critical revenue monitoring systems for Google Ad Manager (GAM 360), including a
                Default Ad Unit Alert System that detects anomalies early and prevents revenue leakage,
                and an Hourly Revenue Alerts System that tracks revenue trends in real-time and triggers
                automated alerts to reduce revenue loss. I also designed a scalable Webhook Processor Worker Model
                capable of handling high-traffic efficiently.
              </p>
              <p>
                At Testsigma, working under CTO Mr. Pratheep Velicharla, I delivered core features for
                Test Management Software (TMS), including AI-Driven Test Scenarios with Test Cases Generation
                (reducing manual effort by 60% and receiving excellent G2 reviews), Sprint Planner (Atto) with
                JIRA synchronization, webhook integration, and AI-powered scenario/test case generation for
                JIRA issues when sprints activate. Also built secure Account Creation with rollback mechanisms
                and a comprehensive Dashboard providing real-time insights into test activities.
              </p>
            </div>
          </div>
        </section>

        {/* Skills & Technologies Section */}
        <section className={styles.skills}>
          <div className={styles.container}>
            <h2>Skills & Technologies</h2>

            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3>Programming Languages</h3>
                <ul>
                  <li>
                    <strong>Proficient:</strong> Golang, Python, SQL
                  </li>
                  <li>
                    <strong>Familiar:</strong> Java, JavaScript
                  </li>
                  <li>
                    <strong>Problem Solving:</strong> 300+ problems solved
                    across platforms (LeetCode, GeeksforGeeks, HackerRank)
                  </li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Frameworks & Tools</h3>
                <ul>
                  <li>
                    Backend Frameworks: GORM, Echo, FastAPI,
                    Flask, GraphQL, SQLAlchemy, SpringBoot, React
                  </li>
                  <li>
                    Databases: MySQL, PostgreSQL, Redis
                  </li>
                  <li>
                    DevOps & Cloud: AWS, Docker, Argo CD, Prometheus,
                    Git, GitHub, Bitbucket
                  </li>
                  <li>
                    Additional Tools: GAM 360
                  </li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Specialized Skills</h3>
                <ul>
                  <li>
                    AI Agents: RAG, Vector Databases, LLMs for intelligent automation
                  </li>
                  <li>
                    Modern AI Tools: 10x productivity through AI-driven workflows
                  </li>
                  <li>
                    Scalable Microservices: Production-grade distributed systems
                  </li>
                  <li>
                    Real-time Monitoring: Alert systems for revenue protection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Achievements Section */}
        <section className={styles.technicalAchievements}>
          <div className={styles.container}>
            <h2>Technical Achievements & Impact</h2>
            <div className={styles.achievementsGrid}>
              <div className={styles.achievementCard}>
                <h3>🤖 AI-Driven Test Automation</h3>
                <p>
                  Integrated Alpha microservice to generate AI-driven test scenarios with test cases from
                  multiple inputs (queries, images, videos, JIRA, Figma). Built into Atto for automatic
                  generation when sprints activate. Reduced manual effort by 60% with excellent G2 reviews.
                </p>
              </div>
              <div className={styles.achievementCard}>
                <h3>💰 Revenue Protection Systems</h3>
                <p>
                  Built critical monitoring systems for GAM 360 that detect anomalies,
                  prevent revenue leakage, and reduce revenue loss through real-time
                  alerting. Integrated microservices enabling operations team to act promptly.
                </p>
              </div>
              <div className={styles.achievementCard}>
                <h3>🔄 Seamless JIRA Integration</h3>
                <p>
                  Built Sprint Planner (Atto) with JIRA synchronization, webhook integration for
                  one-way communication. Updates in JIRA automatically reflect in TMS, ensuring
                  data consistency and eliminating manual sync effort.
                </p>
              </div>
              <div className={styles.achievementCard}>
                <h3>🏆 Eywa - AI Hackathon Project</h3>
                <p>
                  Participated in Testsigma AI Hackathon competing with experienced professionals. Built a Level 1
                  AI support agent fine-tuned on Testsigma docs using RAG and vector search for
                  context-aware responses, significantly reducing support workload.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className={styles.featuredProjects}>
          <div className={styles.container}>
            <h2>Featured Projects</h2>
            <div className={styles.projectGrid}>
              <div className={styles.projectCard}>
                <h3>🤖 Eywa - AI Support Agent</h3>
                <p>
                  Level 1 AI support agent built during Testsigma AI Hackathon, competing with experienced professionals.
                  Fine-tuned on Testsigma docs with RAG and vector search for context-aware responses,
                  reducing support workload significantly.
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/VGirivardhan/Eywa-AI-Support-Agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View on GitHub
                  </a>
                </div>
              </div>

              <div className={styles.projectCard}>
                <h3>💱 Exchange Rate Service</h3>
                <p>
                  Go-based microservice for real-time/historical FX conversion
                  with multi-API integration, in-memory caching, and
                  comprehensive REST APIs with Swagger documentation.
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/VGirivardhan/exchange-rate-service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className={styles.quickLinks}>
          <div className={styles.container}>
            <h2>Quick Navigation</h2>
            <div className={styles.linksGrid}>
              <a href="/projects" className={styles.quickLink}>
                <h3>View All Projects</h3>
                <p>
                  Explore my complete portfolio of software development and projects
                </p>
              </a>
              <a href="/experience" className={styles.quickLink}>
                <h3>Professional Experience</h3>
                <p>
                  Learn about my work history and achievements as a Software
                  Development Engineer
                </p>
              </a>
              <a href="/certifications" className={styles.quickLink}>
                <h3>Certifications</h3>
                <p>View my professional certifications and recognitions</p>
              </a>
              <a href="/contact" className={styles.quickLink}>
                <h3>Get In Touch</h3>
                <p>Ready to discuss opportunities or collaborations</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
