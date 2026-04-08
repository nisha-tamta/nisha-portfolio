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
        <h2>AWS Certified Developer | Salesforce Certified MuleSoft Developer | Salesforce Certified Platform Administrator</h2>
        <p className="hero-text">
          Backend Software Engineer with 6+ years of experience building Java-based backend systems,
          REST APIs, cloud applications, and enterprise integrations across AWS, MuleSoft, and Salesforce.
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
          I am a backend software engineer with 6+ years of experience building backend systems,
          REST APIs, and cloud-based applications. My background includes Java, Spring Boot, SQL,
          AWS, and enterprise integration work using MuleSoft, DataWeave, and Salesforce. I also
          hold certifications in AWS, Salesforce MuleSoft Development, and Salesforce Platform
          Administration. I focus on building reliable APIs, scalable backend services, and clean
          integration flows.
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
            <h4>Cloud</h4>
            <p>AWS Lambda, S3, SQS, SNS, EventBridge, RDS, CloudWatch, IAM</p>
          </div>

          <div className="card">
            <h4>Integration</h4>
            <p>MuleSoft, DataWeave, API-led Connectivity, Postman, Swagger, OAuth 2.0, JSON/XML</p>
          </div>

          <div className="card">
            <h4>Salesforce</h4>
            <p>Salesforce Integration, Connector, Bulk API, Composite API, Platform Events, CDC, External IDs</p>
          </div>

          <div className="card">
            <h4>Databases &amp; Tools</h4>
            <p>MySQL, PostgreSQL, Oracle, SQL Server, MongoDB, Git, Maven, Jenkins</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h3>Projects</h3>

        <div className="project-card">
          <div className="project-image-wrap">
            <img src="/project1-architecture.png" alt="Salesforce to ERP Customer Sync architecture diagram" />
          </div>
          <h4>Salesforce to ERP Customer Sync using MuleSoft</h4>
          <p>
            Built an end-to-end MuleSoft integration between Salesforce and a mock ERP system using
            process and system APIs. Implemented Salesforce Account upsert with External ID matching,
            DataWeave mappings, and error handling for reliable sync.
          </p>
          <p className="project-label">Impact</p>
          <p>Improved sync reliability and reduced duplicate record risk through External ID based upsert logic.</p>
          <div className="stack-tags">
            <span>MuleSoft 4</span>
            <span>DataWeave 2.0</span>
            <span>Salesforce Connector</span>
            <span>REST APIs</span>
            <span>Maven</span>
            <span>Java 17</span>
          </div>
          <p className="project-label">Highlights</p>
          <ul>
            <li>Built process and system API flow for account sync</li>
            <li>Implemented External ID based create/update logic</li>
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
            Built a MuleSoft flow to retrieve Salesforce Account data and sync transformed payloads
            to a mock ERP API. Implemented Salesforce SOAP authentication, REST retrieval, session
            handling, and end-to-end local testing.
          </p>
          <p className="project-label">Impact</p>
          <p>Enabled consistent downstream ERP synchronization using transformed Salesforce account data.</p>
          <div className="stack-tags">
            <span>MuleSoft</span>
            <span>Salesforce Connector</span>
            <span>SOAP</span>
            <span>REST</span>
            <span>DataWeave</span>
            <span>Postman</span>
          </div>
          <p className="project-label">Highlights</p>
          <ul>
            <li>Retrieved Salesforce Account data through MuleSoft flow</li>
            <li>Transformed payloads for downstream ERP sync</li>
            <li>Tested full integration locally end to end</li>
          </ul>
          <a className="project-button" href="https://github.com/nisha-tamta/salesforce-mulesoft-customer-sync" target="_blank" rel="noreferrer">View GitHub</a>
        </div>
      </section>

      <section id="certifications" className="section">
        <h3>Certifications</h3>
        <div className="grid">
          <div className="card">
            <h4>AWS Certified Developer – Associate (DVA-C02)</h4>
            <p>2026</p>
            <a href="https://www.credly.com/badges/8e9366de-ef05-4bad-aade-03cf65f6036b/public_url" target="_blank" rel="noreferrer">
              Verify Credential
            </a>
          </div>

          <div className="card">
            <h4>Salesforce Certified MuleSoft Developer</h4>
            <p>2026</p>
            <a href="https://trailhead.salesforce.com/en/credentials/verification/" target="_blank" rel="noreferrer">
              Verify Credential
            </a>
          </div>

          <div className="card">
            <h4>Salesforce Certified Platform Administrator</h4>
            <p>2026</p>
            <a href="https://trailhead.salesforce.com/en/credentials/verification/" target="_blank" rel="noreferrer">
              Verify Credential
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h3>Contact</h3>
        <div className="card">
          <p className="contact-note">Open to backend and integration engineering opportunities.</p>
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