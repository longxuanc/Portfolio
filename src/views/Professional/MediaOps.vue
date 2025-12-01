<template>
  <div class="esports-page">

    <header class="project-header">
      <h1 class="project-title">FPX Valorant Social Media Operator Summary</h1>
      <p class="project-subtitle">Design-Centric Role within Esports Project Operations</p>
    </header>

    <section class="section-block certification-summary">
      <h2>I. Official Certification Details</h2>

      <table class="data-table">
        <thead>
          <tr>
            <th class="red-header">Attribute</th>
            <th class="red-header">Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">Intern Name / ID</td>
            <td class="value-cell primary-color-text">Chenwei Yang / 310120200401142932</td>
          </tr>
          <tr>
            <td class="label-cell">Company / Division</td>
            <td class="value-cell">Shanghai FunPlus / FPX Project Operations</td>
          </tr>
          <tr>
            <td class="label-cell">Department</td>
            <td class="value-cell">FunPlus-Innovation-FPX-Project Operations</td>
          </tr>
          <tr>
            <td class="label-cell">Internship Start Date</td>
            <td class="value-cell">July 25, 2025 – Present</td>
          </tr>

        </tbody>
      </table>
    </section>

    <section class="section-block contribution-summary">
      <h2>II. Core Functions & Design Capabilities</h2>

      <ul class="contribution-list">
        <li>
          <h3 class="function-title">Design Execution:</h3>
          <p class="function-desc">
            Created all high-impact match graphics, player spotlights, and campaign visuals for FPX Valorant social
            channels. Ensured dynamic, on-brand aesthetic consistency.
          </p>
        </li>
        <li>
          <h3 class="function-title">Content Strategy:</h3>
          <p class="function-desc">
            Managed content planning and production schedule. Focused on driving organic engagement and utilizing unique
            visual storytelling tailored to the Valorant community.
          </p>
        </li>
        <li>
          <h3 class="function-title">Technical Proficiency:</h3>
          <p class="function-desc">
            Proficient in key graphic design tools (e.g., Photoshop, Illustrator) for rapid content deployment and
            visual asset creation.
          </p>
        </li>
      </ul>

    </section>

    <button @click="goBack" class="back-button" title="Go back to the previous page">
      <svg viewBox="0 0 1024 1024" width="18" height="18">
        <path
          d="M662.656 831.952c-7.392 0-14.784-2.816-20.352-8.384L342.368 521.824c-11.168-11.168-11.168-29.504 0-40.672L642.304 200.512c11.168-11.168 29.504-11.168 40.672 0 11.168 11.168 11.168 29.504 0 40.672L383.392 501.488l299.584 299.584c11.168 11.168 11.168 29.504 0 40.672-5.568 5.568-12.96 8.288-20.32 8.288z"
          fill="currentColor"></path>
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
.esports-page {

  height: 90vh;
  max-width: 100%;
  margin: 0;
  padding: 50px 20px;
  font-family: 'Inter', 'Arial', sans-serif;
  color: #CCCCCC;
  background-color: #121212;
  overflow-y: auto;
  line-height: 1.5;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

h1,
h2,
h3 {
  font-weight: 400;
  letter-spacing: -0.02em;
}

.project-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #333333;
}

.project-title {
  font-size: 2rem;
  color: #E21B35;
  margin-bottom: 5px;
}

.project-subtitle {
  font-size: 1.1rem;
  color: #999999;
}

h2 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #E21B35;
  padding-bottom: 5px;
  border-bottom: 1px solid #444444;
}

.section-block {
  margin-bottom: 30px;
  padding: 20px;
  background: #1A1A1A;
  border-radius: 6px;
}


.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  font-size: 0.95rem;
}

.red-header {
  background-color: #E21B35;
  color: #ffffff;
  padding: 10px 15px;
  text-align: left;
  font-weight: 400;
  /* No bold */
  letter-spacing: 0.05em;
  border: 1px solid #E21B35;
}

.label-cell {
  background-color: #222222;
  color: #999999;
  width: 35%;
  padding: 12px 15px;
  border: 1px solid #333333;
  text-align: left;
}

.value-cell {
  background-color: #1A1A1A;
  color: #ffffff;
  padding: 12px 15px;
  border: 1px solid #333333;
  text-align: left;
}

.value-cell.primary-color-text {
  color: #E21B35;
}

.contribution-summary {
  padding: 20px 30px;
}

.contribution-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.contribution-list li {
  margin-bottom: 20px;
  border-left: 3px solid #E21B35;
  padding-left: 15px;
}

.function-title {
  font-size: 1.1rem;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 5px;
}

.function-desc {
  font-size: 0.95rem;
  color: #CCCCCC;
  margin: 0;
}

.back-button {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 90px;
  height: 40px;
  background-color: #E21B35;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  box-shadow: 0 4px 15px rgba(226, 27, 53, 0.4);
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
  background-color: #B0152B;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(226, 27, 53, 0.6);
}

.back-button:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(226, 27, 53, 0.4);
}

.back-button svg {
  margin-right: 5px;
  fill: currentColor;
}

@media (max-width: 600px) {
  .esports-page {
    padding: 30px 10px;
  }

  .red-header,
  .label-cell,
  .value-cell {
    padding: 8px 10px;
    font-size: 0.85rem;
  }

  .function-desc {
    font-size: 0.9rem;
  }
}
</style>