<script setup>
  import { onMounted } from 'vue'
  import { useHead } from '#imports'

  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700'
      }
    ]
  })

  const generateStars = (count) => {
    let stars = ''
    for (let i = 0; i < count; i++) {
      stars += `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF, `
    }
    return stars.slice(0, -2)
  }

  onMounted(() => {
    document.documentElement.style.setProperty(
      '--shadows-small',
      generateStars(700)
    )
    document.documentElement.style.setProperty(
      '--shadows-medium',
      generateStars(200)
    )
    document.documentElement.style.setProperty(
      '--shadows-big',
      generateStars(100)
    )
  })
</script>

<template>
  <div id="stars"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>
</template>

<style scoped>
  html {
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
  }

  #stars,
  #stars2,
  #stars3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: var(--shadows-small);
    animation: animStar 50s linear infinite;
  }

  #stars::after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: var(--shadows-small);
  }

  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: var(--shadows-medium);
    animation: animStar 100s linear infinite;
  }

  #stars2::after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: var(--shadows-medium);
  }

  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: var(--shadows-big);
    animation: animStar 150s linear infinite;
  }

  #stars3::after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: var(--shadows-big);
  }

  #title {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 50px;
    letter-spacing: 10px;
    margin-top: -60px;
    padding-left: 10px;
  }

  #title span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
</style>
