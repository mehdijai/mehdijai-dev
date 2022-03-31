<template>
  <section class="contact">
    <header>
      <h2 class="contact-title">Contact me.</h2>
      <p class="contact-brief">
        I’m currently open for work as JS fullstack or VueJS frontend developer
        opportunity.
      </p>
      <div itemscope itemtype="https://schema.org/Person" class="contact-info">
        <a itemprop="email" href="mailto:contact@mehdijai.me"
          >contact@mehdijai.me</a
        >
        <a itemprop="telephone" href="tel:+212766710036">+212 7 66 71 00 36</a>
      </div>
    </header>
    <div class="contact-methods">
      <ContactForm />
    </div>
    <div class="sm">
      <a href="https://github.com/mehdijai">
        <img src="/github.svg" alt="GitHub" />
      </a>
      <a href="https://linkedin.com/in/mehdijai">
        <img src="/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://twitter.com/jai_mehdi">
        <img src="/twitter.svg" alt="Twitter" />
      </a>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"
export default {
  name: "ContactSection",
  mounted() {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power4.inOut" },
      scrollTrigger: ".contact",
    })
    tl.from(".contact-title", {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    })
      .from(
        CSSRulePlugin.getRule(".contact:after"),
        {
          cssRule: {
            y: -50,
            clipPath: "circle(0.1% at 50% 50%)",
          },
        },
        "-=0.7"
      )
      .from(
        ".contact-brief",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
        "-=0.5"
      )
      .from(
        ".contact-info > a",
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          stagger: 0.2,
        },
        "-=0.4"
      )
      .from(
        ".contact-form",
        {
          clipPath: "circle(0.1% at 50% 0)",
        },
        "-=0.5"
      )
      .from(
        ".sm > a",
        {
          opacity: 0,
          y: -5,
          stagger: 0.2,
        },
        "-=0.4"
      )
  },
}
</script>

<style lang="sass">
.contact
  position: relative
  min-height: 100vh
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  padding: 50px

  header
    text-align: center
    .contact-title
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)
      font-size: 2.5rem
      margin-bottom: 10px
    .contact-brief
      font-weight: 400
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)

    .contact-info
      display: flex
      justify-content: center
      column-gap: 30px
      margin-top: 20px
      margin-bottom: 30px
      @media (max-width: 425px)
        flex-direction: column
        row-gap: 10px
      a
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)
        @extend .extLink

  .contact-methods
    max-width: 1000px
    margin: 0 auto

  .sm
    margin-top: 50px
    display: flex
    column-gap: 30px
    align-items: center
    justify-content: center
    a
      transition: transform 0.2s ease-in-out
      &:hover
        transform: translateY(-2px)

  &::after
    @include timelineBulb(15%)

@media (max-width: 425px)
  .contact
    header
      .contact-title
        font-size: 2rem
    &::after
      @include timelineBulb(9%)
</style>