<template>
  <section class="error-section">
    <div>
      <div>
        <h1>404</h1>
        <h2>Sorry, the page you were looking for doesn't exist.</h2>
        <p>
          You can return to
          <NuxtLink class="extLink" to="/">Home page</NuxtLink> or
          <a class="extLink" href="/#contact">contact me</a> if you can't find
          what you are looking for.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ErrorLayout",
  layout: "error",
}
</script>

<style>
.error-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h1{
  font-size: 3rem;
}
h2{
  font-size: 1.5rem;
}
*{
  line-height: 1.5;
}
</style>