<template>
  <div class="project-page">

    <header class="project-header">
      <h1>"Want to Go to the Beach" 3D Ocean Visualization</h1>
      <p class="project-subtitle">Processing · 3D Rendering · Lighting Simulation</p>

      <div class="tag-row">
        <span class="tag">PROCESSING</span>
        <span class="tag">3D</span>
        <span class="tag">LIGHTING</span>
      </div>
    </header>

    <section class="section-block">
      <h2>Abstract</h2>
      <p>
        This project simulates realistic ocean waves using 3D rendering, noise functions, time-based animation, and lighting reflection.
        Wave heights and colors change over time, emulating day-night light variations and sunlight refraction, resulting in a dynamic ocean scene.
      </p>
    </section>

    <section class="section-block">
      <h2>Project Overview</h2>
      <p>
        Based on the Processing creative programming course, this project visualizes the song 
        <em>“想去海边 / Want to Go to the Beach”</em> by 夏日入侵企画. The scene recreates a sunlit seaside
        environment with ocean waves, real-time lighting, day–night transitions, character motion, a dynamic 
        stage, and multi-point audio-reactive elements. The entire visual world responds to music in real-time,
        creating an immersive rhythmic seascape.
      </p>
    </section>

    <section class="section-block">
      <h2>1. Wave Simulation with Noise</h2>
      <p>
        The core of the ocean is generated using Perlin noise, creating smooth, naturally continuous wave motion.
        Noise values control wave height, color brightness, and transparency, simulating real light scattering
        (Tyndall effect) across the water surface. With <strong>P3D 3D rendering</strong> and <strong>dynamic lights</strong>,
        the waves gain depth and realistic shape.
      </p>
    </section>

    <section class="section-block">
      <h2>2. Multi-layer Surface Lighting</h2>
      <p>
        On top of the base wave mesh, additional light layers are applied—including grid highlights, parallel light,
        and specular reflections. These layered effects make the water shimmer as the light moves across the surface,
        capturing the reflective nature of sunlight over the sea.
      </p>
    </section>

    <section class="section-block">
      <h2>3. Day–Night Cycle & Time System</h2>
      <p>
        A time-mapping system controls the sun and moon positions. As time progresses, the scene transitions between:
        <strong>daylight → sunset → night sky</strong>. Each period has its own lighting intensity, sky color, and
        even a procedural starfield at night.
      </p>
    </section>

    <section class="section-block">
      <h2>4. Stage and Character Animation</h2>
      <p>
        A simple 3D stage is built using quads, enhanced by angled lighting to produce depth. A small character
        is added with seven possible animations, switching randomly. Movement controls (W A S D) allow the user
        to explore different positions on the beach, increasing interactivity.
      </p>
    </section>

    <section class="section-block">
      <h2>5. Audio Reactive Effects</h2>
      <p>
        Using Processing’s `minim` library, the visual environment reacts to music intensity in real-time:
      </p>
      <ul style="color:#d0d0ff; line-height:1.6; margin-left:20px;">
        <li>Wave speed increases based on amplitude peaks</li>
        <li>Cloud layers shift faster on loud beats</li>
        <li>A glowing circle pulsates behind the sun</li>
        <li>A spectrum bar appears along the horizon</li>
      </ul>
      <p>
        These synchronized responses tie all elements together, reinforcing the rhythm of the song.
      </p>
    </section>

    <section class="section-block">
      <h2>6. Technical Problems & Solutions</h2>
      <p>
        Processing’s P3D mode can create rendering-order issues when drawing multiple layers (waves, stage,
        characters). To solve this, all ocean and lighting calculations were rendered first into an off-screen 
        graphics buffer, then combined into the final canvas. This solved the depth and transparency issues.
      </p>
    </section>

    <section class="section-block">
      <h2>7. Noise Picture</h2>
      <div class="img-card">
        <img src="../../assets/courseB/noise.png" alt="">
      </div>
    </section>

    <section class="section-block">
      <h2>Final Summary</h2>
      <p>
        Through this project, I explored how to combine creative coding with visual storytelling. I learned how
        to construct a complete audio-reactive world—integrating noise algorithms, 3D modeling, lighting, vector
        operations, and interactive elements. This experience helped me understand how stage visuals and music
        synchronization are designed in real performance environments.
      </p>
      <p>
        The finished work recreates a dynamic seaside scene that breathes with the music, fulfilling the original
        artistic intention of the song and demonstrating the expressive potential of Processing.
      </p>
    </section>

    <section class="section-block">
      <h2>3D Ocean Waves with Lighting</h2>
      <p>
        Dynamic waves are generated using noise functions, while directional and ambient lights in p5.js simulate realistic day-to-night lighting effects on the ocean surface.
      </p>
      <div id="ocean-canvas" style="width: 100%; height: 600px;"></div>
    </section>
    
    <button @click="goBack" class="back-button" title="Back to Previous Page">
      <svg viewBox="0 0 1024 1024" width="24" height="24">
        <path d="M662.656 831.952c-7.392 0-14.784-2.816-20.352-8.384L342.368 521.824c-11.168-11.168-11.168-29.504 0-40.672L642.304 200.512c11.168-11.168 29.504-11.168 40.672 0 11.168 11.168 11.168 29.504 0 40.672L383.392 501.488l299.584 299.584c11.168 11.168 11.168 29.504 0 40.672-5.568 5.568-12.96 8.288-20.32 8.288z" fill="#00ffff"></path>
      </svg>
      BACK
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const goBack = () => {
  window.history.back()
}

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js'
  script.onload = () => {
    new p5((p) => {
      const scl = 20
      const w = 2000
      const h = 700
      let cols, rows
      let terrain = []
      let flying = 0

      p.setup = () => {
        const canvasContainer = document.getElementById('ocean-canvas')
        const canvas = p.createCanvas(canvasContainer.clientWidth, 600, p.WEBGL)
        canvas.parent('ocean-canvas')

        cols = Math.floor(w / scl)
        rows = Math.floor(h / scl)
        for (let i = 0; i < cols; i++) {
          terrain[i] = []
          for (let j = 0; j < rows; j++) {
            terrain[i][j] = 0
          }
        }

        p.noStroke()
      }

      p.draw = () => {
        p.background(200, 240, 255)

        flying -= 0.01
        let yoff = flying
        for (let y = 0; y < rows; y++) {
          let xoff = 0
          for (let x = 0; x < cols; x++) {
            terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -50, 90)
            xoff += 0.1
          }
          yoff += 0.1
        }

        p.push()
        p.rotateX(p.PI / 3)
        p.translate(-w / 2, -h / 2)

        const time = p.millis() * 3
        const sunX = p.sin(time) * 500
        const sunY = -300
        const sunZ = p.cos(time) * 500

        p.ambientLight(50, 70, 100)
        p.directionalLight(255, 255, 220, sunX, sunY, sunZ)

        for (let y = 0; y < rows - 1; y++) {
          p.beginShape(p.TRIANGLE_STRIP)
          for (let x = 0; x < cols; x++) {
            const h1 = terrain[x][y]
            const h2 = terrain[x][y + 1]
            const c = p.map(h1, -50, 50, 150, 255)
            p.fill(0, 191,180, c)
            p.vertex(x * scl, y * scl, h1)
            p.vertex(x * scl, (y + 1) * scl, h2)
          }
          p.endShape()
        }

        p.pop()
      }

      p.windowResized = () => {
        const canvasContainer = document.getElementById('ocean-canvas')
        p.resizeCanvas(canvasContainer.clientWidth, 600)
      }
    })
  }
  document.body.appendChild(script)
})
</script>

