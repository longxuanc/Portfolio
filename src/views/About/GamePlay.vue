<template>
  <div class="gaming-summary-page">
    <header class="summary-header">
      <h1 class="page-title">Gaming Time Investment Overview</h1>
      <p class="total-hours-display">
        Total Hours Logged: 
        <span class="total-value">{{ totalHours.toLocaleString() }}</span> hours
      </p>
    </header>

    <div class="category-grid">
      <div v-for="(category, name) in categorizedData" :key="name" class="category-card">
        <h2 class="category-title">{{ name }}</h2>
        <p class="category-total">
          Category Total: 
          <span class="category-total-value">{{ categoryTotalHours(category).toLocaleString() }} hours</span>
        </p>
        
        <div class="game-list">
          <div v-for="game in category" :key="game.游戏名称" class="game-item">
            <span class="game-name">{{ game.游戏名称 }}</span>
            <div class="progress-bar-container">
              <div 
                class="game-progress-bar" 
                :style="{ width: calculatePercentage(game.时长, categoryTotalHours(category)) + '%' }"
              ></div>
            </div>
            <span class="game-hours">{{ game.时长.toLocaleString() }} h</span>
          </div>
        </div>
      </div>
    </div>

    <button @click="goBack" class="back-button" title="Go back to the previous page">
      <svg viewBox="0 0 1024 1024" width="18" height="18">
        <path d="M662.656 831.952c-7.392 0-14.784-2.816-20.352-8.384L342.368 521.824c-11.168-11.168-11.168-29.504 0-40.672L642.304 200.512c11.168-11.168 29.504-11.168 40.672 0 11.168 11.168 11.168 29.504 0 40.672L383.392 501.488l299.584 299.584c11.168 11.168 11.168 29.504 0 40.672-5.568 5.568-12.96 8.288-20.32 8.288z" fill="currentColor"></path>
      </svg>
      BACK
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router'; 

const rawData = [
  { 大类别: '射击类', 游戏名称: 'Valorant', 时长: 1300 },
  { 大类别: '射击类', 游戏名称: 'CS2', 时长: 434.3 },
  { 大类别: '射击类', 游戏名称: 'Overwatch', 时长: 305 },
  { 大类别: '射击类', 游戏名称: 'PUBG', 时长: 205.1 },
  { 大类别: '射击类', 游戏名称: 'Rainbow Six Siege', 时长: 201 },
  { 大类别: '射击类', 游戏名称: 'Apex Legends', 时长: 139.6 },
  { 大类别: '射击类', 游戏名称: 'Delta Force', 时长: 150 },
  { 大类别: '策略 / 竞技类', 游戏名称: 'League of Legends', 时长: 3500 },
  { 大类别: '策略 / 竞技类', 游戏名称: 'StarCraft', 时长: 263 },
  { 大类别: '策略 / 竞技类', 游戏名称: 'Slay the Spire', 时长: 42.8 },
  { 大类别: '策略 / 竞技类', 游戏名称: 'Dota 2', 时长: 35.8 },
  { 大类别: '社交 / 休闲类', 游戏名称: 'Goose Goose Duck', 时长: 93.7 },
  { 大类别: '社交 / 休闲类', 游戏名称: 'Terraria', 时长: 24.8 },
  { 大类别: '社交 / 休闲类', 游戏名称: 'Ultimate Chicken Horse', 时长: 10.3 },
  { 大类别: '开放世界 / 沙盒类', 游戏名称: 'Grand Theft Auto V', 时长: 75.8 },
  { 大类别: '开放世界 / 沙盒类', 游戏名称: 'Monster Hunter: World', 时长: 72.7 },
  { 大类别: '开放世界 / 沙盒类', 游戏名称: 'Mount & Blade: Warband', 时长: 34.4 },
  { 大类别: '开放世界 / 沙盒类', 游戏名称: 'Unturned', 时长: 31.5 },
  { 大类别: '开放世界 / 沙盒类', 游戏名称: 'Red Dead Redemption 2', 时长: 21.4 },
  { 大类别: '开放世界 / 沙盒类', 游戏名称: 'No Man\'s Sky', 时长: 20.9 },
  { 大类别: '开放世界 / 沙盒类', 游戏名称: 'Black Myth: Wukong', 时长: 20.9 },
  { 大类别: '开放世界 / 沙盒类', 游戏名称: 'Starbound', 时长: 13.9 },
  { 大类别: '开放世界 / 沙盒类', 游戏名称: 'Warframe', 时长: 12.1 },
  { 大类别: 'RPG', 游戏名称: 'World of Warcraft', 时长: 205 },
  { 大类别: 'RPG', 游戏名称: 'Diablo', 时长: 66 },
  { 大类别: 'RPG', 游戏名称: 'Persona 5 Royal', 时长: 22 },
  { 大类别: 'RPG', 游戏名称: 'Dark Souls III', 时长: 10.4 },
  { 大类别: '体育 / 模拟类', 游戏名称: 'NBA 2K18', 时长: 18.9 }
];

