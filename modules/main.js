import { fetchRepos } from "./fetch.js";

const button = document.getElementById("search-button");
const inputField = document.getElementById("username");
const resultsDiv = document.getElementById("results");

button.addEventListener("click", () => {
  const username = inputField.value;
  console.log("username:", username);
  inputField.value = "";

  resultsDiv.innerHTML = "";

  if (username) {
    fetchRepos(username, resultsDiv);
  } else {
    resultsDiv.innerHTML = "<p class='error-message'>Please enter a GitHub username.</p>";

  }
});
