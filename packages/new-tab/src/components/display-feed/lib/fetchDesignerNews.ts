export const fetchDesignerNews = async (filter, limit = 10) => {
  const response = await fetch(`https://api.designernews.co/api/v2/stories?sort=${filter}`);
  const json = await response.json();

  const data = [];

  json.stories.forEach((item) => {
    if (data.length !== limit) {
      data.push({
        date: item.created_at,
        title: item.title,
        description: item.content,
        image: false,
        link: `https://www.designernews.co/stories/${item.id}`,
        comments: item.comment_count || "0",
        votes: item.vote_count || "0"
      })
    }
  });

  return data
}