<template>
  <!-- <div
    class="stars pointer-events-none absolute inset-x-0 top-0 size-full opacity-75"
  > -->
  <span class="ball" />
  <span class="ball"></span>
  <span class="ball"></span>
  <span class="ball"></span>
  <span class="ball"></span>
  <span class="ball"></span>
  <!-- </div> -->
</template>

<style scoped>
  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  .background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #4cb8b6;
    overflow: hidden;
  }

  .ball {
    position: absolute;
    width: 20vmin;
    height: 20vmin;
    border-radius: 50%;
    backface-visibility: hidden;
    animation: move linear infinite;
  }

  .ball:nth-child(odd) {
    color: #006d5b;
  }

  .ball:nth-child(even) {
    color: #ff6f61;
  }

  /* Using a custom attribute for variability */
  .ball:nth-child(1) {
    top: 77%;
    left: 88%;
    animation-duration: 40s;
    animation-delay: -3s;
    transform-origin: 16vw -2vh;
    box-shadow: 40vmin 0 5.703076368487546vmin currentColor;
  }
  .ball:nth-child(2) {
    top: 42%;
    left: 2%;
    animation-duration: 53s;
    animation-delay: -29s;
    transform-origin: -19vw 21vh;
    box-shadow: -40vmin 0 5.17594621519026vmin currentColor;
  }
  .ball:nth-child(3) {
    top: 28%;
    left: 18%;
    animation-duration: 49s;
    animation-delay: -8s;
    transform-origin: -22vw 3vh;
    box-shadow: 40vmin 0 5.248179047256236vmin currentColor;
  }
  .ball:nth-child(4) {
    top: 50%;
    left: 79%;
    animation-duration: 26s;
    animation-delay: -21s;
    transform-origin: -17vw -6vh;
    box-shadow: 40vmin 0 5.279749632220298vmin currentColor;
  }
  .ball:nth-child(5) {
    top: 46%;
    left: 15%;
    animation-duration: 36s;
    animation-delay: -40s;
    transform-origin: 4vw 0vh;
    box-shadow: -40vmin 0 5.964309466052033vmin currentColor;
  }
  .ball:nth-child(6) {
    top: 77%;
    left: 16%;
    animation-duration: 31s;
    animation-delay: -10s;
    transform-origin: 18vw 4vh;
    box-shadow: 40vmin 0 5.178483653434181vmin currentColor;
  }
  .ball:nth-child(7) {
    top: 22%;
    left: 17%;
    animation-duration: 55s;
    animation-delay: -6s;
    transform-origin: 1vw -23vh;
    box-shadow: -40vmin 0 5.703026794398318vmin currentColor;
  }
  .ball:nth-child(8) {
    top: 41%;
    left: 47%;
    animation-duration: 43s;
    animation-delay: -28s;
    transform-origin: 25vw -3vh;
    box-shadow: 40vmin 0 5.196265905749415vmin currentColor;
  }
</style>
