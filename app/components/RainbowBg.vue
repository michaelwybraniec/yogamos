<template>
  <div>
    <div
      v-for="i in 25"
      :key="i"
      class="rainbow"
      :style="getRainbowStyle(i)"
    ></div>
    <div class="h"></div>
    <div class="v"></div>
  </div>
</template>

<script setup>
  const colors = [
    'rgb(232, 121, 249)',
    'rgb(96, 165, 250)',
    'rgb(94, 234, 212)'
  ]
  const animationTime = 45
  const length = 25

  const getRainbowStyle = (i) => {
    const shuffledColors = [...colors].sort(() => Math.random() - 0.5)
    return {
      boxShadow: `-130px 0 80px 40px white, -50px 0 50px 25px ${shuffledColors[0]},
      0 0 50px 25px ${shuffledColors[1]}, 50px 0 50px 25px ${shuffledColors[2]},
      130px 0 80px 40px white`,
      animation: `${animationTime - (animationTime / length / 2) * i}s linear infinite slide`,
      animationDelay: `-${(i / length) * animationTime}s`
    }
  }
</script>

<style scoped>
  body {
    overflow: hidden;
  }

  .rainbow {
    height: 100vh;
    width: 0;
    top: 0;
    position: absolute;
    transform: rotate(10deg);
    transform-origin: top right;
  }

  @keyframes slide {
    from {
      right: -25vw;
    }
    to {
      right: 125vw;
    }
  }

  .h {
    box-shadow: 0 0 50vh 40vh white;
    width: 100vw;
    height: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }

  .v {
    box-shadow: 0 0 35vw 25vw white;
    width: 0;
    height: 100vh;
    bottom: 0;
    left: 0;
    position: absolute;
  }

  .description-container {
    position: absolute;
    bottom: 32px;
    left: 32px;
    text-align: left;
    letter-spacing: 3px;
  }

  .description-container .title {
    font-size: 19px;
    font-weight: 500;
    color: black;
    text-transform: uppercase;
  }

  .description-container .subtitle {
    margin-top: 6px;
    font-size: 26px;
    font-weight: 500;
    color: black;
    text-transform: uppercase;
  }

  .author-container {
    position: absolute;
    width: 50%;
    right: 21px;
    bottom: 21px;
    text-align: right;
  }

  .author-container .picture {
    position: absolute;
    right: 0;
    top: -42px;
    margin-top: -12px;
    width: 42px;
    height: 42px;
    background-size: 42px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(https://assets.codepen.io/595576/internal/avatars/users/default.png?format=auto&version=1689877807&width=80&height=80);
  }

  .author-container .title {
    font-size: 16px;
    letter-spacing: 2px;
    color: black;
  }
</style>
