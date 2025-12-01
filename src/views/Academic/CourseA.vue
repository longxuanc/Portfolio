<template>
  <div class="project-page">
    <header class="project-header">
      <h1>3D Kart Racing Game</h1>
      <p class="project-subtitle">Unity · C# · Vehicle Physics · Multi-Mode Racing</p>
      <div class="tag-row">
        <span class="tag">UNITY</span>
        <span class="tag">GAME DEVELOPMENT</span>
        <span class="tag">3D</span>
      </div>
    </header>

    <section class="section-block">
      <h2>Abstract</h2>
      <p>
        This project was completed as part of the *Computer Game Programming* course.
        Throughout the semester, I integrated Unity’s 3D rendering pipeline, physics engine,
        scene logic, and C# scripting to build a compact yet complete 3D kart racing game.
        The final project includes a start menu, gameplay UI, a beginner tutorial track,
        a drift mode with custom vehicle physics tuning, and an open exploration mode.
        The game features checkpoint systems, vehicle control logic, visual effects,
        environmental design, and responsive user interface components.
      </p>
    </section>

    <section class="section-block">
      <h2>1. Start Menu</h2>
      <p>
        The game opens with a simplified UI built from a 2D canvas layered over a 3D camera.
        The start menu includes a background image, interactive buttons, and hover effects.
        Button events are scripted to trigger scene switching and transitions.
      </p>
      <div class="image-placeholder"><img src="../../assets/courseA/start.png" alt="Start" class="img"></div>
      <p>
        Additional instructional UI elements demonstrate the basic controls of the game
        before the player enters the racing scene.
      </p>
    </section>

    <section class="section-block">
      <h2>2. Mode Selection Menu</h2>
      <p>
        The mode selection screen features three interactive image buttons, each representing
        a unique gameplay mode. Hover animations and click-to-confirm logic enhance usability.
        Scene transitions are handled by custom scripts that load the appropriate racing mode.
      </p>
      <div class="image-placeholder"><img src="../../assets/courseA/menu.png" alt="menu" class="img"></div>
    </section>

    <section class="section-block">
      <h2>3. Core Game Systems</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>3.1 Game Manager</h3>
          <p>
            The <strong>GameManager</strong> handles game flow such as countdown, race state,
            UI updates, end conditions, and virtual camera targeting. All gameplay HUD elements
            are updated through this system, ensuring synchronized feedback during the race.
          </p>
        </div>

        <div class="feature-card">
          <h3>3.2 Player Kart</h3>
          <p>
            The player kart integrates wheel colliders, collider triggers, acceleration, braking,
            steering logic, and camera tracking. Physics tuning ensures responsive control,
            supporting drift and ABS-off behaviors in advanced modes.
          </p>
        </div>

        <div class="feature-card">
          <h3>3.3 Environment & Track</h3>
          <p>
            The racing environment includes track decorations, checkpoints, start triggers,
            and collision volumes. Checkpoints interact with the player trigger system to
            control race progress and validation.
          </p>
        </div>
      </div>
    </section>

    <section class="section-block">
      <h2>4. Drift Mode</h2>
      <p>
        Drift mode features a more competitive track with race-light indicators, audience stands,
        and visual theming. The kart uses modified physics: pressing the handbrake disables ABS,
        allowing controlled drifting. Wheel effects—smoke, sparks, and audio—enhance immersion.
      </p>
      <div class="image-placeholder"><img src="../../assets/courseA/drift.png" alt="drift" class="img"></div>
    </section>

    <section class="section-block">
      <h2>5. Free Exploration Mode</h2>
      <p>
        This mode offers an open-world field where players can freely explore and test
        vehicle control. The environment includes varied terrain types to simulate different
        driving conditions.
      </p>
      <div class="image-placeholder"><img src="../../assets/courseA/free.png" alt="free" class="img"></div>
    </section>

    <section class="section-block">
      <h2>6. Summary & Reflection</h2>
      <p>
        Through this project, I gained hands-on experience with Unity’s physics engine,
        WheelCollider mechanics, scene management, environment composition, UI workflows,
        camera systems, and C# scripting. Creating a playable racing game from scratch
        deepened my understanding of game architecture and interactive system design.
      </p>
      <p>
        This project significantly strengthened my practical development skills,
        creativity, and ability to translate gameplay concepts into functional implementations.
      </p>
    </section>

    <button @click="goBack" class="back-button" title="Back to Previous Page">
      <svg viewBox="0 0 1024 1024" width="24" height="24">
        <path
          d="M662.656 831.952c-7.392 0-14.784-2.816-20.352-8.384L342.368 521.824c-11.168-11.168-11.168-29.504 0-40.672L642.304 200.512c11.168-11.168 29.504-11.168 40.672 0 11.168 11.168 11.168 29.504 0 40.672L383.392 501.488l299.584 299.584c11.168 11.168 11.168 29.504 0 40.672-5.568 5.568-12.96 8.288-20.32 8.288z"
          fill="#ffffff"></path>
      </svg>
      BACK
    </button>
  </div>
