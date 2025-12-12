import React from "react";
import Layout from "@theme/Layout";
import styles from "./experience.module.css";

export default function Experience(): JSX.Element {
  const workExperience = [
    {
      title: "Backend Engineer Intern",
      company: "GreedyGame Media Pvt Ltd",
      location: "Bengaluru, India",
      tenure: "Sep 2025 - Nov 2025",
      logo: "/img/company_greedygame.jpg",
      responsibilities: [
        "Part of the AdX Team, the primary revenue resource for the company, building backend systems for revenue monitoring and alerting",
        "Default Ad Unit Alert System (GAM 360): Developed alert-based monitoring that fetches reports containing ad request counts, triggers alerts when volume crosses thresholds. Integrated unified publishers and service notifier microservices, enabling operations team to handle issues promptly, detect anomalies early, maintain fill rates, and prevent revenue leakage",
        "Hourly Revenue Alerts System (GAM 360): Designed and implemented real-time hourly revenue monitoring that continuously tracks trends, identifies sudden drops, and sends automated alerts. Enabled quick action from operations team, reducing overall percentage of revenue loss",
        "Webhook Processor (Worker Model): Designed scalable worker-based webhook processing model capable of handling high traffic efficiently and reliably",
      ],
      technologies: [
        "Golang",
        "GORM",
        "Python",
        "SQLAlchemy",
        "GAM 360",
        "PostgreSQL",
        "Prometheus",
        "Grafana",
        "Microservices",
        "Docker",
        "Redis",
      ],
    },
    {
      title: "SDE Intern - R&D",
      company: "Testsigma Software Tech Pvt Ltd",
      location: "Bengaluru, India",
      tenure: "Aug 2024 - Aug 2025",
      logo: "/img/company_testsigma.jpeg",
      responsibilities: [
        "Worked on Test Management Software (TMS) product under guidance of CTO Mr. Pratheep Velicharla, delivering core features",
        "AI-Driven Test Scenarios with Test Cases Generation: Integrated Alpha microservice to generate test scenarios containing test cases from queries, images, videos, Figma designs, and JIRA issues. Became a core product feature with excellent G2 reviews, reducing manual effort by 60%",
        "Sprint Planner (Atto): Implemented JIRA-TMS project link integration for smooth synchronization. Handled sprint CRUD operations and synced JIRA issues to sprints asynchronously using jobs. Integrated AI-powered scenario/test case generation for JIRA issues when sprints activate. Webhooks for JIRA events enable one-way communication - updates in JIRA automatically reflected in TMS, ensuring data consistency",
        "Account Creation & Activation: Implemented secure account creation integrating identity microservice, added rollback mechanism, seeded default data, integrated HubSpot for customer contacts, enabled AWS S3 storage for customizable icons",
        "Dashboard for TMS: Built dashboard providing real-time insights - active runs, closed runs, test case distribution, and defects linked with test runs",
        "Test Plans: Implemented full CRUD operations for test plans to help QA teams organize and manage test activities",
        "HELIX Project (Load Balancer): Developed daily log streaming pipeline to AWS S3, integrated Prometheus for monitoring reducing incident resolution time by 50%",
      ],
      technologies: [
        "Golang",
        "Python",
        "GraphQL",
        "GORM",
        "Echo",
        "FastAPI",
        "PostgreSQL",
        "AWS S3",
        "Java",
        "Spring Boot",
        "Prometheus",
        "JIRA",
        "HubSpot",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      college:
        "Rajiv Gandhi University of Knowledge Technologies, IIIT RK Valley, YSR Kadapa, AP",
      duration: "November 2021 - May 2025",
      cgpa: "8.98",
      description:
        "Comprehensive study of computer science fundamentals, software engineering principles, and modern computing technologies.",
    },
    {
      degree: "Pre-University Course (PUC)",
      field: "MPC (Mathematics, Physics, Chemistry)",
      college:
        "Rajiv Gandhi University of Knowledge Technologies, IIIT RK Valley, YSR Kadapa, AP",
      duration: "August 2019 - October 2021",
      cgpa: "9.67",
      description:
        "Strong foundation in mathematics, physics, and chemistry with focus on analytical thinking.",
    },
  ];

  return (
    <Layout
      title="Experience - Girivardhan Velpula"
      description="Professional experience and achievements in software development and AI."
    >
      <main className={styles.main}>
        {/* Header Section */}
        <section className={styles.header}>
          <div className={styles.container}>
            <h1>Professional Experience</h1>
            <p>My journey in software development and AI.</p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className={styles.workExperience}>
          <div className={styles.container}>
            <h2>Work History</h2>
            <div className={styles.timeline}>
              {workExperience.map((job, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>
                    <div className={styles.markerDot}></div>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.jobCard}>
                      <div className={styles.jobHeader}>
                        <div className={styles.companyInfo}>
                          <img
                            src={job.logo}
                            alt={`${job.company} logo`}
                            className={styles.companyLogo}
                          />
                          <div className={styles.jobDetails}>
                            <h3 className={styles.jobTitle}>{job.title}</h3>
                            <p className={styles.companyName}>{job.company}</p>
                            <p className={styles.jobLocation}>{job.location}</p>
                            <p className={styles.jobTenure}>{job.tenure}</p>
                          </div>
                        </div>
                      </div>

                      <div className={styles.jobBody}>
                        <h4>Key Responsibilities:</h4>
                        <ul className={styles.responsibilitiesList}>
                          {job.responsibilities.map(
                            (responsibility, respIndex) => (
                              <li key={respIndex}>{responsibility}</li>
                            )
                          )}
                        </ul>

                        <div className={styles.technologiesSection}>
                          <h4>Technologies Used:</h4>
                          <div className={styles.technologiesGrid}>
                            {job.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={styles.technologyTag}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.education}>
          <div className={styles.container}>
            <h2>Education</h2>
            <div className={styles.educationGrid}>
              {education.map((edu, index) => (
                <div key={index} className={styles.educationCard}>
                  <div className={styles.educationIcon}>
                    <div className={styles.graduationCap}>🎓</div>
                  </div>
                  <div className={styles.educationContent}>
                    <h3>{edu.degree}</h3>
                    <p className={styles.educationField}>{edu.field}</p>
                    <p className={styles.educationCollege}>{edu.college}</p>
                    <p className={styles.educationDuration}>{edu.duration}</p>
                    <p className={styles.educationCgpa}>CGPA: {edu.cgpa}</p>
                    <p className={styles.educationDescription}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Summary */}
        <section className={styles.skillsSummary}>
          <div className={styles.container}>
            <h2>Core Competencies</h2>
            <div className={styles.skillsCategories}>
              <div className={styles.skillCategory}>
                <h3>Software Development</h3>
                <p>
                  Proficient in Golang, Python, and SQL with expertise in
                  building production-grade systems
                </p>
              </div>
              <div className={styles.skillCategory}>
                <h3>AI Integration</h3>
                <p>
                  Experience with RAG, Vector Databases, LLMs, and AI-driven
                  automation
                </p>
              </div>
              <div className={styles.skillCategory}>
                <h3>Cloud & Tools</h3>
                <p>
                  Expertise in AWS, Docker, Prometheus, and building scalable
                  microservices architectures
                </p>
              </div>
              <div className={styles.skillCategory}>
                <h3>Frameworks & Libraries</h3>
                <p>
                  Proficient in GORM, Echo, FastAPI, Flask, GraphQL, SQLAlchemy,
                  SpringBoot, and React
                </p>
              </div>
              <div className={styles.skillCategory}>
                <h3>Problem Solving</h3>
                <p>
                  300+ problems solved across LeetCode, GeeksforGeeks, and
                  HackerRank with strong algorithmic skills
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to Work Together?</h2>
            <p>
              Let's discuss how my software development experience can
              contribute to your next project or team.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Get In Touch
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
