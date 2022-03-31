export default async function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }
  if (to.hash) {
    const el = await findEl(to.hash)
    if (el === null) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }
    if ("scrollBehavior" in document.documentElement.style) {
      return window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY
      })
    } else {
      return window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY)
    }
  }
  return { x: 0, y: 0, behavior: "smooth" }
}

const findEl = (hash, x) => {
  return (
    document.querySelector(hash) ||
    new Promise((resolve, reject) => {
      if (x > 50) {
        return resolve()
      }
      setTimeout(() => {
        resolve(findEl(hash, ++x || 1))
      }, 100)
    })
  )
}
