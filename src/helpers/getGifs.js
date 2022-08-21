export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=sMHOH3pA4DHAxDJaX4OvxB1RF0cz8kmf&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
