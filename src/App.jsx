import './index.css'

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">Nisha Tamta</div>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="tag">Java Backend Developer</p>
        <h1>Nisha Tamta</h1>
        <h2>AWS Certified | MuleSoft & Salesforce Integration</h2>
        <p className="hero-text">
          Backend Software Engineer with 6+ years of experience building scalable backend systems,
          REST APIs, and cloud-based applications using Java, Spring Boot, SQL, AWS, MuleSoft,
          and Salesforce integration patterns.
        </p>
        <div className="hero-buttons">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          <a href="https://github.com/nisha-tamta" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/javadevelopernisha" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div>
      </section>

      <section id="about" className="section">
        <h3>About</h3>
        <p>
          I am a backend software engineer with 6+ years of experience building backend systems,
          REST APIs, and cloud-based applications. My background includes Java, Spring Boot, SQL,
          AWS, and enterprise integration work using MuleSoft, DataWeave, and Salesforce. I focus
          on building reliable APIs, scalable backend services, and clean integration flows.
        </p>
      </section>

      <section id="skills" className="section">
        <h3>Skills</h3>
        <div className="grid">
          <div className="card">
            <h4>Backend</h4>
            <p>Java, Spring Boot, Hibernate, JPA, Microservices, REST APIs</p>
          </div>
          <div className="card">
            <h4>Cloud</h4>
            <p>AWS Lambda, SQS, SNS, EventBridge, S3, RDS, CloudWatch, IAM</p>
          </div>
          <div className="card">
            <h4>Integration</h4>
            <p>MuleSoft, API-led Connectivity, DataWeave, Postman, Swagger, JSON, XML, OAuth 2.0</p>
          </div>
          <div className="card">
            <h4>Salesforce</h4>
            <p>Salesforce Integration, Salesforce Connector, Bulk API, Composite API, Platform Events, CDC, External IDs</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h3>Projects</h3>

        <div className="project-card">
          <img src="/project1-architecture.png" alt="Salesforce to ERP Customer Sync architecture diagram" />
          <h4>Salesforce to ERP Customer Sync using MuleSoft</h4>
          <p>
            Built an end-to-end MuleSoft integration between Salesforce and a mock ERP system using
            process and system APIs. Implemented Salesforce Account upsert with External ID matching,
            DataWeave mappings, and error handling for reliable sync.
          </p>
          <p><strong>Tech Stack:</strong> MuleSoft 4, DataWeave 2.0, Salesforce Connector, REST APIs, Maven, Java 17</p>
          <ul>
            <li>Built process and system API flow for account sync</li>
            <li>Implemented External ID based create/update logic</li>
            <li>Added validation, transformation, and structured error handling</li>
          </ul>
          <a href="https://github.com/nisha-tamta/salesforce-mulesoft-account-sync" target="_blank" rel="noreferrer">View GitHub</a>
        </div>

        <div className="project-card">
          <img src="/project2-architecture.png" alt="Salesforce to MuleSoft ERP Account Sync flow screenshot" />
          <h4>Salesforce to MuleSoft ERP Account Sync</h4>
          <p>
            Built a MuleSoft flow to retrieve Salesforce Account data and sync transformed payloads
            to a mock ERP API. Implemented Salesforce SOAP authentication, REST retrieval, session
            handling, and end-to-end local testing.
          </p>
          <p><strong>Tech Stack:</strong> MuleSoft, Salesforce Connector, SOAP, REST, DataWeave, Postman</p>
          <ul>
            <li>Retrieved Salesforce Account data through MuleSoft flow</li>
            <li>Transformed payloads for downstream ERP sync</li>
            <li>Tested full integration locally end to end</li>
          </ul>
          <a href="https://github.com/nisha-tamta/salesforce-mulesoft-customer-sync" target="_blank" rel="noreferrer">View GitHub</a>
        </div>
      </section>

      <section id="certifications" className="section">
        <h3>Certifications</h3>
        <div className="card">
          <p>AWS Certified Developer – Associate (DVA-C02) | 2026</p>
          <p>Salesforce Certified MuleSoft Developer | 2026</p>
          <p>Salesforce Certified Platform Administrator | 2026</p>
        </div>
      </section>

      <section id="contact" className="section">
        <h3>Contact</h3>
        <div className="card">
          <p>Email: nisha.tamta199@gmail.com</p>
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