<template>
  <section id="contact" class="contact">
    <header>
      <h2>Contact me.</h2>
      <p>
        I’m currently open for work as JS fullstack or VueJS frontend developer
        opportunity.
      </p>
      <div class="contact-info">
        <a href="mailto:contact@mehdijai.me">contact@mehdijai.me</a>
        <a href="tel:+212766710036">+212 7 66 71 00 36</a>
      </div>
    </header>
    <div class="contact-methods">
      <ContactForm />
    </div>
    <div class="sm">
      <a href="#">
        <img src="/github.svg" alt="GitHub" />
      </a>
      <a href="#">
        <img src="/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="#">
        <img src="/twitter.svg" alt="Twitter" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
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
    h2
      font-size: 2.5rem
      margin-bottom: 10px
    p
      font-weight: 400

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
        color: $primary-light
        font-weight: 500
        text-decoration: none

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
    &::after
      @include timelineBulb(9%)
</style>