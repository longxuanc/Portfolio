<template>
  <div class="project-intro-page">

    <header class="project-header">
      <h1 class="project-title">StoryVision AI: Intelligent Creation Platform for Story Visualization</h1>
      <p class="project-subtitle">Graduation Project for ECUST's Innovation & Entrepreneurship Training Program</p>

      <div class="tag-row">
        <span class="tag tech">VUE 3</span>
        <span class="tag tech">FRONTEND ARCHITECTURE</span>
        <span class="tag tech">PROMPT ENGINEERING</span>
        <span class="tag tech">DEEPSEEK & STABLE DIFFUSION</span>
        <span class="tag tech">AIGC</span>
      </div>
      <p class="abstract-intro">
        StoryVision AI is a pioneering Web platform built upon the combined power of Stable Diffusion and GPT technology
        (specifically DeepSeek). It is meticulously engineered to efficiently convert narrative text into sequential,
        high-quality, and artistically expressive visual illustrations. Our commitment is to provide a fluid, intuitive,
        and feature-rich online experience for content creators.
      </p>
    </header>

    <section class="context-section section-block">
      <h2>Project Context & Credentials</h2>
      <div class="context-grid">
        <div class="context-item">
          <p class="label">Program:</p>
          <p class="value bold">ECUST Innovation & Entrepreneurship Training Program (IETP)</p>
        </div>
        <div class="context-item">
          <p class="label">Project Title (Official):</p>
          <p class="value">StoryVisions AI - A Web-based AI Illustration Generation Project based on StableDiffusion</p>
        </div>
        <div class="context-item">
          <p class="label">University / Duration:</p>
          <p class="value">East China University of Science and Technology (ECUST) / May 2024 - May 2025</p>
        </div>
        <div class="context-item">
          <p class="label">Key Achievement:</p>
          <p class="value award">Second Prize in the 2024 ECUST "Smart Payment Grand Prix"</p>
        </div>
      </div>
    </section>

    <section class="contribution-section section-block">
      <h2>My Core Responsibilities and Contributions</h2>
      <div class="contribution-cards">

        <div class="card frontend-card">
          <p class="card-label">Development Focus: Front-end System</p>
          <h3>Vue Frontend Architecture & Componentization</h3>
          <p>
            Led the implementation of the platform's frontend using the  Vue 3 framework   combined with modern
            development practices (Composition API). The initial setup prioritized system stability and scalability.
          </p>
          <p class="sub-paragraph">
            The core work involved establishing a clean, maintainable architecture through extensive   **component-based
            development**  . I developed a suite of reusable components (e.g., query boxes, data tables, modal windows)
            to ensure code consistency, readability, and efficient maintenance across the Home, Gallery, and Creation
            Center modules. Optimized the   **Vue Router**   system with dynamic loading and navigation guards to
            enhance application performance and user interaction flow.
          </p>
        </div>

        <div class="card ui-ux-card">
          <p class="card-label">Design & Optimization Focus: User Experience</p>
          <h3>User Experience (UX) & Visual Layer Optimization</h3>
          <p>
            Emphasized a   **user-centric design approach**   by thoroughly analyzing user interaction paths and
            use-case scenarios for each page.
          </p>
          <p class="sub-paragraph">
            I meticulously designed the   **visual hierarchy**  , employing subtle techniques like color partitioning,
            layered shadowing, and hover animations to improve data interpretability in display modules. Crucially, I
            integrated smooth   **interactive effects**   (e.g., fade-in/fade-out, slide transitions) into form
            interactions and notification systems to provide fluid system feedback and an overall premium user
            experience, recognizing UX as critical for functional adoption.
          </p>
        </div>

        <div class="card prompt-card">
          <p class="card-label">AI Integration Focus: Prompt Engineering</p>
          <h3>AI Workflow & Prompt Engineering Support</h3>
          <p>
            Actively participated in the integration and debugging of the   **DeepSeek-FLUX**   model, a key component
            in generating highly coherent imagery.
          </p>
          <p class="sub-paragraph">
            My specific role involved optimizing the   **Prompt Engineering workflow**  . This included iterative
            debugging and refinement of the pipeline to ensure that the initial narrative text is efficiently and
            accurately translated into a series of precise, high-quality image generation instructions. This process was
            paramount in guaranteeing the   **semantic coherence, visual consistency, and logical sequencing**  
            required for a multi-scene illustration set.
          </p>
        </div>
      </div>
    </section>

    <section class="workflow-section section-block">
      <h2>Core AI Workflow: Bridging Narrative and Vision</h2>
      <p>
        StoryVision AI utilizes a unique two-stage generation pipeline, integrating the analytical power of a large
        language model with the visual creativity of a diffusion model to ensure superior story coherence.
      </p>

      <div class="workflow-grid">
        <div class="workflow-step deepseek-step">
          <span class="step-number">STEP 1</span>
          <h3 class="step-title">DeepSeek Model: Text Analysis and Decomposition</h3>
          <p>
            The project employs the   **DeepSeek Large Language Model**   to process the user's input story text. This
            involves:
          <ul class="process-list">
            <li>  **Feature Extraction:**   Identifying key narrative elements, setting, style cues, and emotional tones
              present in the text.</li>
            <li>  **Scene Segmentation:**   Logically splitting the overall story into distinct, chronologically ordered
              scenes.</li>
            <li>  **Prompt Generation:**   Converting the extracted features for each scene into sophisticated,
              multi-faceted prompts optimized for image generation, ensuring they encode specific instructions for
              character and environment preservation.</li>
          </ul>
          </p>
        </div>

        <div class="workflow-step diffusion-step">
          <span class="step-number">STEP 2</span>
          <h3 class="step-title">Stable Diffusion: Coherent Image Generation</h3>
          <p>
            The generated scene-specific prompts are then fed sequentially into the   **Stable Diffusion model**  . The
            process focuses on critical output factors:
          <ul class="process-list">
            <li>  **Style Unification:**   Utilizing control mechanisms (like LORA/ControlNet, implied by FLUX) to
              ensure a single artistic style is maintained across all generated images.</li>
            <li>  **Logical Sequencing:**   The prompt pipeline is constructed to guide the model through the narrative
              progression.</li>
            <li>  **Character Consistency:**   Advanced techniques are applied during generation to retain consistent
              character features (face, clothing, appearance) throughout the entire story illustration set.</li>
          </ul>
          </p>
        </div>
      </div>
    </section>


    <section class="project-summary section-block">
      <h2>Project Features & Innovation Highlights</h2>
      <p>
        The StoryVision AI platform is dedicated to solving the complex issues of traditional illustration: high cost,
        long cycles, and high professional barriers. By organically combining Stable Diffusion, the FLUX model, and
        DeepSeek, we provide users with high-quality, high-artistry visual output from simple text input, significantly
        reducing the technical entry barrier and time investment in digital art creation.
      </p>

      <div class="innovation-list">
        <div class="item">
          <span class="point-text">01</span>
          <p><strong>Coherent Continuous Illustration Generation:</strong> Utilizes the optimized DeepSeek-FLUX-Stable
            Diffusion pipeline to deliver superior scene continuity, maintaining visual style and detail, alongside  
            **strong character and environment consistency**   across multiple images—ideal for serialized content and
            storyboarding.</p>
        </div>
        <div class="item">
          <span class="point-text">02</span>
          <p><strong>Advanced Text-to-Prompt Logic:</strong> Leverages the   **DeepSeek**   language model for
            intelligent narrative analysis, feature extraction, and automated prompt decomposition, moving beyond simple
            keyword generation to create truly cohesive visual sequences.</p>
        </div>
        <div class="item">
          <span class="point-text">03</span>
          <p><strong>Low Barrier to Entry and High Accessibility:</strong> The platform offers a sleek, user-friendly
            Web UI supporting   **intuitive navigation and one-click generation**  , ensuring high-quality art creation
            is accessible to non-professional users and individual content creators.</p>
        </div>
        <div class="item">
          <span class="point-text">04</span>
          <p><strong>Highly Scalable & Interactive Platform:</strong> The modern, interactive Web application supports
            comprehensive user activities—browsing, creation, management, and sharing of images/sets—positioning
            StoryVision AI as a key tool for enhancing interactive content in publishing and education.</p>
        </div>
      </div>
    </section>

    <section class="image-showcase-section section-block">
      <h2>Visual Showcase: Story Illustration Output</h2>
      <p class="showcase-description">
        This section represents the high-quality, multi-scene visual output achieved through the proprietary
        DeepSeek-Stable Diffusion workflow. Use the arrows or dots below to cycle through the sequential illustrations.
      </p>

      <div class="carousel-container">
        <div class="carousel-slide-wrapper">

          <div class="carousel-slide">
            <img :src="currentSlide.src" :alt="currentSlide.caption" class="carousel-img">
            <div class="caption-overlay">{{ currentSlide.caption }} ({{ currentSlideIndex + 1 }} / {{ slides.length }})
            </div>
          </div>

          <button class="nav-button prev" @click="prevSlide" aria-label="Previous Slide"> &lt; </button>
          <button class="nav-button next" @click="nextSlide" aria-label="Next Slide"> &gt; </button>
        </div>

        <div class="carousel-indicators">
          <span v-for="(slide, index) in slides" :key="slide.id" :class="{ active: index === currentSlideIndex }"
            @click="currentSlideIndex = index" class="indicator-dot" :aria-label="'Go to slide ' + (index + 1)"></span>
        </div>
      </div>
    </section>

    <section class="tech-stack section-block">
      <h2>Technical Highlights & Development Status</h2>
      <div class="tech-grid">
        <div class="tech-item">
          <p class="tech-label">AI Core</p>
          <h3>Model Integration</h3>
          <p>Combines   **Stable Diffusion**   for image generation with the   **DeepSeek (GPT)**   large language model
            for advanced text analysis and prompt decomposition.</p>
        </div>
        <div class="tech-item">
          <p class="tech-label">System Architecture</p>
          <h3>Full Stack Technology</h3>
          <p>Frontend:   **Vue 3 (Composition API)**  ; Backend:   **Spring Boot (RESTful API)**  ; Database:  
            **MySQL** (Core schema designed and implemented for user and image data).</p>
        </div>
      </div>
    </section>

    <section class="conclusion-section section-block">
      <h2>Project Conclusion and Personal Takeaways</h2>
      <p class="abstract-intro">
        This Innovation & Entrepreneurship project served as a crucial transition from theoretical learning to
        practical, real-world development. It not only solidified my technical mastery but also enhanced my professional
        soft skills.
      </p>

      <div class="takeaway-points">
        <div class="takeaway-item">
          <h4 class="takeaway-title">Systematic Frontend Mastery</h4>
          <p>Achieved a systematic understanding of the entire Vue-based development lifecycle, from initial environment
            setup and component design principles to complex state management and performance optimization (e.g., lazy
            loading, virtual scrolling potential). I realized the true value of code modularity and logic decoupling in
            maintaining large-scale applications.</p>
        </div>
        <div class="takeaway-item">
          <h4 class="takeaway-title">User-Centric Design Philosophy</h4>
          <p>Developed a keen awareness that design and user experience are not secondary features but prerequisites for
            functional efficacy. The project taught me to pay meticulous attention to detail—down to pixel alignment and
            the micro-tuning of transition speeds—all reflecting respect for the end-user.</p>
        </div>
        <div class="takeaway-item">
          <h4 class="takeaway-title">Collaborative & Professional Acumen</h4>
          <p>Gained invaluable experience in integrating individual tasks within a broader team schedule. This required
            proactive communication, rapid feedback loops, and ensuring seamless module integration with the backend
            team. This exercise significantly improved my professional conduct and problem-solving abilities under
            production deadlines.</p>
        </div>
      </div>
    </section>

    <button @click="goBack" class="back-button" title="返回上一页">
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2716" width="24" height="24">
        <path
          d="M662.656 831.952c-7.392 0-14.784-2.816-20.352-8.384L342.368 521.824c-11.168-11.168-11.168-29.504 0-40.672L642.304 200.512c11.168-11.168 29.504-11.168 40.672 0 11.168 11.168 11.168 29.504 0 40.672L383.392 501.488l299.584 299.584c11.168 11.168 11.168 29.504 0 40.672-5.568 5.568-12.96 8.288-20.32 8.288z"
          fill="#ffffff" p-id="2717"></path>
      </svg>
      back
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'