</template>

<script setup>
const goBack = () => {
  window.history.back()
}
</script>

<style scoped>
.project-page {
  margin: 0 auto;
  padding: 40px 25px 70px;
  color: #e0e0e0;
  background: #1e1e1e;
  font-family: "Inter", "Segoe UI", sans-serif;
  line-height: 1.7;
  max-height: 90vh;
  overflow-y: auto;
  padding-right: 10px;
}

.project-page::-webkit-scrollbar {
  width: 10px;
}

.project-page::-webkit-scrollbar-track {
  background: #1e1e1e;
  border-radius: 5px;
}

.project-page::-webkit-scrollbar-thumb {
  background: #1e88e5;
  border-radius: 5px;
  border: 2px solid #1e1e1e;
}

.project-page::-webkit-scrollbar-thumb:hover {
  background: #63a4ff;
}

.project-page {
  scrollbar-width: thin;
  scrollbar-color: #1e88e5 #1e1e1e;
}

.project-header {
  padding-bottom: 25px;
  border-bottom: 1px solid #333;
  margin-bottom: 40px;
}

.project-header h1 {
  font-size: 2.1rem;
  font-weight: 600;
  color: #ffffff;
}

.project-subtitle {
  margin-top: 8px;
  color: #bdbdbd;
  font-size: 1.05rem;
}

.tag {
  display: inline-block;
  padding: 4px 12px;
  background: #303b4a;
  color: #a8c8ff;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 8px;
}

.section-block {
  margin-bottom: 45px;
  padding: 18px 24px;
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.section-block h2 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 12px;
  padding-left: 10px;
  border-left: 3px solid #1e88e5;
  color: #fff;
}

.section-block p {
  color: #d0d0d0;
  margin-bottom: 10px;
}

.feature-grid {
  display: grid;
  gap: 18px;
}

.feature-card {
  background: #262626;
  border: 1px solid #3d3d3d;
  padding: 16px;
  border-radius: 6px;
  transition: 0.2s ease;
}

.feature-card:hover {
  border-color: #1e88e5;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(30, 136, 229, 0.2);
}

.feature-card h3 {
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 8px;
}

.feature-card p {
  color: #cacaca;
  font-size: 0.95rem;
}

.img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.back-button {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 90px;
  height: 40px;
  background-color: #1e1e1e;
  color: #ffffff;
  border: 1px solid #1e88e5;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.2s, border-color 0.2s;
  z-index: 1000;
}

.back-button:hover {
  background-color: #1e88e5;
  border-color: #1e88e5;
  box-shadow: 0 6px 15px rgba(30, 136, 229, 0.4);
}

.back-button:active {
  background-color: #1665a8;
}

.back-button svg {
  margin-right: 5px;
  fill: #ffffff;
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .project-header h1 {
    font-size: 1.8rem;
  }

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
