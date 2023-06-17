import axios from "axios";
import create from "zustand";
export const useHackerNews = create((set) => ({
  loading: false,
  news: [],
  errorMessage: "",
  fetchNews: async (valueFilter = "react") => {
    set(() => ({ loading: true }));
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${valueFilter}`
      );
      set(() => ({ news: response?.data.hits, loading: false }));
    } catch (error) {
      set(() => ({ errorMessage: error, loading: false }));
    }
  },
}));
