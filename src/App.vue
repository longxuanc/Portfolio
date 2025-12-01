<template>
  <header class="main-header">
    <nav>
      <RouterLink to="/" class="site-title-area">
        <span class="site-logo">CW</span>
        <span class="site-title">Chenwei Yang Portfolio</span>
      </RouterLink>
    </nav>
  </header>

  <main class="content-container">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    
  </main>

  

  <footer class="main-footer">
    <p>Email: 22013247@mail.ecust.edu.cn | Made with Vue 3 & <span class="heart">❤️</span></p>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

:root {
  --primary-color: #000000;
  --text-color: #2c3e50;
  --bg-light: #ffffff;
  --border-color: #e6e6e6;
  --header-height: 60px;
}

body {
  background-color: rgb(238, 234, 217);
  color: var(--text-color);
  overflow: hidden;
  font-family: -apple-system, BlinkMacMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.main-header {
  padding: 20px;
  height: var(--header-height);
  background-color: var(--bg-light);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  flex-shrink: 0;
  width: 100%;
}

.main-header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.site-title-area {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.site-logo {
  background-color: var(--primary-color);
  color: white;
  font-weight: 800;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 1rem;
}

.site-title {
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--text-color);
}

.nav-links .nav-item {
  margin-left: 30px;
  font-size: 0.95rem;
  text-decoration: none;
  color: #555;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-links .nav-item:hover,
.nav-links .router-link-active {
  color: var(--primary-color);
}

.nav-links .router-link-active::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  left: 0;
  bottom: 0;
  border-radius: 1px;
}

.content-container {
  height: var(--header-height);
  flex-grow: 1;
  width: 100%;
  z-index: 1;
  position: relative;
}

.main-footer {
  text-align: center;
  padding: 1.5rem 5%;
  border-top: 1px solid var(--border-color);
  background-color: #fafafa;
  color: #888;
  font-size: 0.85rem;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.main-footer .heart {
  color: #e74c3c;
  animation: pulse 1s infinite;
}


</style>
