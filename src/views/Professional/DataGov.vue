<template>
  <div class="internship-page">
    <header class="project-header">
      <h1 class="project-title">City Data and AI Governance Internship Project Summary</h1>
      <p class="project-subtitle">Core Contributions at Fengxian District Data Bureau Big Data Center</p>
      <div class="tag-row">
        <span class="tag tech">Big Data Governance</span>
        <span class="tag tech">Data Security</span>
        <span class="tag tech">Government AI</span>
        <span class="tag tech">Urban Emergency Response</span>
      </div>
    </header>

    <section class="context-section section-block">
      <h2>Internship Details and Recognition</h2>
      <div class="context-grid">
        <div class="context-item">
          <p class="label">Organization / Section:</p>
          <p class="value primary-color-text">Fengxian District Data Bureau Big Data Center / Data Governance Section</p>
        </div>
        <div class="context-item">
          <p class="label">Intern:</p>
          <p class="value">Chenwei Yang</p>
        </div>
        <div class="context-item">
          <p class="label"> University:</p>
          <p class="value">East China University of Science and Technology</p>
        </div>
        <div class="context-item grid-span-2">
          <p class="label">Official Evaluation Summary:</p>
          <p class="value award">
            Demonstrated outstanding performance, proactive work attitude, and successfully combined theoretical knowledge with practical tasks. Received unanimous recognition for excellent professional conduct and teamwork skills. (Duration: Mar 10, 2025 — Jun 6, 2025)
          </p>
        </div>
      </div>
    </section>

    <section class="contribution-section section-block">
      <h2>Key Project Contributions (Action Summary)</h2>
      <div class="contribution-list">
        <div class="contribution-item">
          <h3 class="contribution-title">Urban Emergency Data Support (Typhoon/Flood Prevention)</h3>
          <p class="contribution-desc">
            Mobilized and synchronized multi-source data streams (weather, traffic, infrastructure) for the City Atlas platform. Ensured high-timeliness data delivery to critical decision-making systems for disaster response.
          </p>
        </div>

        <div class="contribution-item">
          <h3 class="contribution-title">Data Governance and Trust Ledgering</h3>
          <p class="contribution-desc">
            Executed government data collection, cleaning, and standardization (ETL). Implemented encryption and blockchain ledgering for sensitive datasets to ensure data source traceability and integrity.
          </p>
        </div>
        
        <div class="contribution-item">
          <h3 class="contribution-title">Government AI Model Calibration</h3>
          <p class="contribution-desc">
            Assisted with the deployment and performance tuning of政务 AI models. Focused on input data preprocessing and rigorous output accuracy calibration to enhance the reliability of AI decision tools.
          </p>
        </div>
      </div>
    </section>
    
    <section class="tech-stack section-block">
      <h2>Technical Capabilities and Skills</h2>
      <div class="tech-cards">
        <div class="tech-card">
          <h4>Data Security</h4>
          <p>Applied encryption, anonymization, and blockchain fundamentals for data trustworthiness.</p>
        </div>
        <div class="tech-card">
          <h4>Big Data Engineering</h4>
          <p>Designed and optimized data ETL processes to support high-concurrency collection.</p>
        </div>
        <div class="tech-card">
          <h4>AI Implementation</h4>
          <p>Capable of model environment configuration, input pre-processing, and results verification.</p>
        </div>
        <div class="tech-card">
          <h4>Professional Conduct</h4>
          <p>Demonstrated excellent teamwork and efficient execution of tasks under pressure.</p>
        </div>
      </div>
    </section>

    <section class="conclusion-section section-block">
      <h2>Internship Key Takeaways</h2>
      <p class="abstract-intro">
        The internship provided a practical transition from theory to government big data application. I gained valuable experience in security compliance, urban data governance, and understanding the strategic value of big data in public service and emergency management.
      </p>
    </section>

    <button @click="goBack" class="back-button" title="Go back to the previous page">
      <svg viewBox="0 0 1024 1024" width="18" height="18">
        <path d="M662.656 831.952c-7.392 0-14.784-2.816-20.352-8.384L342.368 521.824c-11.168-11.168-11.168-29.504 0-40.672L642.304 200.512c11.168-11.168 29.504-11.168 40.672 0 11.168 11.168 11.168 29.504 0 40.672L383.392 501.488l299.584 299.584c11.168 11.168 11.168 29.504 0 40.672-5.568 5.568-12.96 8.288-20.32 8.288z" fill="currentColor"></path>
      </svg>
      BACK
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    alert('Cannot go back to the previous page. Please navigate manually.'); 
  }
}
</script>

