<template>
  <section class="hero">
    <h1 class="headline">
      Mehdi Jai, <span>JavaScript Frontend developer</span>
    </h1>
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
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"

export default {
  name: "HeroSection",
  mounted() {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "power4.inOut" },
      scrollTrigger: ".hero",
    })
    tl.from(".headline", {
      clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      opacity: 0,
    })
    .from(
        CSSRulePlugin.getRule(".hero:after"),
        {
          cssRule: {
            y: -50,
            clipPath: "circle(0.1% at 50% 50%)",
          },
        },
        "-=0.7"
      )
      .from(
        ".row-1",
        {
          xPercent: -60,
          opacity: 0,
        },
        "-=0.6"
      )
      .from(
        ".row-2",
        {
          xPercent: -40,
          opacity: 0,
        },
        "-=0.6"
      )
  },
}
</script>

<style lang="sass">
.hero
  height: 100vh
  min-height: 480px
  position: relative

  .headline
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
    opacity: 1
    width: 519px
    font-size: 3rem
    position: absolute
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
    text-align: center
    text-transform: uppercase
    font-weight: 800
    span
      font-size: 3rem
      color: $primary-light

  .specialties
    display: flex
    align-items: center
    column-gap: 20px
    position: absolute
    left: 50%
    top: 50%
    width: 40vw
    span
      font-weight: 500
      letter-spacing: 0.03rem
      color: rgba($primary-light, 0.5)
      user-select: none
    &.row-1
      justify-content: left
      transform: translateX(-50%) translateY(-6rem)
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
      user-select: none
      width: 100%

  &::after
    @include timelineBulb(50%)

@media (max-width: 752px)
  .hero
    .headline
      top: 30%
      font-size: 2rem
      width: 341.5px
      span
        font-size: 2rem
    .specialties
      top: 30%
      opacity: 0.5
      span
        font-size: 0.9rem
      &.row-1
        justify-content: center
        transform: translateX(-50%) translateY(-5rem)
      &.row-2
        justify-content: center
        transform: translateX(-50%) translateY(4rem)
    &::after
      @include timelineBulb(25%)

@media (max-width: 425px)
  .hero
    .headline
      top: 35%
      font-size: 2rem
      line-height: 1.3
      width: auto
      span
        font-size: 2rem
    .specialties
      display: flex
      flex-wrap: wrap
      align-items: center
      column-gap: 20px
      row-gap: 8px
      position: absolute
      top: 60%
      opacity: 0.7
      &.row-1
        transform: translateX(-50%)
      &.row-2
        transform: translateX(-50%) translateY(5rem)
    .watermark
      width: 150px
      opacity: 0.02
      img
        width: 100%
    &::after
      @include timelineBulb(22%)
</style>
