let news = [
  {
    id: 1,
    title: "Ons jabeur win a major tournament",
    category: "Sport",
    comments: [
      { id: 1, text: "wawwww" },
      { id: 2, text: "Unbelievable" },
    ],
  },
  {
    id: 2,
    title: "Villarreal 2-3 Liverpool (2-5 agg) - Champions League",
    category: "Sport",
    comments: [{ id: 1, text: "Come on" }],
  },
  {
    id: 3,
    title: "French President Macron wins reelection",
    category: "Politic",
  },
]
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchNews = async () => {
  await delay(3000)
  return news
}
export const fetchCategories = async () => {
  await delay(1000)
  return news.map((n) => n.category).filter(onlyUnique)
}

export const fetchNewsById = async (id) => {
  console.log("id: ", id)
  await delay(1000)
  const selectedNews = news.find((n) => n.id === Number(id))
  console.log("selectedNews: ", selectedNews)
  return selectedNews
}

export const addComment = async (id, comment) => {
  await delay(1000)
  news = news.map((n) => {
    if (n.id === Number(id)) {
      return {
        ...n,
        comments: [
          ...n.comments,
          {
            id: n.comments.length + 1,
            text: comment,
          },
        ],
      }
    }
    return n
  })
  console.log("news: ", news)
}
