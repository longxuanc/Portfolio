<template>
  <div class="homepage-wrapper">
    <aside class="sidebar-info">
      <div class="profile-summary">
        <div class="photo-placeholder"><img src="../assets/photo.jpg" alt="" class="photo"></div>
        <div class="profile-info-text">
          <h1 class="name">Chenwei Yang</h1>
          <p class="title">East China University of Science and Technology</p>
          <p class="school">Computer Science</p>
        </div>
      </div>

      <div class="skills-block">
        <h2>Core Tech Stack</h2>

        <div class="static-skill-item">
          <span class="skill-label">Frontend</span>
          <span class="skill-value primary-color-text">HTML, Vue.js</span>
        </div>

        <div class="static-skill-item">
          <span class="skill-label">Programming</span>
          <span class="skill-value">C, C++, Java, Python</span>
        </div>

        <div class="static-skill-item">
          <span class="skill-label">Others</span>
          <span class="skill-value">PS,PR,Photo</span>
        </div>

        <div class="static-skill-item">
          <span class="skill-label">Languages</span>
          <span class="skill-value">Mandarin, English </span>
        </div>
      </div>

      <div class="contact-block">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:22013247@mail.ecust.edu.cn">22013247@mail.ecust.edu.cn</a></p>
        <p>Phone: <a href="tel:+8613795294517">(+86) 13795294517</a></p>
      </div>
    </aside>

    <section class="portfolio-index">
      <header class="index-header">
        <h1>Portfolio Index</h1>
      </header>

      <div class="project-grid">
        <RouterLink to="/academic/storyvision" class="static-project-card" style="--delay: 0ms;">
          <span class="card-tag tag-academic">ACADEMIC I</span>
          <h3 class="card-title">StoryVision AI</h3>
          <p class="card-subtitle">AI-Based Illustration Generation Platform (Frontend Architecture)</p>
        </RouterLink>

        <RouterLink to="/academic/course-a" class="static-project-card" style="--delay: 100ms;">
          <span class="card-tag tag-academic">ACADEMIC II</span>
          <h3 class="card-title">Practical Coursework A</h3>
          <p class="card-subtitle">3D Kart Racing Game Development • Unity</p>
        </RouterLink>

        <RouterLink to="/academic/course-b" class="static-project-card" style="--delay: 200ms;">
          <span class="card-tag tag-academic">ACADEMIC III</span>
          <h3 class="card-title">Practical Coursework B</h3>
          <p class="card-subtitle">“Want to Go to the Sea” Music Visualization • Processing 3D</p>
        </RouterLink>

        <RouterLink to="/research/publication" class="static-project-card" style="--delay: 300ms;">
          <span class="card-tag tag-research">RESEARCH</span>
          <h3 class="card-title">TCT-Loss: Time-Series Forecasting</h3>
          <p class="card-subtitle">ICASSP 2026 Submission – Shape-Aware Transformer Model</p>
        </RouterLink>

        <RouterLink to="/work/smart-factory" class="static-project-card" style="--delay: 400ms;">
          <span class="card-tag tag-professional">INTERNSHIP I</span>
          <h3 class="card-title">Smart Factory System</h3>
          <p class="card-subtitle">Frontend Modules for Real-Time Monitoring & Workflow</p>
        </RouterLink>

        <RouterLink to="/work/data-gov" class="static-project-card" style="--delay: 500ms;">
          <span class="card-tag tag-professional">INTERNSHIP II</span>
          <h3 class="card-title">Blockchain Data Operations</h3>
          <p class="card-subtitle">Data-on-Chain Processing & Workflow Optimization</p>
        </RouterLink>

        <RouterLink to="/work/media-ops" class="static-project-card" style="--delay: 600ms;">
          <span class="card-tag tag-professional">INTERNSHIP III</span>
          <h3 class="card-title">Esports Media Operations</h3>
          <p class="card-subtitle">Short Video Production & Content Matrix Management</p>
        </RouterLink>

        <RouterLink to="/about/gameplay" class="static-project-card" style="--delay: 700ms;">
          <span class="card-tag tag-comprehensive">Game</span>
          <h3 class="card-title">Game Experience</h3>
          <p class="card-subtitle">Play time</p>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes card-draw {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes sidebar-fade {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.homepage-wrapper {
  display: flex;
  gap: 40px;
padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.sidebar-info {
  flex-shrink: 0;
  width: 300px;
  padding: 20px;
  margin: auto;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: max-content;
  position: sticky;
  top: 100px;
  opacity: 0;
  transform: translateX(-20px);
  animation: sidebar-fade 0.5s ease-out forwards;
}

.profile-summary {
  text-align: center;
  margin-bottom: 30px;

}

.photo-placeholder {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #666;
}

.name {
  font-size: 1.8rem;
  margin-bottom: 5px;
  color: var(--text-color);
}

.title {
  font-weight: 600;
  color: #c5691e;
  margin-bottom: 5px;
  font-size: 19px;
}

.school {
  font-size: 23px;
  color: #4beaff;
}

.profile-info-text {
  text-align: center;
}

.skills-block,
.contact-block {
  padding: 15px 0;
  border-top: 1px solid #eee;
}

.skills-block h2,
.contact-block h2 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
}

.static-skill-item {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-size: 0.95rem;
  border-bottom: 1px dotted #e0e0e0;
}

.skill-label {
  font-weight: 500;
  color: #555;
}

.skill-value {
  font-weight: 600;
}

.contact-block a {
  color: #4FC08D;
  text-decoration: none;
  font-weight: 500;
}

.contact-block a:hover {
  text-decoration: underline;
}

.portfolio-index {
  flex-grow: 1;
}

.index-header {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--primary-color, #4FC08D);
}

.index-header h1 {
  font-size: 2.2rem;
  margin: 0 0 5px 0;
}

.index-header p {
  color: #666;
  font-size: 1rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.static-project-card {
  display: block;
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  height: 160px;
  background-color: white;
  border: 1px solid #ddd;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  opacity: 0;
  animation: card-draw 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: var(--delay, 0ms);
}

.static-project-card:hover {
  transform: translate(0, -5px) scale(1.01);
  box-shadow: 0 10px 25px rgba(0, 123, 255, 0.2);
  border-color: var(--primary-color, #4FC08D);
}

.card-title {
  font-size: 1.3rem;
  color: var(--text-color);
  margin-top: 10px;
  margin-bottom: 8px;
}

.card-subtitle {
  color: #666;
  font-size: 0.95rem;
}

.card-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.tag-academic {
  background-color: #e6f7ff;
  color: #007BFF;
}

.tag-professional {
  background-color: #fffbe6;
  color: #faad14;
}

.tag-comprehensive {
  background-color: #f0f2f5;
  color: #595959;
}

.tag-research {
  background-color: #e9e6ff;
  color: #6a0dad;
}

@media (min-width: 1001px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1000px) {
  .homepage-wrapper {
    flex-direction: column;
    gap: 20px;
    padding: 0 15px;
  }

  .sidebar-info {
    width: 100%;
    position: static;
    top: auto;
    transform: none;
    opacity: 1;
    animation: none;
  }

  .profile-summary {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }

  .photo-placeholder {
    margin: 0;
    flex-shrink: 0;
    width: 80px;
    height: 80px;
  }

  .profile-info-text {
    text-align: left;
  }

  .school {
    display: none;
  }

  .project-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 767px) {
    .project-grid {
      grid-template-columns: 1fr;
    }
  }

  .index-header {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .index-header h1 {
    font-size: 1.8rem;
  }
}
.photo{

  max-width:100px;
}
</style>
