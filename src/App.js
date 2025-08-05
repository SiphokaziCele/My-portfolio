import React from "react";
import styles from "./App.module.css";
import ParticlesBackground from "./components/ParticlesBackground";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

function App() {
  return (
    <>
    <ParticlesBackground />
  <div className={styles.container}>
{/* HERO SECTION */}
      <section className={styles.hero}>
        <h1 className={styles.name}>Siphokazi Halala Cele</h1>
        <p className={styles.role}>💻 Frontend Developer</p>
        <p className={styles.description}>
          I turn designs into beautiful, accessible, and scalable user experiences. Always building. Always learning.
        </p>
      </section>

{/* TECH STACK SECTION */}
      <section>
        <h2 className={styles.sectionTitle}>🚀 Tech Stack</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", fontSize: "2rem", color: "#3182ce" }}>
        
  <FaHtml5 className={styles.stackIcon} title="HTML5" />
  <FaCss3Alt className={styles.stackIcon} title="CSS3" />
  <FaJs className={styles.stackIcon} title="JavaScript" />
  <FaReact className={styles.stackIcon} title="React" />
  <FaGithub className={styles.stackIcon} title="GitHub" />

        </div>
      </section>

{/* EDUCATION SECTION */}
      <section>
        <h2 className={styles.sectionTitle}>🎓 Education</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Postgraduate Diploma in ICT: App Dev</h3>
            <p>CPUT – Current</p>
          </div>
          <div className={styles.card}>
            <h3>Advanced Diploma in ICT: App Dev</h3>
            <p>CPUT – 2024</p>
          </div>
          <div className={styles.card}>
            <h3>Diploma in ICT: App Dev</h3>
            <p>Walter Sisulu University – 2020–2022</p>
          </div>
          <div className={styles.card}>
            <h3>Grade 12</h3>
            <p>South Coast Academy – 2018</p>
          </div>
        </div>
      </section>
{/* PROJECTS SECTION */}
<section>
  <h2 className={styles.sectionTitle}>🛠️ Projects</h2>
  <div className={styles.cardGrid}>
    <div className={styles.card}>
      <h3>Advanced Calculator System</h3>
      <p>
        A powerful web-based calculator supporting basic and advanced operations like exponentiation, logarithms, graphing, and history export.
      </p>
      <ul className={styles.projectList}>
        <li>✅ Implements design patterns (Factory, Builder, Singleton)</li>
        <li>📈 Includes CI/CD with GitHub Actions</li>
        <li>🧠 Detailed UML, domain model, and traceability diagrams</li>
        <li>🤝 Open source collaboration and contributor support</li>
      </ul>
      <a href="https://github.com/your-username/advanced-calculator" target="_blank" rel="noopener noreferrer" className={styles.button}>
        🔗 View on GitHub
      </a>
    </div>
    <div className={styles.card}>
  <h3>Smartcardcare Medical App – Frontend</h3>
  <p>
    A healthcare management system designed to streamline patient management, appointments, and user access across medical roles. Built as a React frontend with role-based access control.
  </p>
  <ul className={styles.projectList}>
    <li>🩺 Role-based access for Doctors, Clerks, and Auditors</li>
    <li>📅 Appointment scheduling & smartcard creation</li>
    <li>👨‍⚕️ Doctors can manage patient data and appointments</li>
    <li>🛠️ React-based frontend connected to a full-stack system</li>
  </ul>
  <a href="https://github.com/CharltonAwesome1/hcmis_frontend" target="_blank" rel="noopener noreferrer" className={styles.button}>
    🔗 View on GitHub
  </a>
</div>


  </div>
</section>

{/* DOCUMENTS SECTION */}
      <section>
        <h2 className={styles.sectionTitle}>📎 Documents</h2>
        <p style={{ textAlign: "center" }}>Click below to view or download:</p>
        <div className={styles.buttons}>
          <a href="/cv.html" className={`${styles.button} ${styles.cv}`}>
            📄 View My CV
          </a>
          <a
            href="/documents/portfolio.pdf"
            target="_blank"
            rel="noreferrer"
            className={`${styles.button} ${styles.portfolio}`}
          >
            📁 View Portfolio
          </a>
        </div>
      </section>

{/* CONTACT BUTTON */}
      <a href="mailto:your.email@example.com" className={styles.email} title="Email me">
        📧
      </a>
    </div>
    </>
  );
}

export default App;
