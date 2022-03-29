<template>
  <section id="about" class="about">
    <div class="container">
      <div class="brief">
        <h2>About me.</h2>
        <p>
          Mehdi Jai, UI/UX designer & JavaScript web developer. I started my
          journey in late 2014 out of curiosity. However, The start of my professional
          career was in 2019 with building my two majors SaaS; Tabarro3.ma,
          Autodrive.ma. I have a long experience with JavaScript, NodeJS, and PHP
          Laravel, with VueJS as a front-end framework. Plus, ElectronJS , VBA
          and Figma.
        </p>
      </div>
      <div class="image">
        <img src="/profile-picture.png" />
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
export default {
  name: "AboutSection",
}
</script>

<style lang="sass">
.about
    min-height: 100vh
    display: flex
    position: relative
    &::after
        @include timelineBulb(40%)
    .container
        max-width: 1000px
        margin: 0 auto
        display: flex
        align-items: center
        justify-content: center
        column-gap: 50px
        .brief
          max-width: 400px
          h2
              font-size: 2rem
              margin-bottom: 10px
          p
              line-height: 1.4
              letter-spacing: 0.2px
              font-weight: 300
              text-align: justify
        .image
          position: relative
          width: 400px
          height: 470px
          img
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