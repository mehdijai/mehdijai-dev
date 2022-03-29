export default function (to, from, savedPosition) {
  if (to.hash) {
    const el = document.querySelector(to.hash)
    if (el === null) {
      return {
        el: to.hash,
      }
    }
    if ("scrollBehavior" in document.documentElement.style) {
      return window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      })
    } else {
      return window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY)
    }
  }
  return { x: 0, y: 0, behavior: "smooth" }
}
