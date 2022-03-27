<template>
  <section class="hero">
    <h1>Mehdi Jai,<span>JS Fullstack developer</span></h1>
    <div class="specialties row-1">
      <span>HTML5</span>
      <span>CSS3</span>
      <span>SASS</span>
      <span>JavaScript</span>
      <span>GSAP</span>
    </div>
    <div class="specialties row-2">
      <span>ES6</span>
      <span>VueJS</span>
      <span>NuxtJS</span>
      <span>NodeJS</span>
      <span>ElectronJS</span>
    </div>
    <div class="watermark">
      <img src="/logo.svg" />
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
}
</script>

<style lang="sass">
.hero
    height: calc(100vh - 58px)
    position: relative

    &::after
        @include timelineBulb(40%)

    h1
        font-size: 3rem
        position: absolute
        top: 40%
        left: 50%
        transform: translateX(-50%) translateY(-50%)
        span
            font-size: 3rem
            position: relative
        &::after
            content: ""
            background: $primary-light
            height: 10px
            width: 100%
            position: absolute
            bottom: -5px
            left: 0

    .specialties
        display: flex
        align-items: center
        column-gap: 20px
        position: absolute
        left: 50%
        top: 40%
        width: 50vw
        span
            font-weight: 500
            letter-spacing: 0.03rem
            color: rgba($primary-light, 0.5)
            user-select: none
        &.row-1
            justify-content: left
            transform: translateX(-50%) translateY(-5rem)
        &.row-2
            justify-content: right
            transform: translateX(-50%) translateY(5rem)

    .watermark
        width: 200px
        position: absolute
        right: 0
        bottom: 0
        opacity: 0.04
        img
            width: 100%
</style>