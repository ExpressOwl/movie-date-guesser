import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: "application/json"
  },
  params: {
    api_key: d1c5515298bb4019f0d3e176df7c2aa1,
    region: 'US',
    sort_by: 'popularity.desc',
    include_adult: false,
    page: Math.floor(Math.random() * 500),
  }
})