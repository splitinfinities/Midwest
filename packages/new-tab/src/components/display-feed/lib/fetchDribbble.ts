export const fetchDribbble = async (filter, limit = 5) => {
  const response = await fetch(`https://api.usepanda.com/v4/articles?feeds=5718e53d7a84fb1901e0590b&limit=30&page=1&sort=${filter}`);
  const json = await response.json();

  const data = [];

  json.forEach((item) => {
    if (data.length !== limit) {
      data.push({
        date: item.source.createdAt,
        title: item.title,
        description: item.description,
        image: item.image,
        link: item.url.target,
        comments: item.source.commentsCount || "0",
        votes: item.source.likesCount || "0"
      })
    }
  });

  return data;
}