import React from "react";
import Layout from "@theme/Layout";
import styles from "./certifications.module.css";

export default function Certifications(): JSX.Element {
  const certifications = [
    {
      title: "Internship Completion - Testsigma Software Tech Pvt Ltd",
      description:
        "Completed successful internship as SDE Intern - R&D, delivering 7+ features and contributing to test management software development.",
      credentialLink: "https://drive.google.com/file/d/1HtNWW0YkhZ7593AyiK44KL-kr_cqJOp_/view?usp=sharing",
      icon: "/img/company_testsigma.jpeg",
      category: "Internship",
      skills: ["Golang", "Python", "GraphQL", "GORM", "PostgreSQL", "AWS S3"],
    },
    {
      title:
        "Long-Term Intern Performance Evaluation - Testsigma Software Tech Pvt Ltd",
      description:
        "Recognition for outstanding performance during long-term internship with focus on AI integration and software development.",
      credentialLink: "https://drive.google.com/file/d/1qSyqdh0M9_yec_6p7CTd6XO4T7nioFWd/view?usp=sharing",
      icon: "/img/company_testsigma.jpeg",
      category: "Performance",
      skills: [
        "AI Integration",
        "Software Development",
        "System Design",
        "Team Collaboration",
      ],
    },
    {
      title: "Testsigma AI Hackathon",
      description:
        "Participated in Testsigma AI Hackathon competing with experienced professionals, developing AI Support Agent.",
      credentialLink: "https://drive.google.com/file/d/15nvQj53Mn0Au_QZfquJ_m-EMDVVKcBfJ/view?usp=sharing",
      icon: "/img/company_testsigma.jpeg",
      category: "Hackathon",
      skills: ["AI", "RAG", "Vector DB", "LLMs", "Innovation"],
    },
    {
      title: "Python Certification - HackerRank",
      description:
        "Certified in Python programming with 5 Star Badge, demonstrating strong problem-solving and algorithmic skills.",
      credentialLink: "https://www.hackerrank.com/certificates/ea3dd4613751",
      icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
      category: "Programming",
      skills: ["Python", "Algorithms", "Data Structures", "Problem Solving"],
    },
    {
      title: "SQL for Data Science - edX",
      description:
        "Verified certificate demonstrating proficiency in SQL for data science applications, including database querying and data manipulation.",
      credentialLink: "https://courses.edx.org/certificates/193d9ed73247418f88932f310096a3f1",
      icon: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
      category: "Programming",
      skills: ["SQL", "MySQL"],
    },
  ];

  return (
    <Layout
      title="Certifications - Girivardhan Velpula"
      description="Professional certifications and recognitions in software development, AI, and engineering."
    >
      <main className={styles.main}>
        {/* Header Section */}
        <section className={styles.header}>
          <div className={styles.container}>
            <h1>Certifications & Recognitions</h1>
            <p>
              Professional certifications and awards validating my expertise in
              software development and AI
            </p>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className={styles.certifications}>
          <div className={styles.container}>
            <div className={styles.certificationsGrid}>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.certificationCard}>
                  <div className={styles.certificationHeader}>
                    <div className={styles.certificationIcon}>
                      <img src={cert.icon} alt="Google Cloud" />
                    </div>
                    <div className={styles.certificationInfo}>
                      <h3 className={styles.certificationTitle}>
                        {cert.title}
                      </h3>
                      <span className={styles.certificationCategory}>
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  <div className={styles.certificationBody}>
                    <p className={styles.certificationDescription}>
                      {cert.description}
                    </p>

                    <div className={styles.skillsSection}>
                      <h4>Key Skills Validated:</h4>
                      <div className={styles.skillsGrid}>
                        {cert.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.certificationActions}>
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.credentialButton}
                    >
                      🔗 View Credential
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Journey */}
        <section className={styles.journey}>
          <div className={styles.container}>
            <h2>My Achievement Journey</h2>
            <div className={styles.journeyContent}>
              <div className={styles.journeyStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Foundation in Programming</h3>
                  <p>
                    Built strong programming skills with Python and SQL, earning
                    5 Star Badge on HackerRank and certifications in algorithmic
                    problem-solving and data science.
                  </p>
                </div>
              </div>
              <div className={styles.journeyStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>AI Hackathon & Innovation</h3>
                  <p>
                    Participated in AI Hackathon competing with experienced
                    professionals, gaining hands-on experience in building AI
                    agents using RAG, Vector DBs, and LLMs in a short timeframe.
                  </p>
                </div>
              </div>
              <div className={styles.journeyStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Professional Experience</h3>
                  <p>
                    Gained industry experience through internships at Testsigma
                    and GreedyGame, delivering production-grade features and
                    receiving performance recognition for contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to Discuss Software Solutions?</h2>
            <p>Let's explore how my expertise can benefit your next project.</p>
            <a href="/contact" className={styles.ctaButton}>
              Get In Touch
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