const goBack = () => {
  window.history.back()
}


const isDarkMode = ref(false);
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};

import slideImage1 from '../../assets/ai/output.png';
import slideImage2 from '../../assets/ai/elk.png';
import slideImage3 from '../../assets/ai/detail.png';
import slideImage4 from '../../assets/ai/seed.png';

const slides = [
  { id: 1, src: slideImage1, caption: 'Scene 1: Whole Process' },
  { id: 2, src: slideImage2, caption: 'Scene 2: Serial Story' },
  { id: 3, src: slideImage3, caption: 'Scene 3: Picture Detail' },
  { id: 4, src: slideImage4, caption: 'Scene 4: Different Style' },
];


const currentSlideIndex = ref(0);


const currentSlide = computed(() => slides[currentSlideIndex.value]);

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.length;
};

const prevSlide = () => {

  currentSlideIndex.value = (currentSlideIndex.value - 1 + slides.length) % slides.length;
};
</script>

<style scoped>
.project-intro-page {

  height: 90vh;
  max-width: 100%;
  margin: 0 auto;
  padding: 50px 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  background-color: #f8f9fa;
  overflow-y: auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
}

h1,
h2,
h3 {
  color: #212529;
}

h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  border-left: 5px solid #6a4ff9;
  padding-left: 15px;
}

