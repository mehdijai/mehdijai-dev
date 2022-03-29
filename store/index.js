export const state = () => ({
  projects: [
    {
      id: 1,
      slug: "tabarro3-ma",
      title: "Tabarro3.ma",
      thumbnail: "",
      tags: [1, 3, 4, 5],
    },
    {
      id: 2,
      slug: "autodrive-ma",
      title: "Autodrive.ma",
      thumbnail: "",
      tags: [1, 2, 6, 5],
    },
    {
      id: 3,
      slug: "3sp-app",
      title: "3SP Application",
      thumbnail: "",
      tags: [7, 3, 8, 5, 9],
    },
    {
      id: 4,
      slug: "3sp-landing-page",
      title: "3SP Landing page",
      thumbnail: "",
      tags: [9, 10, 13, 5, 11, 12],
    },
    {
      id: 5,
      slug: "ytp-app",
      title: "YTP App",
      thumbnail: "",
      tags: [7, 3, 9, 5, 11, 8, 14],
    },
    {
      id: 6,
      slug: "medostudios-ma",
      title: "Medostudios.com",
      thumbnail: "",
      tags: [9, 10, 13, 5],
    },
  ],
  tags: [
    { id: 1, name: "Laravel", bg: "#F05340", color: "#ffffff" },
    { id: 2, name: "Livewire", bg: "#FB70A9", color: "#4E56A6" },
    { id: 3, name: "Vue", bg: "#42B883", color: "#ffffff" },
    { id: 4, name: "Vuetify", bg: "#7BC6FE", color: "#1B68C2" },
    { id: 5, name: "SASS", bg: "#CD6799", color: "#ffffff" },
    { id: 6, name: "AlpineJS", bg: "#77C1D2", color: "#2D3441" },
    { id: 7, name: "ElectronJS", bg: "#A0EBF9", color: "#272A37" },
    { id: 8, name: "SQLite", bg: "#8FD5F7", color: "#003856" },
    { id: 9, name: "NodeJS", bg: "#68A063", color: "#fafafa" },
    { id: 10, name: "ExpressJS", bg: "#FAFAFA", color: "#494949" },
    { id: 11, name: "GSAP", bg: "#88CE02", color: "#ffffff" },
    { id: 12, name: "Firebase", bg: "#FB70A9", color: "#4E56A6" },
    { id: 13, name: "EJS", bg: "#B4CA65", color: "#A91E50" },
    { id: 14, name: "Sequelize", bg: "#275887", color: "#ffffff" },
    { id: 15, name: "JavaScript", bg: "#F0DB4F", color: "#323330" },
  ],
})

export const getters = {
  getProjects(state) {
    const projects = []

    state.projects.forEach(({ title, thumbnail, tags, id, slug }) => {
      tags = state.tags.filter((t) => tags.includes(t.id))
      projects.push({ title, thumbnail, tags, id, slug })
    })

    return projects
  },
}
