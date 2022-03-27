<template>
  <nav>
    <div class="container">
      <nuxt-link to="/" class="logo">
        <img src="/logo.svg" alt="MehdiJaiDev" />
      </nuxt-link>
      <nuxt-link class="link" to="/#about">About</nuxt-link>
      <nuxt-link class="link" to="/#projects">Projects</nuxt-link>
      <nuxt-link class="link" to="/#contact">Contact</nuxt-link>
      <nuxt-link class="link cta" to="/resume.pdf">Resume</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style lang="sass" scoped>
nav
    width: 100%
    background-color: $black-light

    .container
        max-width: 1000px
        margin: 0 auto
        padding: 10px
        display: flex
        column-gap: 10px
        align-items: center

        .logo
            margin-right: auto
            img
                width: 30px

        .link
            padding: 5px 10px
            border-radius: 5px
            font-weight: 500
            text-decoration: none
            font-size: 0.9rem
            color: $gray-light
            transition: 0.4s ease-in
            &:not(.cta)
                &:hover
                    background: $black
                    color: $gray-light
            &.cta
                background: $primary-light
                color: $black
                font-weight: 600
                &:hover
                    background: $primary
</style>