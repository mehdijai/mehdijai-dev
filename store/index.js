export const state = () => ({
  tags: require("../static/tags.json"),
  projects: [],
})

export const mutations = {
  setProjects(state) {
    state.projects = require("../static/projects.json").map((p) => {
      p.tags = state.tags.filter((t) => p.tags.includes(t.id))
      p.content = require("../static/projects/" + p.slug + "/content.md").default
      return p
    })
  },
}

export const getters = {
  getProjects(state) {
    return state.projects
  },
}
