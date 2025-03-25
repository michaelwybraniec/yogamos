<template>
  <div class="background">
    <span
      v-for="(orb, index) in orbs"
      :key="index"
      class="orb"
      :style="getOrbStyle(index)" />
  </div>
</template>

<script setup>
  import { useColorMode } from '@vueuse/core'

  const colorMode = useColorMode()

  const orbs = [
    {
      size: '40vmin',
      speed: '90s',
      orbit: '50vw',
      light: '#f9f8f5',
      dark: '#5f554f'
    },
    {
      size: '25vmin',
      speed: '120s',
      orbit: '35vw',
      light: '#f1eee7',
      dark: '#3d3733'
    },
    {
      size: '50vmin',
      speed: '150s',
      orbit: '60vw',
      light: '#e7e1d6',
      dark: '#5f554f'
    },
    {
      size: '15vmin',
      speed: '80s',
      orbit: '25vw',
      light: '#d9cfc0',
      dark: '#3d3733'
    },
    {
      size: '30vmin',
      speed: '110s',
      orbit: '40vw',
      light: '#cbbba8',
      dark: '#5f554f'
    },
    {
      size: '20vmin',
      speed: '130s',
      orbit: '30vw',
      light: '#b4a393',
      dark: '#3d3733'
    }
  ]

  const getOrbStyle = index => ({
    '--orb-size': orbs[index].size,
    '--orb-speed': orbs[index].speed,
    '--orb-orbit': orbs[index].orbit,
    '--orb-color':
      colorMode.value === 'dark'
        ? orbs[index].dark
        : orbs[index].light,
    '--start-rotation': `${Math.random() * 360}deg`
  })
</script>

<style scoped>
  @keyframes orbit {
    0% {
      transform: rotate(var(--start-rotation))
        translateX(var(--orb-orbit)) rotate(0deg);
    }
    100% {
      transform: rotate(calc(var(--start-rotation) + 360deg))
        translateX(var(--orb-orbit)) rotate(-360deg);
    }
  }

  .background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .orb {
    position: absolute;
    width: var(--orb-size);
    height: var(--orb-size);
    border-radius: 50%;
    background: var(--orb-color);
    opacity: 0.02;
    animation: orbit var(--orb-speed) linear infinite;
  }
</style>
