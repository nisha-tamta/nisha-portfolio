import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [showStickyName, setShowStickyName] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 220
      setShowStickyName(window.scrollY > triggerPoint)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="site">
      <header className="navbar">
        <div className={`logo ${showStickyName ? 'logo-visible' : 'logo-hidden'}`}>
          Nisha Tamta
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="tag">Java Backend Developer | Integration Engineer | Java Full Stack Developer</p>
        <h1>Nisha Tamta</h1>
        <h2>AWS Certified Developer | MuleSoft Certified | Salesforce Certified Administrator</h2>
        <p className="hero-text">
          Software Engineer with 6+ years of experience building scalable Java backend services, REST APIs,
          and event-driven systems using Java, Spring Boot, and AWS. Hands-on MuleSoft integration and
          Salesforce API experience. Full stack capable with React.
        </p>
        <div className="hero-buttons">
          <a className="primary-button" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          <a className="secondary-button" href="https://github.com/nisha-tamta" target="_blank" rel="noreferrer">GitHub</a>
          <a className="secondary-button" href="https://www.linkedin.com/in/javadevelopernisha" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="secondary-button" href="#contact">Contact</a>
        </div>
      </section>

      <section id="about" className="section">
        <h3>About</h3>
        <p>
          I am a software engineer with 6+ years of experience building scalable backend services,
          REST APIs, cloud-based applications, and enterprise integrations. My background includes Java,
          Spring Boot, SQL, AWS, MuleSoft, Salesforce, and React. I focus on building reliable systems,
          clean data flows, and maintainable end-to-end solutions across backend, integration, and full stack applications.
        </p>
      </section>

      <section id="skills" className="section">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div className="card">
            <h4>Backend</h4>
            <p>Java, Spring Boot, Hibernate, JPA, Microservices, REST APIs</p>
          </div>

          <div className="card">
            <h4>Frontend</h4>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className="card">
            <h4>Cloud</h4>
            <p>AWS Lambda, S3, SQS, SNS, EventBridge, RDS, CloudWatch, IAM</p>
          </div>

          <div className="card">
            <h4>Integration</h4>
            <p>MuleSoft, DataWeave, API-led Connectivity, Postman, Swagger, OAuth 2.0, JSON, XML</p>
          </div>

          <div className="card">
            <h4>Salesforce</h4>
            <p>Salesforce Integration, Salesforce Connector, Bulk API, Composite API, Platform Events, CDC, External IDs</p>
          </div>

          <div className="card">
            <h4>Databases &amp; Tools</h4>
            <p>MySQL, PostgreSQL, Oracle, SQL Server, MongoDB, Git, Maven, Gradle, Jenkins, JUnit</p>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <h3>Experience Highlights</h3>

        <div className="experience-card">
          <h4>IQM Ad-Tech Platform</h4>
          <p>
            Built backend solutions for IQM, an ad-tech platform, using Java, SQL, Snowflake, and AWS
            to improve data processing and storage efficiency. Designed AWS Lambda-based serverless
            components and integrated services such as EventBridge, SNS, SQS, SES, and S3 to support
            scalable event-driven workflows.
          </p>

          <div className="stack-tags">
            <span>Java</span>
            <span>SQL</span>
            <span>Snowflake</span>
            <span>AWS Lambda</span>
            <span>EventBridge</span>
            <span>SNS</span>
            <span>SQS</span>
            <span>SES</span>
            <span>S3</span>
          </div>

          <ul>
            <li>Designed an async creative upload pipeline on AWS Lambda, SQS, and S3 eliminating upload
              timeouts by offloading thumbnail generation and multi-resolution rendering to background workers</li>
            <li>Engineered idempotent retry logic and explicit state machine (uploaded → processing →
              partially failed → completed) to ensure consistency under async retries</li>
            <li>Optimized Snowflake and SQL queries to improve backend data processing throughput</li>
          </ul>
        </div>

        <div className="experience-card">
          <h4>PK Discovery — Dataguise, A PKWARE Company</h4>
          <p>
            Developed backend features for a sensitive data discovery and masking platform
            with compliance support for HIPAA, PCI-DSS, and PHI across Oracle, SQL Server,
            and PostgreSQL. Engineered multi-threaded Java backend for scanning semi-structured
            JSON and XML payloads with optimized resource allocation and thread-safety.
          </p>

          <div className="stack-tags">
            <span>Java</span>
            <span>Multithreading</span>
            <span>Oracle</span>
            <span>SQL Server</span>
            <span>PostgreSQL</span>
            <span>JSON</span>
            <span>XML</span>
          </div>

          <ul>
            <li>Developed backend features for sensitive data discovery and masking with HIPAA, PCI-DSS, and PHI compliance</li>
            <li>Engineered multi-threaded Java programs for scanning JSON and XML payloads across heterogeneous databases</li>
            <li>Contributed to design, development, and testing of enterprise data-security workflows</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section">
        <h3>Projects</h3>

        <div className="project-card">
          <h4>Ad Creative Processing Pipeline | IQM Platform (Work Project)</h4>
          <p>
            Designed an async creative upload pipeline on AWS Lambda, SQS, and S3,
            eliminating upload timeouts by offloading thumbnail generation and
            multi-resolution rendering to background workers.
          </p>
          <p className="project-impact">
            Reduced API response latency and ensured data consistency through
            idempotent retry logic and explicit state tracking.
          </p>
          <div className="stack-tags">
            <span>Java</span>
            <span>AWS Lambda</span>
            <span>SQS</span>
            <span>S3</span>
            <span>EventBridge</span>
            <span>Spring Boot</span>
          </div>
          <ul>
            <li>Built Java backend services and REST APIs for IQM, a programmatic ad-tech platform processing high-volume creative and campaign data</li>
            <li>Designed event-driven serverless workflows on AWS Lambda integrated with EventBridge, SQS, SNS, SES, and S3 for resilient async processing</li>
            <li>Optimized Snowflake and SQL queries to improve backend data processing throughput</li>
          </ul>
        </div>

        <div className="project-card">
          <div className="project-image-wrap">
            <img src="/project1-architecture.png" alt="Salesforce to ERP Customer Sync architecture diagram" />
          </div>
          <h4>Salesforce to ERP Customer Sync using MuleSoft</h4>
          <p>
            Built an end-to-end MuleSoft integration between Salesforce and a mock ERP system using process
            and system APIs. Implemented Salesforce Account upsert with External ID matching,
            DataWeave transformations, and structured error handling to support reliable synchronization.
          </p>

          <p className="project-impact">
            Improved synchronization reliability and reduced duplicate record risk through External ID–based upsert logic.
          </p>

          <div className="stack-tags">
            <span>MuleSoft 4</span>
            <span>DataWeave 2.0</span>
            <span>Salesforce Connector</span>
            <span>REST APIs</span>
            <span>Maven</span>
            <span>Java 17</span>
          </div>

          <ul>
            <li>Built process and system API flows for account synchronization</li>
            <li>Implemented External ID–based create/update logic</li>
            <li>Added validation, transformation, and structured error handling</li>
          </ul>

          <a className="project-button" href="https://github.com/nisha-tamta/salesforce-mulesoft-account-sync" target="_blank" rel="noreferrer">View GitHub</a>
        </div>

        <div className="project-card">
          <div className="project-image-wrap">
            <img src="/project2-architecture.png" alt="Salesforce to MuleSoft ERP Account Sync flow screenshot" />
          </div>
          <h4>Salesforce to MuleSoft ERP Account Sync</h4>
          <p>
            Built a MuleSoft flow to retrieve Salesforce Account data and synchronize transformed payloads
            with a mock ERP API. Implemented Salesforce SOAP authentication, REST-based retrieval,
            session handling, and end-to-end local testing.
          </p>

          <p className="project-impact">
            Enabled consistent ERP synchronization using transformed Salesforce Account data.
          </p>

          <div className="stack-tags">
            <span>MuleSoft</span>
            <span>Salesforce Connector</span>
            <span>SOAP</span>
            <span>REST</span>
            <span>DataWeave</span>
            <span>Postman</span>
          </div>

          <ul>
            <li>Retrieved Salesforce Account data through a MuleSoft integration flow</li>
            <li>Transformed payloads for downstream ERP synchronization</li>
            <li>Tested the integration locally end to end</li>
          </ul>

          <a className="project-button" href="https://github.com/nisha-tamta/salesforce-mulesoft-customer-sync" target="_blank" rel="noreferrer">View GitHub</a>
        </div>
      </section>

      <section id="certifications" className="section">
        <h3>Certifications</h3>
        <div className="grid">
          <div className="card">
            <h4>AWS Certified Developer — Associate (DVA-C02)</h4>
            <p>Issued 2026 · Amazon Web Services</p>
            <a
              href="https://www.credly.com/badges/8e9366de-ef05-4bad-aade-03cf65f6036b/public_url"
              target="_blank"
              rel="noreferrer"
            >
              Verify on Credly ↗
            </a>
          </div>

          <div className="card">
            <h4>Salesforce Certified MuleSoft Developer</h4>
            <p>Issued 2026 · Salesforce / MuleSoft</p>
            <a
              href="https://trailhead.salesforce.com/en/credentials/verification/"
              target="_blank"
              rel="noreferrer"
            >
              Verify on Trailhead ↗
            </a>
          </div>

          <div className="card">
            <h4>Salesforce Certified Platform Administrator</h4>
            <p>Issued 2026 · Salesforce</p>
            <a
              href="https://trailhead.salesforce.com/en/credentials/verification/"
              target="_blank"
              rel="noreferrer"
            >
              Verify on Trailhead ↗
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h3>Contact</h3>
        <div className="card">
          <p className="contact-note">Open to Java backend, integration engineering, and full stack opportunities.</p>
          <p>
            Email:{' '}
            <a href="mailto:nisha.tamta199@gmail.com">
              nisha.tamta199@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/javadevelopernisha" target="_blank" rel="noreferrer">
              linkedin.com/in/javadevelopernisha
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a href="https://github.com/nisha-tamta" target="_blank" rel="noreferrer">
              github.com/nisha-tamta
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default App