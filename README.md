# 🔍 GitHub Repo Finder  

A simple web application that allows users to search for and display public repositories of any GitHub user by entering their username. The app fetches data from the GitHub API and displays the repository name, creation date, description, and a direct link to the repository.


This project was created to practice fetching data from APIs and using JavaScript modules.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Error Handling](#error-handling)
- [Technologies Used](#technologies-used)
- [Preview](#preview)

## Demo

You can try out the Repository Finder app by visiting the following link:
[GitHub Repo Finder](https://diecatiamonteiro.github.io/github-repo-finder/)

## Features

- Search for GitHub repositories by entering a username.
- Display a user's public repositories, including:
  - User intro with username, avatar and number of public repositories.
  - Repository name.
  - Creation date.
  - Description.
  - Direct link to the repository on GitHub.
- Handle cases where:
  - The user is not found.
  - The user has no public repositories.
- Displays repositories in order from most recent to oldest.
- Displays loading animation while fetching repositories.
- User-friendly interface with responsive design.

## Error Handling

- If the entered GitHub username does not exist, an error message "User not found!" will be displayed.
- If the user exists but has no public repositories, the message "User has no public repositories." will be displayed.

## Technologies Used

- **HTML5**: For the page structure and layout.
- **CSS3**: For styling and layout, including a scrollbar and repository container design.
- **JavaScript (ES6)**: For handling user input, fetching data from the GitHub API, and dynamically updating the DOM.
- **GitHub API**: To fetch user repository data.

## Preview

### Desktop:

![Desktop](./screenshots/desktop.png)

### Mobile:

![Mobile](./screenshots/mobile.png)

<br>

# Thanks for reading. Enjoy your repository search!
