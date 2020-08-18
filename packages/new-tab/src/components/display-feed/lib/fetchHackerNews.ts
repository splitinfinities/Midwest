export const fetchHackerNews = async (filter, limit = 10) => {
  const response = await fetch(`https://api.usepanda.com/v4/articles?feeds=5718e53e7a84fb1901e05971&limit=30&page=1&sort=${filter}`);
  const json = await response.json();

  const data = [];

  json.forEach((item) => {

    if (data.length !== limit) {
      data.push({
        date: item.source.createdAt,
        title: item.title,
        description: item.description,
        image: false,
        link: item.url.target,
        comments: item.source.commentsCount || "0",
        votes: item.source.likesCount || "0"
      })
    }
  });

  return data;
}