<style scoped>
.project-page {
  margin: 0 auto;
  padding: 40px 25px 70px;
  color: #ffffff;
  background: rgb(27, 27, 47);
  font-family: "Courier New", "Monaco", monospace;
  line-height: 1.7;
  max-height: 90vh;
  overflow-y: auto;
  padding-right: 10px;
  scroll-behavior: smooth;
}

.project-header {
  padding-bottom: 25px;
  border-bottom: 2px solid #ff6f61;
  margin-bottom: 40px;
}

.project-header h1 {
  font-size: 2.1rem;
  font-weight: 700;
  color: #00ffff;
  text-shadow: 2px 2px 4px #000;
}

.project-subtitle {
  margin-top: 8px;
  color: #a0c4ff;
  font-size: 1.05rem;
  font-style: italic;
}

.tag {
  display: inline-block;
  padding: 4px 12px;
  background: #222233;
  color: #ff9f1c;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 8px;
}

.section-block {
  margin-bottom: 45px;
  padding: 18px 24px;
  background: rgba(30, 30, 50, 0.8);
  border: 1px solid #444466;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.section-block h2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
  padding-left: 10px;
  border-left: 4px solid #00ffff;
  color: #ffffff;
  text-shadow: 1px 1px 2px #000;
}

.section-block p {
  color: #d0d0ff;
  margin-bottom: 12px;
}

.project-page::-webkit-scrollbar { width: 10px; }
.project-page::-webkit-scrollbar-track { background: #1b1b2f; border-radius: 5px; }
.project-page::-webkit-scrollbar-thumb { background: #00ffff; border-radius: 5px; border: 2px solid #1b1b2f; }
.project-page::-webkit-scrollbar-thumb:hover { background: #a0ffff; }
.project-page { scrollbar-width: thin; scrollbar-color: #00ffff #1b1b2f; }

.img-card {
  background:rgb(27, 27, 47);
  border: 1px solid #3d3d3d;
  padding: 16px;
  border-radius: 6px;
  margin: 20px 0;
  text-align: center;
  box-shadow: 0 4px 14px rgba(0,0,0,0.25);
}

.img-card img {
  width: 100%;
  border-radius: 4px;
}

.back-button {
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 90px;
    height: 40px;
    background-color: #1b1b2f;
    color: #00ffff;
    border: 1px solid #00ffff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Courier New", "Monaco", monospace;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    z-index: 1000;
}

.back-button:hover {
    background-color: #00ffff;
    color: #1b1b2f;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
}

.back-button:active {
    background-color: #00aaff;
    box-shadow: none;
}

.back-button svg {
    margin-right: 5px;
    fill: #00ffff;
    width: 18px;
    height: 18px;
    transition: fill 0.2s;
}

.back-button:hover svg {
    fill: #1b1b2f;
}

@media (max-width: 768px) {
  .project-header h1 { font-size: 1.8rem; }
  .section-block h2 { font-size: 1.2rem; }
  .back-button {
    right: 15px;
    bottom: 15px;
    width: 80px;
    height: 35px;
    font-size: 0.75rem;
  }
  .back-button svg {
    width: 16px;
    height: 16px;
  }
}
</style>