.section-block {
  margin-bottom: 40px;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
}

.section-block:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.abstract-intro {
  font-size: 1.1rem;
  color: #495057;
  margin-top: 15px;
  padding: 10px 0;
  border-top: 1px solid #e9ecef;
}


.project-header {
  text-align: center;
  margin-bottom: 50px;
}

.project-title {
  font-size: 2.8rem;
  color: #6a4ff9;
  margin-bottom: 10px;
  font-weight: 800;
}

.project-subtitle {
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 20px;
}

.tag-row {
  margin-top: 20px;
  margin-bottom: 30px;
}

.tag {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 10px;
  border: 1px solid #ced4da;
  text-transform: uppercase;
}

.tag.tech {
  background-color: #e9ecef;
  color: #495057;
}


.context-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.context-item {
  padding: 15px 20px;
  background-color: #f7f1ff;
  border-radius: 8px;
  border: 1px solid #e8e0ff;
}

.context-item .label {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 5px;
}

.context-item .value {
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
}

.context-item .value.bold {
  font-weight: 700;
  color: #6a4ff9;
}

.context-item .value.award {
  color: #1abc9c;
  font-weight: 700;
}

.contribution-cards {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.card {
  flex: 1;
  padding: 25px;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-label {
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 5px;
  padding-bottom: 5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.frontend-card .card-label {
  color: #007bff;
  border-bottom: 1px solid #007bff;
}

.ui-ux-card .card-label {
  color: #ff69b4;
  border-bottom: 1px solid #ff69b4;
}

.prompt-card .card-label {
  color: #6a4ff9;
  border-bottom: 1px solid #6a4ff9;
}

.frontend-card {
  border-left: 5px solid #007bff;
  background-color: #e6f3ff;
}

.ui-ux-card {
  border-left: 5px solid #ff69b4;
  background-color: #ffe6f3;
}

.prompt-card {
  border-left: 5px solid #6a4ff9;
  background-color: #f7f1ff;
}

.card h3 {
  font-size: 1.2rem;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #333;
  font-weight: 700;
}

.card p {
  font-size: 0.95rem;
  color: #555;
}

.card .sub-paragraph {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px dashed #ced4da;
  font-style: italic;
  color: #6c757d;
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 20px;
}

.workflow-step {
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f7ff;
  border: 1px solid #dee2e6;
}

.step-number {
  display: block;
  font-size: 0.8rem;
  font-weight: 800;
  color: #6a4ff9;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.step-title {
  font-size: 1.3rem;
  color: #212529;
  margin-top: 0;
  margin-bottom: 15px;
}

.process-list {
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
}

.process-list li {
  background: #e9ecef;
  padding: 8px 12px;
  border-radius: 4px;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #495057;
  border-left: 3px solid #6a4ff9;
}

.process-list li strong {
  color: #000;
}



.showcase-description {
  font-size: 0.95rem;
  color: #6c757d;
  margin-bottom: 25px;
  font-style: italic;
}

.carousel-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.carousel-slide-wrapper {
  position: relative;

  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #e9ecef;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.carousel-slide {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.carousel-img {

  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.caption-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 12px;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(106, 79, 249, 0.7);
  color: white;
  border: none;
  padding: 15px 12px;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 10;
  border-radius: 8px;
  transition: background-color 0.2s;
  font-family: monospace;
  line-height: 1;
}

.nav-button:hover {
  background: #6a4ff9;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.carousel-indicators {
  text-align: center;
  margin-top: 15px;
}

.indicator-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ced4da;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.indicator-dot.active {
  background-color: #6a4ff9;
  transform: scale(1.2);
}


.innovation-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.innovation-list .item {
  display: flex;
  align-items: flex-start;
  padding: 15px 10px;
  border-bottom: 1px dashed #e9ecef;
  background-color: #ffffff;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.innovation-list .item:hover {
  background-color: #f7f7f7;
}

.point-text {
  font-size: 1.2rem;
  color: #ff9800;
  margin-right: 15px;
  font-weight: bold;
  line-height: 1.6;
  flex-shrink: 0;
}

.innovation-list p {
  margin: 0;
}


.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
  text-align: center;
}

.tech-item {
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f5f7;
  border-bottom: 4px solid #6a4ff9;
}

.tech-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #6a4ff9;
  display: block;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.tech-item h3 {
  font-size: 1.1rem;
  margin-top: 0;
}

.tech-item p {
  font-size: 0.9rem;
  color: #666;
}


.takeaway-points {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.takeaway-item {
  padding: 15px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background-color: #fcfcfc;
  transition: border-color 0.3s;
}

.takeaway-item:hover {
  border-color: #6a4ff9;
}

.takeaway-title {
  font-size: 1rem;
  font-weight: 700;
  color: #6a4ff9;
  margin-top: 0;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 2px solid #e9ecef;
}

.takeaway-item p {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
}


@media (max-width: 992px) {
  .project-intro-page {
    height: 90vh;
    padding: 30px 15px;
  }

  .contribution-cards {
    flex-direction: column;
    gap: 20px;
  }

  .workflow-grid {
    grid-template-columns: 1fr;
  }

  .takeaway-points {
    grid-template-columns: 1fr;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }

  .context-grid {
    grid-template-columns: 1fr;
  }

  .carousel-slide-wrapper {
    height: 350px;
  }
}

.back-button {
  position: fixed;
  right: 30px;
  bottom: 30px;
  height: 40px;
  background-color: #6a4ff9;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(106, 79, 249, 0.4);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
  z-index: 1000;
}

.back-button:hover {
  background-color: #5b3fe0;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(106, 79, 249, 0.6);
}

.back-button:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(106, 79, 249, 0.4);
}

.back-button svg {
  margin-right: 5px;
  fill: #ffffff;
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .back-button {
    right: 15px;
    bottom: 15px;
    width: 70px;
    height: 35px;
    font-size: 0.75rem;
  }

  .back-button svg {
    width: 16px;
    height: 16px;
  }
}
</style>