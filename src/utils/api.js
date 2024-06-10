// src/utils/api.js
import axios from "axios";

export const fetchBooks = async (query) => {
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
    );
    return response.data.docs;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
