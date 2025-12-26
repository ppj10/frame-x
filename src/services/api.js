import axios from "axios";

export const imagePath = "https://image.tmdb.org/t/p/w500";
export const imagePathOriginal = "https://image.tmdb.org/t/p/original";

const baseURL = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_API_KEY;

// Trending
export const fetchTrending = async (timeWindow = "day") => {
  console.log(timeWindow);

  const { data } = await axios.get(
    `${baseURL}/trending/all/${timeWindow}?api_key=${apiKey}`
  );
  return data?.results;
}

// Movies & TV Shows Details
export const fetchDetails = async (mediaType, id) => {
  const { data } = await axios.get(
    `${baseURL}/${mediaType}/${id}?api_key=${apiKey}`
  );
  return data;
}


// MOVIES & SERIES - Credits

export const fetchCredits = async (type, id) => {
  const res = await axios.get(
    `${baseURL}/${type}/${id}/credits?api_key=${apiKey}`
  );
  return res?.data;
};

// MOVIES & SERIES - Videos

export const fetchVideos = async (type, id) => {
  const res = await axios.get(
    `${baseURL}/${type}/${id}/videos?api_key=${apiKey}`
  );
  return res?.data;
};

// DISCOVER

export const fetchMovies = async (page, sortBy) => {
  const res = await axios.get(
    `${baseURL}/discover/movie?api_key=${apiKey}&page=${page}&sort_by=${sortBy}`
  );
  return res?.data;
};

export const fetchTvSeries = async (page, sortBy) => {
  const res = await axios.get(
    `${baseURL}/discover/tv?api_key=${apiKey}&page=${page}&sort_by=${sortBy}`
  );
  return res?.data;
};

// SEARCH

export const searchData = async (query, page) => {
  const res = await axios.get(
    `${baseURL}/search/multi?api_key=${apiKey}&query=${query}&page=${page}`
  );
  return res?.data
};