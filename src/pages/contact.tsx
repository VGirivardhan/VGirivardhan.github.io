import React from "react";
import Layout from "@theme/Layout";
import styles from "./contact.module.css";

export default function Contact(): JSX.Element {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "vgirivardhan139@gmail.com",
      link: "mailto:vgirivardhan139@gmail.com",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Bengaluru, India",
      link: null,
    },
  ];

  const socialMedia = [
    {
      name: "LinkedIn",
      icon: "/img/linkedin.png",
      url: "https://www.linkedin.com/in/girivardhan-velpula",
      color: "#0077b5",
    },
    {
      name: "GitHub",
      icon: "/img/github.png",
      url: "https://github.com/VGirivardhan",
      color: "#24292e",
    },
    {
      name: "LeetCode",
      icon: "/img/leetcode.png",
      url: "https://leetcode.com/u/vgirivardhan139",
      color: "#ffa116",
    },
    {
      name: "GeeksforGeeks",
      icon: "/img/gfg.png",
      url: "https://www.geeksforgeeks.org/profile/girivardhan_velpula",
      color: "#2f8d46",
    },
    {
      name: "HackerRank",
      icon: "/img/hackerrank.png",
      url: "https://www.hackerrank.com/profile/vgirivardhan139",
      color: "#00ea64",
    },
  ];

  return (
    <Layout
      title="Contact - Girivardhan Velpula"
      description="Get in touch for collaborations, opportunities, or questions about software development and AI projects."
    >
      <main className={styles.main}>
        {/* Header Section */}
        <section className={styles.header}>
          <div className={styles.container}>
            <h1>Let's Connect</h1>
            <p>
              Ready to collaborate on your next cloud project or discuss
              opportunities?
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className={styles.contactInfo}>
          <div className={styles.container}>
            <h2>Get In Touch</h2>
            <div className={styles.contactGrid}>
              {contactInfo.map((contact, index) => (
                <div key={index} className={styles.contactCard}>
                  <div className={styles.contactIcon}>{contact.icon}</div>
                  <div className={styles.contactDetails}>
                    <h3>{contact.label}</h3>
                    {contact.link ? (
                      <a href={contact.link} className={styles.contactLink}>
                        {contact.value}
                      </a>
                    ) : (
                      <p>{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className={styles.socialMedia}>
          <div className={styles.container}>
            <h2>Connect With Me</h2>
            <p>
              Follow my journey and stay updated with my latest projects and
              insights
            </p>
            <div className={styles.socialGrid}>
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                  style={
                    { "--hover-color": social.color } as React.CSSProperties
                  }
                >
                  <div className={styles.socialIcon}>
                    <img src={social.icon} alt={social.name} />
                  </div>
                  <h3>{social.name}</h3>
                  <span className={styles.socialHandle}>
                    {social.name === "LinkedIn" && "girivardhan-velpula"}
                    {social.name === "GitHub" && "VGirivardhan"}
                    {social.name === "LeetCode" && "vgirivardhan139"}
                    {social.name === "GeeksforGeeks" && "vgirivardhan139"}
                    {social.name === "HackerRank" && "vgirivardhan139"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise & Invitation */}
        <section className={styles.expertiseInvite}>
          <div className={styles.container}>
            <div className={styles.inviteContent}>
              <h2>Let's Connect and Build Together!</h2>
              <div className={styles.inviteText}>
                <p>
                  As a Software Development Engineer with experience at
                  Testsigma and GreedyGame, I specialize in building scalable
                  software systems with Golang, Python, and modern cloud
                  technologies. My passion lies in creating production-grade
                  applications and integrating AI-driven solutions.
                </p>
                <p>
                  I am actively seeking opportunities to work on challenging
                  software development projects, AI integration, and
                  microservices architectures. With a strong foundation in
                  system design and hands-on experience with Golang, Python,
                  AWS, Docker, and GraphQL, I'm ready to contribute to
                  innovative teams and products.
                </p>
                <p>
                  Whether you're looking for a software development engineer,
                  want to collaborate on open-source projects, or simply want to
                  discuss the latest trends in software development and AI, I'd
                  love to connect. Let's build something amazing together!
                </p>
              </div>

              <div className={styles.expertiseHighlights}>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>⚙️</div>
                  <h4>Software Development</h4>
                  <p>Golang, Python, GraphQL, PostgreSQL</p>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>🤖</div>
                  <h4>AI</h4>
                  <p>RAG, Vector Databases, LLMs, Automation</p>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>☁️</div>
                  <h4>Cloud & DevOps</h4>
                  <p>AWS, Docker, Prometheus, REST APIs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to Start a Conversation?</h2>
            <p>
              Whether it's a project collaboration, job opportunity, or just a
              tech discussion, I'd love to hear from you!
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="mailto:vgirivardhan139@gmail.com"
                className={styles.primaryCtaButton}
              >
                📧 Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/girivardhan-velpula"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryCtaButton}
              >
                💼 Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
