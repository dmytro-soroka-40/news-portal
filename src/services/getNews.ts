import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const getNews = (): Promise<AxiosResponse> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: { q: 'Elon Musk', lang: 'en' },
    headers: {
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0f00b7713mshfc9f212e1b90494p1c33e2jsn164385fb6b2a',
    },
  };

  return axios.request(options);
};

export default getNews;
