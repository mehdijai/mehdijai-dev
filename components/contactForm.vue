<template>
  <form>
    <div class="group">
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Email" />
    </div>
    <div class="group">
      <input type="text" placeholder="Subject" />
    </div>
    <div class="group">
      <textarea name="message" rows="10" placeholder="Message"></textarea>
    </div>
    <div class="group">
      <button type="submit">Send</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
}
</script>

<style lang="sass">
form
    margin: 0 auto
    .group
        width: 100%
        display: flex
        align-items: center
        column-gap: 10px
        margin-bottom: 10px
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