const totalHours = computed(() => rawData.reduce((sum, game) => sum + game.时长, 0));

const categorizedData = computed(() => rawData.reduce((acc, game) => {
    let categoryName;
    switch (game.大类别) {
        case '射击类': categoryName = 'Shooter'; break;
        case '策略 / 竞技类': categoryName = 'Strategy / Competitive'; break;
        case '社交 / 休闲类': categoryName = 'Social / Casual'; break;
        case '开放世界 / 沙盒类': categoryName = 'Open World / Sandbox'; break;
        case 'RPG': categoryName = 'RPG'; break;
        case '体育 / 模拟类': categoryName = 'Sports / Simulation'; break;
        default: categoryName = game.大类别;
    }
    if (!acc[categoryName]) acc[categoryName] = [];
    acc[categoryName].push(game);
    acc[categoryName].sort((a, b) => b.时长 - a.时长);
    return acc;
}, {}));

const categoryTotalHours = (category) => category.reduce((sum, game) => sum + game.时长, 0);

const calculatePercentage = (gameHours, categoryTotal) => categoryTotal === 0 ? 0 : ((gameHours / categoryTotal) * 100).toFixed(2);

const router = useRouter(); 
const goBack = () => {
    if (router.options.history.state.back) router.back();
    else if (window.history.length > 1) window.history.back();
    else alert('Cannot go back to the previous page.');
}
</script>

<style scoped>
body { background-color: #1B2838; }
.gaming-summary-page {
  max-width: 1200px;
  margin: 40px auto;
  padding: 40px 20px;
  background-color: #2A475E;
  color: #C7D5E0;
  height: 85vh;
  overflow-y: auto;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  border: 1px solid #326284;
}
.gaming-summary-page::-webkit-scrollbar { width: 8px; }
.gaming-summary-page::-webkit-scrollbar-track { background: #1B2838; border-radius: 10px; }
.gaming-summary-page::-webkit-scrollbar-thumb { background-color: #326284; border-radius: 10px; border: 2px solid #1B2838; }
.gaming-summary-page::-webkit-scrollbar-thumb:hover { background-color: #4A7A9E; }

.summary-header { text-align: center; margin-bottom: 50px; border-bottom: 1px solid #326284; padding-bottom: 20px; }
.page-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 10px; color: #66C0F4; }
.total-hours-display { font-size: 1.3rem; color: #93B8D1; font-weight: 500; }
.total-value { font-size: 1.6rem; font-weight: 800; color: #A6CFEC; margin-left: 5px; }

.category-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px,1fr)); gap: 30px; }
.category-card { background-color: #203A50; padding: 25px; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.3); transition: transform 0.3s, box-shadow 0.3s; border: 1px solid #326284; border-top: 5px solid #66C0F4; }
.category-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.4); }
.category-title { font-size: 1.6rem; font-weight: 700; color: #C7D5E0; margin-top: 0; padding-bottom: 10px; border-bottom: 1px solid #326284; }
.category-total { font-size: 0.95rem; color: #93B8D1; margin-top: 15px; margin-bottom: 20px; }
.category-total-value { font-weight: 600; color: #A6CFEC; }

.game-list { display: flex; flex-direction: column; gap: 15px; }
.game-item { display: grid; grid-template-columns: 1fr 2fr auto; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px dotted #326284; }
.game-name { font-size: 1rem; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #C7D5E0; }
.game-hours { font-size: 0.9rem; font-weight: 700; color: #66C0F4; text-align: right; min-width: 60px; }
.progress-bar-container { height: 8px; background-color: #3C5A76; border-radius: 4px; overflow: hidden; }
.game-progress-bar { height: 100%; background-color: #66C0F4; transition: width 0.8s ease-out; border-radius: 4px; }
.game-list > .game-item:last-child { border-bottom: none; }

.back-button { position: fixed; right: 30px; bottom: 30px; width: 90px; height: 40px; background-color: #66C0F4; color: #1B2838; border: none; border-radius: 6px; box-shadow: 0 4px 15px rgba(102,192,244,0.4); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 600; transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s; z-index: 1000; }
.back-button:hover { background-color: #4a9bd1; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(102,192,244,0.6); }
.back-button:active { transform: translateY(0); box-shadow: 0 4px 15px rgba(102,192,244,0.4); }
.back-button svg { margin-right: 5px; fill: currentColor; }

@media (max-width: 768px) {
  .gaming-summary-page { padding: 30px 15px; height: 70vh; margin-top: 20px; margin-bottom: 20px; }
  .page-title { font-size: 2rem; }
  .total-hours-display { font-size: 1.1rem; }
  .category-grid { gap: 20px; }
  .game-item { grid-template-columns: 1fr auto; grid-template-rows: auto auto; gap: 5px 10px; }
  .game-name { grid-column: 1 / 2; font-size: 0.95rem; }
  .game-hours { grid-column: 2 / 3; grid-row: 1 / 2; }
  .progress-bar-container { grid-column: 1 / 3; grid-row: 2 / 3; }
}
</style>
