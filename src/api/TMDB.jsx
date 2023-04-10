import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: "application/json"
  },
  params: {
    api_key: 'process.env.REACT_APP_API_KEY',
    region: 'US',
    sort_by: 'popularity.desc',
    include_adult: false,
    page: Math.floor(Math.random() * 500),
  }
})