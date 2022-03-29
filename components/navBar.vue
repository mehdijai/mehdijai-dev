<template>
  <nav>
    <div class="container">
      <nuxt-link to="/" class="logo">
        <img src="/logo.svg" alt="MehdiJaiDev" />
      </nuxt-link>
      <template v-for="(link, index) in links">
        <nuxt-link
          :key="index"
          class="link"
          :class="link.isCTA ? 'cta' : ''"
          :to="link.link"
          >{{ link.title }}</nuxt-link
        >
      </template>
      <button
        class="toggleMenu"
        :class="openMenu ? 'active' : ''"
        @click="openMenu = !openMenu"
      >
        <span class="material-icons">menu</span>
      </button>
    </div>
    <Transition name="slide">
      <div v-if="openMenu" class="menu-list">
        <template v-for="(link, index) in links">
          <nuxt-link
            :key="index"
            class="link"
            :class="link.isCTA ? 'cta' : ''"
            :to="link.link"
            >{{ link.title }}</nuxt-link
          >
        </template>
      </div>
    </Transition>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      openMenu: false,
      links: [
        {
          title: "About",
          link: "/#about",
          isCTA: false,
        },
        {
          title: "Projects",
          link: "/#projects",
          isCTA: false,
        },
        {
          title: "Contact",
          link: "/#contact",
          isCTA: false,
        },
        {
          title: "Resume",
          link: "/resume.pdf",
          isCTA: true,
        },
      ],
    }
  },
}
</script>

<style lang="sass">
nav
  width: 100%
  background-color: $black-light
  position: relative

  .container
    max-width: 1000px
    margin: 0 auto
    padding: 10px 20px
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

    .toggleMenu
      display: none
      background: transparent
      color: $gray-light
      transition: 0.4s background ease-in-out
      &.active
        background: $black
      span
        display: flex
        align-items: center
        justify-content: center

  .menu-list
    position: absolute
    z-index: 999
    top: 100%
    right: 0
    width: 200px
    background: $gray-light
    height: calc(100vh - 54px)
    display: flex
    flex-direction: column
    row-gap: 20px
    .link
      position: relative
      display: block
      text-align: center
      padding: 20px 15px
      font-weight: 600
      text-decoration: none
      font-size: 0.9rem
      color: $black
      transition: 0.4s ease-in
      &:first-of-type
        margin-top: 10px
      &:not(.cta)
        &::after
          content: ""
          position: absolute
          bottom: 0
          left: 0
          height: 2px
          width: 30%
          background: $black
        &:hover
          background: $black
          color: $gray-light
      &.cta
        margin-top: auto
        background: $primary-light
        color: $black
        font-weight: 700
        &:hover
          background: $primary

.slide-enter-active
  animation: menu-out 0.5s ease-in-out

.slide-leave-active
  animation: menu-out 0.5s ease-in-out reverse

@media (max-width: 475px)
  .toggleMenu
    display: block !important
  .link
    display: none
  .logo>img
    width: 25px !important

@keyframes menu-out
  from
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0)
  to
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
</style>