<style scoped>
.internship-page {
  height: 90vh; 
  max-width: 100%;
  margin: 0 auto;
  padding: 50px 20px;
  font-family: 'SimSun', 'Microsoft YaHei', 'Inter', sans-serif;
  color: #333333; 
  background-color: #ffffff; 
  overflow-y: auto; 
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1); 
  line-height: 1.8;
  border-radius: 8px;
}

h1, h2, h3, h4 {
  color: #333333;
  font-family: 'SimSun', 'Microsoft YaHei', serif;
  font-weight: 400;
}

h2 {
  font-size: 1.7rem;
  margin-bottom: 25px;
  border-bottom: 3px solid #C52026; 
  padding-bottom: 5px;
  color: #C52026;
}

.section-block {
  margin-bottom: 40px;
  padding: 30px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #eeeeee;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.abstract-intro {
  font-size: 1.05rem;
  color: #4b5563;
  margin-top: 15px;
  padding: 15px;
  border-left: 5px solid #C52026; 
  background-color: #fff0f0; 
  border-radius: 4px;
  line-height: 1.6;
}

.project-header {
  text-align: center;
  margin-bottom: 50px;
  padding: 20px;
  border-bottom: 1px solid #eeeeee;
}

.project-title {
  font-size: 2.8rem;
  color: #C52026; 
  margin-bottom: 5px;
}

.project-subtitle {
  font-size: 1.1rem;
  color: #333333;
  margin-bottom: 20px;
}

.tag-row {
  margin-top: 20px;
  margin-bottom: 30px;
}

.tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px; 
  font-size: 0.8rem;
  font-weight: 400;
  margin-right: 6px;
  color: #C52026;
  background-color: #fff0f0;
  border: 1px solid #C52026;
  letter-spacing: 0.5px;
}

.context-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.context-item {
  padding: 12px 18px;
  background-color: #f5f5f5; 
  border-radius: 4px;
  border-left: 4px solid #C52026; 
}

.context-item.grid-span-2 {
  grid-column: span 2;
}

@media (max-width: 992px) {
  .context-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 993px) {
  .context-item.grid-span-2 {
    grid-column: span 3;
  }
}

.context-item .label {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 4px;
}

.context-item .value {
  font-size: 1rem;
  color: #333333;
}

.context-item .value.primary-color-text {
  color: #C52026;
}

.context-item .value.award {
  color: #333333;
  font-style: italic;
  line-height: 1.5;
  border: 1px dashed #cccccc;
  padding: 8px;
  background-color: #fffafb;
}

.contribution-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.contribution-item {
  padding: 20px;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  background-color: #ffffff;
  transition: border-color 0.3s, background-color 0.3s;
  border-top: 5px solid #C52026; 
}

.contribution-item:hover {
  background-color: #fffafb;
  border-color: #C52026;
}

.contribution-title {
  font-size: 1.2rem;
  color: #333333;
  margin-top: 0;
  margin-bottom: 8px;
  padding-bottom: 5px;
  border-bottom: 1px solid #f0f0f0;
}

.contribution-desc {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.5;
}

.tech-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.tech-card {
  padding: 15px;
  border-radius: 4px;
  background-color: #f5f5f5;
  border-left: 3px solid #C52026;
  transition: background-color 0.3s;
}

.tech-card:hover {
  background-color: #eeeeee;
}

.tech-card h4 {
  font-size: 1rem;
  color: #C52026;
  margin-top: 0;
  margin-bottom: 5px;
}

.tech-card p {
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .tech-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 500px) {
  .tech-cards {
    grid-template-columns: 1fr;
  }
}

.back-button {
  position: fixed; 
  right: 30px; 
  bottom: 30px; 
  width: 90px;
  height: 40px;
  background-color: #C52026; 
  color: #ffffff; 
  border: none;
  border-radius: 6px; 
  box-shadow: 0 4px 10px rgba(197, 32, 38, 0.4);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 400; 
  transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
  z-index: 1000; 
}

.back-button:hover {
  background-color: #9e1a1f; 
  transform: translateY(-2px); 
  box-shadow: 0 6px 15px rgba(197, 32, 38, 0.6);
}

.back-button:active {
  transform: translateY(0); 
  box-shadow: 0 4px 10px rgba(197, 32, 38, 0.4);
}

.back-button svg {
  margin-right: 5px;
  fill: currentColor; 
}
</style>
