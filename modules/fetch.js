export async function fetchRepos(username, resultsDiv) {
  const url = `https://api.github.com/users/${username}/repos`;
  const userUrl = `https://api.github.com/users/${username}`;

  try {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "block"; // Show the loading spinner

    const response = await fetch(url);
    const data = await response.json();
    console.log("data:", data);

    if (data.length === 0) {
      resultsDiv.innerHTML =
        "<p class='error-message'>User has no public repositories.</p>";
      return;
    }

    if (data.message === "Not Found") {
      resultsDiv.innerHTML = "<p class='error-message'>User not found.</p>";
      return;
    }

    // Clear previous results
    resultsDiv.innerHTML = "";

    // Sort repositories by created_at date (most recent first)
    data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // Get avatar from first repository (since all repos have same owner)
    if (data.length > 0) {
      const avatarUrl = data[0].owner.avatar_url;

      const containerIntro = document.createElement("div");
      containerIntro.classList.add("container-intro");

      const avatar = document.createElement("img");
      avatar.classList.add("avatar-img");
      avatar.src = avatarUrl;

      const userIntro = document.createElement("div");
      userIntro.classList.add("user-intro");

      const userUsername = document.createElement("p");
      userUsername.classList.add("user-name");
      userUsername.innerHTML = `<strong>Username:</strong> ${username}`;

      const numberRepos = document.createElement("p");
      numberRepos.classList.add("public-repos");
      numberRepos.innerHTML = `<strong>Public repositories:</strong> ${data.length}`;

      userIntro.appendChild(userUsername);
      userIntro.appendChild(numberRepos);

      containerIntro.appendChild(avatar);
      containerIntro.appendChild(userIntro);

      resultsDiv.appendChild(containerIntro);
    }

    data.forEach((repo) => {
      const repoContainer = document.createElement("div");
      repoContainer.classList.add("repo-container");

      const topRepoLine = document.createElement("div");
      topRepoLine.classList.add("top-repo-line");

      const repoInfo = document.createElement("div");
      repoInfo.classList.add("repo-info");

      const repoName = document.createElement("p");
      repoName.classList.add("repo-name");
      repoName.innerHTML = `${repo.name}`;

      const link = document.createElement("a");
      link.href = repo.html_url;
      link.target = "_blank";

      link.innerHTML = '<i class="fa-solid fa-square-arrow-up-right"></i>';

      repoInfo.appendChild(repoName);
      repoInfo.appendChild(link);

      const date = document.createElement("p");
      date.classList.add("repo-date");
      date.innerHTML = `${repo.created_at}`;

      topRepoLine.appendChild(repoInfo);
      topRepoLine.appendChild(date);

      const description = document.createElement("p");
      description.classList.add("repo-description");
      description.innerHTML = `${repo.description}`;

      // Check if the description is null or empty
      description.innerHTML = repo.description
        ? repo.description
        : "No description available.";

      repoContainer.appendChild(topRepoLine);
      repoContainer.appendChild(description);

      resultsDiv.appendChild(repoContainer);
    });

    // Create a spacer div for adding space after the repositories
    const spacerDiv = document.createElement("div");
    spacerDiv.style.height = "50px";
    spacerDiv.style.backgroundColor = "#f4f4f4"; // no background color
    resultsDiv.appendChild(spacerDiv);
  } catch (error) {
    spinner.style.display = "none"; // Hide spinner
    console.log("Error fetching repositories:", error);
  } finally {
    spinner.style.display = "none"; // Hide the spinner when done
  }
}
