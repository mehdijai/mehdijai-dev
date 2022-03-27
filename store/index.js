export const state = () => ({
  projects: [],
})

export const actions = {
  getProjects({ state }) {
    state.projects.push({
      title: "Autodrive.ma",
      thumbnail: "",
      tags: [
        { name: "Laravel", bg: "#F05340", color: "#ffffff" },
        { name: "Livewire", bg: "#FB70A9", color: "#4E56A6" },
      ],
    })
  },
}
