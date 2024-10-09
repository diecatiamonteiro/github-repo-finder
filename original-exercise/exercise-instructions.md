# Using the GitHub API

Here you will create a very simple (but useful) tool that retrieves a list of all repositories created a user.

## Task

Using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), and the [GitHub Api](https://docs.github.com/en/rest);

- Build a website that allows a user to query and return all repositories on GitHub, created by a particular user
- For example, searching for the username `DigitalCareerInstitute` should return a list of all repositories created by `DigitalCareerInstitute`
- You are going to have to read the GitHub API documentation
- Look for an endpoint which handles the query "List repositories for a user"
- Don't be afraid of failure! Trying and failing is a great way to learn.
- Error messages are your friend 😸

## Requirements

- Use these files to write your solution;
  - [index.html](./index.html)
  - [css/main.css](./css/main.css)
  - [js/main.js](./js/main.js)
- There should be an `<input />` field for the search criteria
- There should be a `<button>` to activate the search
- Clicking the `<button>` should return and display a list of results (the repositories) from the API

## Expected Result

![Expected Result](./reference.gif)
