<template>
  <section class="about">
    <div itemscope itemtype="https://schema.org/Person" class="container">
      <div class="brief">
        <h2>About me.</h2>
        <p>
          <span itemprop="name">Mehdi Jai</span>,
          <span itemprop="jobTitle">VueJS Frontend web developer</span>. I'm a curious, autonomous developer. I started my journey in 2019 professionally. The beginning was with building my two majors SaaS; Tabarro3.ma, Autodrive.ma. I have a long experience with JavaScript/TypeScript, SCSS/SASS, NodeJS, and PHP Laravel, VueJS. Plus, ElectronJS, VBA, Figma, and other tools, programming languages, and skills.
        </p>
      </div>
      <div class="image">
        <img class="profile-image" itemprop="image" src="/profile-picture.png" />
        <svg
          class="v-line"
          width="2"
          height="444"
          viewBox="0 0 2 444"
          fill="none"
        >
          <path
            d="M1 1V443"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          class="h-line"
          width="452"
          height="2"
          viewBox="0 0 452 2"
          fill="none"
        >
          <path
            d="M451 1L0.99999 0.999961"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"

export default {
  name: "AboutSection",
  mounted() {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "power4.inOut" },
      scrollTrigger: ".about",
    })
    tl.from(".brief", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      opacity: 0,
    })
    .from(
      CSSRulePlugin.getRule(".about:after"),
      {
        cssRule: {
          y: -50,
          clipPath: "circle(0.1% at 50% 50%)",
        },
      },
      "-=0.7"
    )
    .from(".v-line", {
      height: 0,
    }, "-=0.7")
    .from(".h-line", {
      width: 0,
    }, "-=0.6")
    .from(".profile-image", {
      clipPath: "circle(0.1% at 100% 100%)"
    }, "-=0.6")
  },
}
</script>

<style lang="sass">
.about
  height: 100vh
  min-height: 550px
  display: flex
  position: relative

  .container
    max-width: 1000px
    margin: 0 auto
    display: flex
    align-items: center
    justify-content: center
    column-gap: 50px
    .brief
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)
      max-width: 400px
      h2
        font-size: 2rem
        margin-bottom: 10px
      p
        line-height: 1.4
        font-weight: 300
        text-align: justify
        span
          font-weight: 600

    .image
      position: relative
      width: 400px
      height: 470px
      .profile-image
        clip-path: circle(141.4% at 100% 100%)
        width: 100%
        height: 100%
        object-fit: cover
      .v-line
        position: absolute
        right: 0
        bottom: -50px
      .h-line
        position: absolute
        right: -50px
        bottom: 0
  &::after
    @include timelineBulb(40%)

@media (max-width: 1027px)
  .about
    .container
      .brief
        max-width: auto
      .image
        width: 300px
        .v-line
          bottom: -20px
          height: 300px
        .h-line
          right: -20px
          bottom: 0
          width: 350px

@media (max-width: 1027px)
  .about
    &::after
      @include timelineBulb(35%)
    .container
      .brief
        max-width: auto
        transform: translateX(-100px)
      .image
        width: 300px
        position: absolute
        z-index: -1
        opacity: 0.5
        right: 50px
        .v-line
          bottom: -20px
          height: 300px
        .h-line
          right: -20px
          width: 350px

@media (max-width: 753px)
  .about
    .container
      padding: 40px
      .brief
        max-width: auto
        transform: translateX(0)
      .image
        width: 200px
        height: 200px
        opacity: 0.4
        right: 50px
        bottom: 100px
        .v-line
          height: 250px
        .h-line
          width: 250px

@media (max-width: 543px)
  .about
    &::after
      @include timelineBulb(17%)
    .container
      display: block
      margin-top: auto
      margin-bottom: auto
      .brief
        max-width: auto
        transform: translateY(-60%)
      .image
        width: 200px
        height: 200px
        opacity: 0.4
        right: 50px
        bottom: 50px
        .v-line
          height: 250px
        .h-line
          width: 250px

@media (max-width: 320px)
  .about
    &::after
      @include timelineBulb(3%)
</style>