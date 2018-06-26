import axios from "axios";

export default {
  // Gets all books
  searchArticles: function(articleData) {
  	console.log("API:" + articleData);
    return axios.get("localhost:3001/api/searchArticles", {params: {q:articleData}});
  }
};