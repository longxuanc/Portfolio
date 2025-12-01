<template>
  <div class="paper-page">
    <aside class="toc-sidebar">
      <nav class="toc-nav">
        <h3>📝 Table of Contents</h3>
        <ul>
          <li v-for="item in navItems" :key="item.id" :class="{ 'active': item.id === activeSectionId }">
            <a :href="'#' + item.id" @click.prevent="scrollToSection(item.id)">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="paper-container" ref="paperContainerRef">
      <header class="hero">
        <h1 class="title" id="tct-loss-title">TCT-Loss: Shape-Aware Time-Series Forecasting with a Zero-Shot Time-Column
          Transformer Autoencoder</h1>
        <p class="authors">
          Mingyang Yu<sup>1</sup> · Chenwei Yang<sup>2</sup> · Yanlei Shen<sup>3</sup> · Zhenkai Li<sup>1</sup> · Peng
          Chen<sup>1</sup> · Xiahui Guo<sup>1†</sup>
        </p>
        <p class="affiliations">
          <sup>1</sup>East China Normal University (ECNU) · <sup>2</sup>East China University of Science and Technology
          (ECUST) · 3Shanghai University
        </p>
        <div class="tag-row">
          <span class="tag tech">Time-Series</span>
          <span class="tag tech">Transformer</span>
          <span class="tag tech">Autoencoder</span>
          <span class="tag tech">Shape-Aware Loss</span>
        </div>
      </header>

      <main class="paper-content">
        <section class="block" id="abstract">
          <h2>Abstract</h2>
          <p class="abstract-text">
            Shape and structure, such as local trends and turning points, are crucial for time series forecasting, yet
            most models are trained only with point-wise losses (MSE, MAE) that overlook these features. Existing
            shape-aware approaches rely on CNN-based autoencoders to extract image features via image modality and align
            them in latent space, but their limited reconstruction quality and poor generalization constrain
            supervision. We propose TCT-Loss, a shape-aware loss built on a Transformer autoencoder specifically
            designed for time series images. The core module, the Time-Column Transformer (TCT), tokenizes temporal
            columns and models dependencies with self-attention, yielding latent features that better preserve
            structural patterns. In forecasting tasks, predicted and ground-truth sequences are mapped through a feature
            aligner and decoded by the frozen TCT decoder, and the image-domain difference defines TCT-Loss for
            fine-grained structural supervision. Thanks to stronger modeling of time series images, TCT generalizes
            across datasets and horizons in a zero-shot manner, avoiding dataset-specific retraining. It adds no
            inference cost, as the supervision module is used only in training. Experiments show that TCT-Loss achieves
            state-of-the-art reconstruction and consistently improves structural similarity in forecasting without
            sacrificing point-wise accuracy.
          </p>
        </section>

        <section class="block" id="role">
          <h2>Role and Contribution</h2>
          <p>
            Responsible for image processing and sample image production.
          </p>
        </section>


        <section class="block" id="figures">
          <h2>Core Visualizations</h2>
          <p>The following figures illustrate the architecture, tokenization, and reconstruction fidelity of the TCT
            approach.</p>

          <div class="figure-container">
            <img src="../../assets/pub/fig1.png" alt="High-Fidelity Reconstruction Comparison">
            <p class="caption">Fig. 1. TGSI reconstruction comparison on Exchange and ETTm2 datasets. TGSI measures the
              geometric similarity of time-series images (higher is better). Our TCT-AE consistently achieves the best
              scores.</p>
          </div>

          <div class="figure-container">
            <img src="../../assets/pub/fig2.png" alt="TCT-Loss Overall Architecture">
            <p class="caption">Fig.2.Overallarchitectureofourframework,includingtheTCTautoencoderandfeaturealigner.</p>
          </div>

          <div class="figure-container figure-small-container">
            <img src="../../assets/pub/fig3.png" alt="Comparison of patch tokenization strategies">
            <p class="caption">Fig.3.Comparisonofpatchtokenizationstrategies:
              (a)ViTstylepatchpartition;(b)ourcolumn-wisetokenization.</p>
          </div>

          <div class="figure-container">
            <img src="../../assets/pub/fig4.png" alt="Visualization of TS-image reconstruction">
            <p class="caption">Fig. 4. Visualization of TS-image reconstruction on test samples. TCT-AE produces sharper
              and more faithful reconstructions compared to CNN-AE.</p>
          </div>
        </section>

        <hr class="pixel-hr" />

        <section class="block" id="conclusion">
          <h2>Conclusion</h2>
          <p>
            We presented TCT-Loss, a new loss function for shape-aware time-series forecasting. By introducing a
            Transformer autoencoder tailored to time-series images, it offers stronger reconstruction fidelity and
            supports zero-shot generalization across datasets and horizons. Experiments show that TCTLoss improves
            structural similarity in forecasting without sacrificing accuracy, while adding no inference overhead.
          </p>
        </section>
      </main>
    </div>

    <button @click="goBack" class="back-button" title="返回上一页">
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          d="M662.656 831.952c-7.392 0-14.784-2.816-20.352-8.384L342.368 521.824c-11.168-11.168-11.168-29.504 0-40.672L642.304 200.512c11.168-11.168 29.504-11.168 40.672 0 11.168 11.168 11.168 29.504 0 40.672L383.392 501.488l299.584 299.584c11.168 11.168 11.168 29.504 0 40.672-5.568 5.568-12.96 8.288-20.32 8.288z"
          fill="#000000"></path>
      </svg>
      BACK
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const paperContainerRef = ref(null);

