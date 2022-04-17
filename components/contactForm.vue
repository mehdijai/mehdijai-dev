<template>
  <div class="form-wrapper">
    <div v-if="sending" class="loading">
      <img src="/loader.svg" />
    </div>
    <form class="contact-form" @submit.prevent="sendEmail">
      <div v-if="error" class="result error">
        <h2>{{ error }}</h2>
      </div>
      <div v-if="success" class="result success">
        <h2>Message was sent successfully! I will respond ASAP.</h2>
      </div>
      <div class="group">
        <input
          v-model="name"
          :disabled="sending"
          required
          type="text"
          placeholder="Full Name"
        />
        <input
          v-model="email"
          :disabled="sending"
          required
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="group">
        <input
          v-model="subject"
          :disabled="sending"
          required
          type="text"
          placeholder="Subject"
        />
      </div>
      <div class="group">
        <textarea
          v-model="message"
          :disabled="sending"
          required
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
      </div>
      <div class="group">
        <button type="submit" :disabled="sending">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      sending: false,
      name: "",
      email: "",
      subject: "",
      message: "",
      success: false,
      error: null,
    }
  },
  methods: {
    async sendEmail() {
      this.sending = true
      this.success = false
      this.error = null

      const response = await this.$sendEmail.send({
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      })

      if (response.status === "sent") {
        this.name = ""
        this.email = ""
        this.subject = ""
        this.message = ""
        this.sending = false
        this.success = true
      } else {
        this.sending = false
        this.error = "An error occurred! Please try again later."
      }

      setTimeout(() => {
        this.success = false
        this.error = null
      }, 5000)
    },
  },
}
</script>

<style lang="sass">
.form-wrapper
  position: relative
  .loading
    position: absolute
    z-index: 10
    top: 0
    left: 0
    height: 100%
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    background: rgba($black, 0.5)
    backdrop-filter: blur(2px)
.contact-form
  clip-path: circle(150% at 50% 0)
  margin: 0 auto
  .result
    text-align: center
    padding: 20px
    margin: 10px 0
    &.error
      border: 2px solid rgba($error, 0.5)
      background: rgba($error, 0.1)
      h2
        color: darken($error, 20)
    &.success
      border: 2px solid rgba($success, 0.5)
      background: rgba($success, 0.1)
      h2
        color: darken($success, 20)
  .group
    width: 100%
    display: flex
    align-items: center
    column-gap: 10px
    margin-bottom: 10px
    @media (max-width: 425px)
      flex-direction: column
      row-gap: 10px
    input, textarea
      width: 100%
      padding: 10px 13px
      border: none
      background: $black-light
      color: $gray-light
    button
      padding: 10px 15px
      margin: 0 auto
      border: none
      background: $black-light
      color: $gray-light
      cursor: pointer
      transition: 0.3s ease-in-out
      &:hover
        background: lighten($black-light, 5)
</style>