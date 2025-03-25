<template>
  <div class="streaks">
    <div v-for="i in 20" :key="i" class="streak" />
  </div>
</template>

<style scoped>
  /* 🌌 Background container */
  .streaks {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: -1; /* Keeps it in the background */
  }

  /* 🎞️ Light streaks - Different thickness, speed, and blur */
  .streak {
    position: absolute;
    top: -150%;
    width: 4px;
    height: 250%;
    background: var(--color);
    opacity: var(--opacity);
    transform: rotate(30deg);
    animation: moveStreak linear infinite;
    filter: blur(3px);
  }

  /* ⏳ VARIATIONS - Different speeds, thickness, and blur */
  .streak:nth-child(2) {
    left: 5%;
    width: 2px;
    animation-duration: 18s;
    opacity: 0.3;
    filter: blur(2px);
  }
  .streak:nth-child(3) {
    left: 15%;
    width: 6px;
    animation-duration: 20s;
    opacity: 0.4;
    filter: blur(6px);
  }
  .streak:nth-child(4) {
    left: 25%;
    width: 3px;
    animation-duration: 22s;
    opacity: 0.2;
    filter: blur(4px);
  }
  .streak:nth-child(5) {
    left: 35%;
    width: 8px;
    animation-duration: 24s;
    opacity: 0.5;
    filter: blur(8px);
  }
  .streak:nth-child(6) {
    left: 45%;
    width: 5px;
    animation-duration: 26s;
    opacity: 0.3;
    filter: blur(5px);
  }
  .streak:nth-child(7) {
    left: 55%;
    width: 3px;
    animation-duration: 28s;
    opacity: 0.2;
    filter: blur(3px);
  }
  .streak:nth-child(8) {
    left: 65%;
    width: 6px;
    animation-duration: 30s;
    opacity: 0.4;
    filter: blur(6px);
  }
  .streak:nth-child(9) {
    left: 75%;
    width: 4px;
    animation-duration: 32s;
    opacity: 0.3;
    filter: blur(4px);
  }
  .streak:nth-child(10) {
    left: 85%;
    width: 7px;
    animation-duration: 34s;
    opacity: 0.5;
    filter: blur(9px);
  }

  /* 🎥 Light streaks moving effect */
  @keyframes moveStreak {
    from {
      transform: translateY(-250%) rotate(30deg);
    }
    to {
      transform: translateY(250%) rotate(30deg);
    }
  }

  /* 🌑 Dark Mode */
  .dark {
    --color: rgba(255, 255, 255, 0.2);
    --opacity: 0.5;
  }

  /* ☀️ Light Mode */
  :not(.dark) {
    --color: rgba(50, 50, 50, 0.1);
    --opacity: 0.3;
  }
</style>
