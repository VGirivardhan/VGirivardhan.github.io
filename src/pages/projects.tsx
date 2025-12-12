import React from "react";
import Layout from "@theme/Layout";
import styles from "./projects.module.css";

export default function Projects(): JSX.Element {
  const projects = [
    {
      title: "🤖 Eywa - AI Support Agent",
      tools: [
        "Python",
        "Flask",
        "RAG",
        "LangChain",
        "LLMs",
        "Vector DB",
        "React",
      ],
      description:
        "A Level 1 AI support agent fine-tuned on Testsigma documentation to handle customer queries instantly with accurate, context-aware responses.",
      features: [
        "Retrieval-Augmented Generation: Leverages RAG with vector search for accurate responses",
        "Fine-tuned on Testsigma Docs: Trained specifically on product documentation for domain expertise",
        "Context-Aware Responses: Uses vector similarity search to find relevant documentation",
        "Instant Query Resolution: Automates minor issue resolution with immediate replies",
        "Support Workload Reduction: Reduces manual support effort by handling common queries",
        "Vector Database Integration: Efficient storage and retrieval of documentation embeddings",
        "LLM-Powered: Uses large language models for natural language understanding",
        "Production-Ready: Built for handling real customer queries at scale",
      ],
      githubLink: "https://github.com/VGirivardhan/Eywa-AI-Support-Agent",
      category: "AI Agent",
    },
    {
      title: "💱 Exchange Rate Service",
      tools: [
        "Golang",
        "Docker",
        "REST API",
        "Swagger",
        "Makefile",
        "In-Memory Caching",
        "Multi-API Integration",
      ],
      description:
        "A Go-based microservice for real-time and historical foreign exchange conversion with multi-API integration, robust error handling, and comprehensive documentation.",
      features: [
        "Real-time FX Conversion: Multi-API integration for accurate exchange rates",
        "In-Memory Caching: Redis-like caching with scheduled refresh to minimize API calls and improve response times",
        "Retry Logic: Exponential backoff with configurable retries for high reliability",
        "REST APIs: Clean API design with Swagger documentation for easy integration",
        "Health Monitoring: Built-in health checks and structured logging for production monitoring",
        "One-Command Setup: Docker and Makefile support for easy deployment",
        "Historical Data: Support for historical exchange rates with date-based queries",
      ],
      githubLink: "https://github.com/VGirivardhan/exchange-rate-service",
      category: "Microservice",
    },
    {
      title: "🏛️ Hall Management Center",
      tools: ["HTML", "CSS", "JavaScript", "Java", "Bootstrap", "SQL"],
      description:
        "A dynamic and secure solution designed for IIT community to manage student halls, mess, room allotments, and financial operations efficiently.",
      features: [
        "Admission Module: Effortless student admission management, room allotments, and personalized room allotment letter generation",
        "Mess and Rent Management: Simplified mess charges and room rent calculations with accurate financial tracking",
        "Amenities and Complaints: User-friendly web interface for student complaints categorized by type with quick warden response features",
        "Financial Management: Streamlined annual grant distribution, expenditure tracking, and comprehensive reporting",
        "Occupancy Tracking: Real-time room occupancy monitoring at hall and overall levels for efficient space management",
        "Salary and Leave Management: Hassle-free salary processing for temporary staff with easy leave management",
        "Expense Tracking: Seamless petty expense monitoring maintaining financial transparency for HMC operations",
      ],
      githubLink: "https://github.com/VGirivardhan/HMC",
      category: "Full Stack Web Application",
    },
    {
      title: "🏏 IPL Score Predictor",
      tools: ["Python", "Machine Learning", "Flask", "AWS", "HTML"],
      description:
        "A machine learning-powered web application for predicting IPL batting scores with enhanced model performance through feature engineering.",
      features: [
        "Machine Learning Model: Implemented robust Lasso regression model for accurate IPL batting score predictions",
        "Feature Engineering: Applied advanced feature engineering techniques to enhance model performance and accuracy",
        "AWS Deployment: Utilized AWS services for reliable and scalable model deployment",
        "Flask Backend: Built RESTful API using Flask framework for seamless prediction serving",
        "Interactive Interface: User-friendly web interface for real-time score predictions",
        "Model Optimization: Fine-tuned hyperparameters for optimal prediction accuracy",
      ],
      githubLink: "https://github.com/VGirivardhan/IPL-Score-Prediction",
      category: "Machine Learning",
    },
    {
      title: "🍽️ Restaurant Website",
      tools: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "SQL"],
      description:
        "A dynamic restaurant website with comprehensive features including responsive design, secure authentication, and seamless user experience.",
      features: [
        "Dynamic Content: Developed feature-rich restaurant website with real-time menu updates and ordering system",
        "Responsive Design: Ensured optimal user experience across all devices with Bootstrap integration",
        "Secure Authentication: Implemented robust user authentication and authorization system",
        "Database Integration: Utilized SQL for efficient data management and storage",
        "Interactive UI: Created engaging user interface with smooth navigation and animations",
      ],
      githubLink: "https://github.com/VGirivardhan/Restaurant",
      category: "Web Development",
    },
  ];

  return (
    <Layout
      title="Projects - Girivardhan Velpula"
      description="Explore my portfolio of backend systems, AI integration, and microservices. Each project demonstrates clean architecture, scalability, and production-ready implementation patterns."
    >
      <main className={styles.main}>
        {/* Header Section */}
        <section className={styles.header}>
          <div className={styles.container}>
            <h1>My Projects</h1>
            <p>
              Explore my portfolio of backend systems, AI integration, and
              microservices. Each project demonstrates clean architecture,
              scalability, and production-ready implementation patterns.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className={styles.projects}>
          <div className={styles.container}>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectHeader}>
                    <div className={styles.projectCategory}>
                      <span className={styles.categoryTag}>
                        {project.category}
                      </span>
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  </div>

                  <div className={styles.toolsSection}>
                    <h4>Technologies Used</h4>
                    <div className={styles.toolsGrid}>
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className={styles.toolTag}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.featuresSection}>
                    <h4>Key Features</h4>
                    <ul className={styles.featuresList}>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.projectActions}>
                    {project.architectureImage && (
                      <a
                        href={project.architectureImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.architectureButton}
                      >
                        🏗️ View Architecture
                      </a>
                    )}
                    <div className={styles.projectLinks}>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                      >
                        <img src="/img/github.png" alt="GitHub" />
                        View on GitHub
                      </a>
                      {project.documentationLink && (
                        <a
                          href={project.documentationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.docsLink}
                        >
                          📚 View Documentation
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Interested in Collaborating?</h2>
            <p>
              Let's work together on your next project. Open to discussing
              potential opportunities.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.ctaButton}>
                Get In Touch
              </a>
              <a
                href="https://leetcode.com/u/vgirivardhan139"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                View LeetCode Profile
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
