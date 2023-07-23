function loadRepos() {
  const username = document.getElementById("username").value;
  const reposList = document.getElementById("repos");

  // Clear the contents of the list before any new content is appended
  reposList.innerHTML = "";

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      data.forEach((repo) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = repo.html_url;
        link.textContent = repo.full_name;
        listItem.appendChild(link);
        reposList.appendChild(listItem);
      });
    })
    .catch((error) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Error: ${error.message}`;
      reposList.appendChild(listItem);
    });
}
