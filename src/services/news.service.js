let news = [
  {
    id: 1,
    title: "Ons jabeur will win a major tournament",
    category: "Sport",
    image: "1.webp",
    comments: [
      { id: 1, text: "wawwww" },
      { id: 2, text: "Unbelievable" },
    ],
  },
  {
    id: 2,
    title: "Villarreal 2-3 Liverpool (2-5 agg) - Champions League",
    category: "Sport",
    image: "2.jfif",

    comments: [{ id: 1, text: "Come on" }],
  },
  {
    id: 3,
    title: "French President Macron wins reelection",
    category: "Politic",
    image: "3.jpg",
  },
]
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchNews = async () => {
  await delay(500)
  return news
}
export const fetchCategories = async () => {
  await delay(500)
  return news.map((n) => n.category).filter(onlyUnique)
}

export const fetchNewsById = async (id) => {
  console.log("id: ", id)
  await delay(500)
  const selectedNews = news.find((n) => n.id === Number(id))
  console.log("selectedNews: ", selectedNews)
  return selectedNews
}

export const addNews = async (news) => {
  await delay(500)
  const newNews = {
    id: Math.random(),
    title: news.title,
    category: news.category,
    image: "none.jpg",
  }

  news = news.concat(newNews)
  return newNews
}

export const deleteNews = async (id) => {
  await delay(500)
  news = news.filter((news) => news.id !== id)
}

export const updateNews = async (id, newsItem) => {
  await delay(500)
  let updatedNews = { id, ...newsItem }
  news = news.map((n) => {
    if (n.id === id) {
      updatedNews = { ...n, ...updatedNews }
      return updatedNews
    } else {
      return n
    }
  })
  return updatedNews
}

export const addComment = async (id, comment) => {
  await delay(500)
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
