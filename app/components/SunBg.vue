<template>
  <div>
    <div class="stroke" />
    <div class="stroke" />
    <div class="stroke" />
  </div>
</template>

<style scoped>
  body {
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: auto;
    background: linear-gradient(
      120deg,
      #faf8f6 10%,
      /* Ivory */ #dfd1c9 30%,
      /* Oat */ #d1b9b4 50%,
      /* Dusk */ #9b997b 70%,
      /* Fern */ #716d64 90% /* Olive */
    );
    background-size: 200% 200%;
    animation: gradientShift 20s ease infinite;
    background-attachment: fixed;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .stroke {
    position: fixed;
    width: 300%;
    height: 200%;
    background: linear-gradient(
      to bottom,
      rgba(86, 86, 86, 0.04) 0%,
      /* Pebble */ rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(-10deg);
    opacity: 0.5;
    animation: strokeFlow 8s linear infinite;
  }

  .stroke:nth-of-type(1) {
    left: -10%;
    animation-duration: 14s;
  }

  .stroke:nth-of-type(2) {
    left: 25%;
    animation-duration: 10s;
  }

  .stroke:nth-of-type(3) {
    left: 60%;
    animation-duration: 12s;
  }

  @keyframes strokeFlow {
    0% {
      transform: translateY(-100%) rotate(-0deg);
    }
    100% {
      transform: translateY(100%) rotate(-0deg);
    }
  }
</style>