const goBack = () => {
  window.history.back();
};

const navItems = ref([

  { id: 'abstract', title: 'Abstract' },
  { id: 'role', title: 'Role & Contribution' },
  { id: 'figures', title: 'Core Visualizations' },
  { id: 'conclusion', title: 'Conclusion' },
]);

const activeSectionId = ref(navItems.value[0].id);

const scrollToSection = (id) => {
  const container = paperContainerRef.value;
  const element = document.getElementById(id);

  if (container && element) {
    const offset = element.offsetTop - container.offsetTop;
    container.scrollTo({ top: offset, behavior: 'auto' });
    activeSectionId.value = id;
  }
};

const handleScroll = () => {
  const container = paperContainerRef.value;
  if (!container) return;

  const scrollPosition = container.scrollTop;
  let currentActiveId = navItems.value[0].id;

  for (const item of navItems.value) {
    const element = document.getElementById(item.id);
    if (element) {
      const sectionOffset = element.offsetTop - container.offsetTop;
      if (sectionOffset <= scrollPosition + 100) {
        currentActiveId = item.id;
      }
    }
  }
  activeSectionId.value = currentActiveId;
};

onMounted(() => {
  const container = paperContainerRef.value;
  if (container) {
    container.addEventListener('scroll', handleScroll);
    handleScroll();
  }
});

onUnmounted(() => {
  const container = paperContainerRef.value;
  if (container) {
    container.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style scoped>
.paper-container::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.paper-container::-webkit-scrollbar-track {
  background: #000000;
  border: 1px solid #ffffff;
}

.paper-container::-webkit-scrollbar-thumb {
  background: #ffffff;
  border: 2px solid #000000;
}

.paper-page {
  font-family: 'Courier New', monospace;
  background: #000000;
  color: #ffffff;
  display: flex;
  justify-content: center;
  max-width: 1400px;
  height: 100vh;
}

.paper-container {
  width: 900px;
  padding: 0 40px 80px 40px;
  height: 90vh;
  overflow-y: scroll;
  box-shadow: 8px 8px 0px #ffffff;
  border: 3px solid #ffffff;
  background: #000000;
  min-height: 0;
}

.toc-sidebar {
  position: sticky;
  top: 40px;
  background: #000000;
  box-shadow: 5px 5px 0px #ffffff;
  border: 3px solid #ffffff;
  width: 250px;
  flex-shrink: 0;
  margin-right: 40px;
  margin-top: 40px;
  padding: 20px;
  align-self: flex-start;
  height: fit-content;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 1px 1px 0 #ffffff;
}

.authors {
  margin-top: 15px;
  font-size: 1.1rem;
  color: #cccccc;
}

.affiliations {
  font-size: 0.95rem;
  color: #888888;
  margin-top: 5px;
}

.tag-row {
  margin-top: 25px;
}

.tag {
  display: inline-block;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 1px 1px 0 #ffffff;
  padding: 3px 8px;
  font-size: 0.8rem;
  margin: 0 5px;
}

.block {
  padding: 30px 0;
}

h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  border-left: 5px solid #ffffff;
  padding-left: 10px;
  color: #ffffff;
}

.abstract-text {
  font-size: 1.1rem;
  padding: 15px;
  color: #ffffff;
  background-color: #111111;
  border-left: 4px solid #ffffff;
  line-height: 1.6;
}

.pixel-hr {
  border: none;
  height: 3px;
  background-color: #ffffff;
  margin: 30px 0;
}

.figure-container {
  margin: 30px 0;
  padding: 10px;
  background: #111111;
  border: 2px solid #ffffff;
  text-align: center;
}

.figure-container img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.caption {
  font-size: 0.9rem;
  text-align: center;
  color: #bbbbbb;
  margin-top: 10px;
}

.toc-nav h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #ffffff;
  border-bottom: 2px solid #ffffff;
  padding-bottom: 5px;
}

.toc-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-nav li {
  margin-bottom: 8px;
}

.toc-nav a {
  display: block;
  padding: 6px 10px;
  text-decoration: none;
  color: #cccccc;
  font-size: 0.95rem;
  border-left: 3px solid transparent;
  transition: all 0.2s;
}

.toc-nav a:hover {
  background-color: #222222;
  color: #ffffff;
}

.toc-nav li.active a {
  color: #000000;
  background-color: #ffffff;
  border-left: 3px solid #000000;
  font-weight: 700;
  text-shadow: 1px 1px 0 #cccccc;
}

@media (max-width: 1200px) {
  .toc-sidebar {
    display: none;
  }

  .paper-page {
    height: auto;
  }

  .paper-container {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    box-shadow: none;
    border: none;
    height: auto;
    overflow-y: visible;
  }
}

.back-button {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 90px;
  height: 40px;
  background-color: #ffffff;
  color: #000000;
  border: 3px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  transition: all 0.1s;
  z-index: 1000;
}

.back-button:hover {
  background-color: #cccccc;
  box-shadow: 2px 2px 0px #000000;
  transform: translate(2px, 2px);
}

.back-button:active {
  box-shadow: 0px 0px 0px #000000;
  transform: translate(4px, 4px);
}

.back-button svg {
  margin-right: 5px;
  fill: #000000;
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .back-button {
    right: 15px;
    bottom: 15px;
    width: 75px;
    height: 35px;
    font-size: 0.75rem;
  }

  .back-button svg {
    width: 16px;
    height: 16px;
  }
}
</style>
