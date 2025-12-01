<template>
  <div class="internship-showcase-page">
    <div class="internship-container">
      <header class="hero-section">
        <h1 class="title">Frontend Intern</h1>
        <p class="company">@ Shanghai Bintong Intelligent Technology Co., Ltd.</p>
      </header>

      <section class="info-card rounded-block gray-block">
        <h2>Overview and Details</h2>
        <div class="details-grid">
          <div>Name: Chenwei Yang</div>
          <div>University: East China University of Science and Technology</div>
          <div>Major: Computer Science and Technology</div>
          <div>Academic Year: Sophomore</div>
          <div>Duration: 2024.07 – 2024.09</div>
        </div>
      </section>

      <section class="key-learnings focused-section rounded-block yellow-block">
        <h2>Key Technical & Industry Learnings</h2>
        <div class="learning-list-wrapper">
          <ul>
            <li>
              Core Frontend Development: Participated in the development of multiple frontend modules, covering page layout, user interaction, and data rendering. Successfully realized core interface functions using HTML, CSS, and JavaScript based on design specifications.
            </li>
            <li>
              Advanced Vue Application: Learned the Vue.js framework and refactored parts of the pages, including utilizing Vue Router for Single Page Application (SPA) routing management and structuring components to achieve a highly modular and maintainable application style.
            </li>
            <li>
              Team Collaboration & Process Mastery: Quickly understood the company's product architecture and the front-end/back-end collaboration process. Mastered the project progression lifecycle, gaining deeper insight into frontend feature implementation, user experience optimization, and code standardization, including the importance of clear code commenting.
            </li>
            <li>
              Industry Insight & Strategy: Through research, gained a concrete understanding of the practical application of professional technology, and recognized the necessity and feasibility of digital transformation in traditional manufacturing. Developed a deeper comprehension of the national "14th Five-Year Plan" and offered personal perspectives on these topics.
            </li>
          </ul>
        </div>
      </section>

      <section class="mentor-evaluation rounded-block gray-block">
        <h2>Mentor & Performance Evaluation </h2>
        <div class="quote-box">
          <p class="new-addition-paragraph">
            During the internship, Chenwei Yang quickly adapted to the company environment and integrated into the team. He communicated diligently with colleagues and consistently completed assigned tasks effectively. The company assessed him against the standards of a full-time professional, and he performed excellently in all aspects, including daily attendance, work task assignment and completion assessment.
          </p>
          <hr style="border-top: 1px dashed #555555; margin: 15px 0;">
          <p>
            "Student Chenwei Yang demonstrated excellent technical competence and a proactive learning attitude. When faced with technical difficulties, he was able to find solutions by consulting documentation and online resources, showing strong self-learning capability."
          </p>
          <p>
            "He also possesses strong problem-solving skills. He was able to quickly pinpoint the root of technical challenges in the project and take effective measures to resolve them."
          </p>
          <p>
            "We hope he continues to maintain this positive attitude in his future studies and career."
          </p>
        </div>
        <p class="mentor-sign">
          — Kangbo Li (Mentor Signature) | August 12, 2024
        </p>
      </section>
    </div>

    <button @click="goBack" class="back-to-top-btn" title="back">
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M662.656 831.952c-7.392 0-14.784-2.816-20.352-8.384L342.368 521.824c-11.168-11.168-11.168-29.504 0-40.672L642.304 200.512c11.168-11.168 29.504-11.168 40.672 0 11.168 11.168 11.168 29.504 0 40.672L383.392 501.488l299.584 299.584c11.168 11.168 11.168 29.504 0 40.672-5.568 5.568-12.96 8.288-20.32 8.288z" fill="#121212"></path>
      </svg>
      back
    </button>
  </div>
</template>

<script setup>
const goBack = () => {
  window.history.back()
}
</script>

<style scoped>
:root {
  --border-radius-size: 10px;
}

.internship-container::-webkit-scrollbar {
  width: 8px;
  background-color: #121212;
}

.internship-container::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #3c3c3c;
  border: 2px solid #121212;
}

.internship-container::-webkit-scrollbar-thumb:hover {
  background-color: #ffc107;
}

.internship-showcase-page {
  background: #cccccc;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  color: #f5f5f5;
}

.internship-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6); 
  background: #121212;
  border-radius: var(--border-radius-size);
  padding: 20px;
  border: 1px solid #282828;
}

.rounded-block {
  border-radius: var(--border-radius-size);
  padding: 25px;
  margin-bottom: 25px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
.gray-block {
  background: #3c3c3c;
}
.yellow-block {
  background: #ffc107;
}

.hero-section {
  padding: 10px 20px;
  margin-bottom: 30px;
  border-bottom: 3px solid #ffc107;
}

h1 {
  color: #ffc107;
  font-weight: 1000;
}

.company {
  color: #b0b0b0;
}

h2 {
  color: #ffc107;
  border-left: 4px solid #ffc107;
  padding-left: 12px;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 600;
}

.info-card {
  padding-bottom: 20px;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  font-size: 1rem;
  line-height: 1.5;
}

.details-grid div {
  color: #f5f5f5;
  font-weight: 500;
}

.focused-section {
  color: #121212;
}

.focused-section h2 {
  color: #121212;
  border-left: 4px solid #121212;
}

.learning-list-wrapper ul {
  list-style: none;
  padding: 0;
  border-top: 1px dashed #121212;
  padding-top: 15px;
}

.learning-list-wrapper li {
  background: none; 
  padding: 10px 0;
  margin-bottom: 5px;
  border-bottom: 1px dashed rgba(18, 18, 18, 0.4); 
  font-weight: 400;
  line-height: 1.4;
  color: #121212;
}
.learning-list-wrapper li:last-child {
  border-bottom: none;
}

.mentor-evaluation {
  padding-top: 20px;
}

.quote-box {
  background: #282828;
  border-left: 5px solid #ffc107;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: var(--border-radius-size) 0 0 var(--border-radius-size); 
  line-height: 1.7;
  font-style: italic;
  color: #f5f5f5;
}

.quote-box p {
  font-weight: 400; 
}

.new-addition-paragraph {
  font-style: normal;
  color: #b0b0b0;
}

.quote-box hr {
  border-top: 1px dashed #555555;
  margin: 15px 0;
}

.mentor-sign {
  text-align: right;
  font-size: 1rem;
  color: #b0b0b0;
  margin-top: 15px;
}

.back-to-top-btn {
    position: fixed;
    right: 40px;
    bottom: 40px;
    width: 60px;
    height: 60px;
    background-color: #ffc107;
    color: #121212;
    border: none;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1;
    transition: background-color 0.3s, transform 0.2s;
    z-index: 1000;
}

.back-to-top-btn:hover {
    background-color: #ffd740;
    transform: translateY(-2px);
}

.back-to-top-btn:active {
    transform: translateY(0);
}

.back-to-top-btn svg {
    margin-bottom: 2px;
    fill: #121212;
}

@media (max-width: 768px) {
    .back-to-top-btn {
        right: 20px;
        bottom: 20px;
        width: 50px;
        height: 50px;
        font-size: 0.65rem;
    }
    .back-to-top-btn svg {
        width: 20px;
        height: 20px;
    }
}
</style>
