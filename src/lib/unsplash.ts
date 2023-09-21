import axios from "axios";
export const getUnsplashImage = async (query: string) => {
  const { data } = await axios.get(`
    https://api.unsplash.com/search/photos?per_page=1&query=${query}&client_id=${process.env.UNSPLASH_API_KEY}&w=1080&h=600
    `);
  return data.results[0].urls.small_s3;
};