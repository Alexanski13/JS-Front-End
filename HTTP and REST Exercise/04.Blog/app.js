function attachEvents() {
  const postsDropdown = document.getElementById("posts");
  const btnLoadPosts = document.getElementById("btnLoadPosts");
  const postTitle = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");
  const postComments = document.getElementById("post-comments");
  const btnViewPost = document.getElementById("btnViewPost");

  const baseURL = "http://localhost:3030/jsonstore/blog";

  async function getPosts() {
    try {
      const response = await fetch(`${baseURL}/posts`);
      if (!response.ok) {
        throw new Error("Failed to fetch posts.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

  async function getComments() {
    try {
      const response = await fetch(`${baseURL}/comments`);
      if (!response.ok) {
        throw new Error("Failed to fetch comments.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error;
    }
  }

  async function loadPosts() {
    try {
      const [posts, comments] = await Promise.all([getPosts(), getComments()]);
      postsDropdown.innerHTML = ""; // Clear previous posts

      for (const postId in posts) {
        const post = posts[postId];
        const option = document.createElement("option");
        option.value = postId;
        option.textContent = post.title;
        postsDropdown.appendChild(option);
      }
    } catch (error) {
      console.error("Error loading posts:", error);
    }
  }

  async function viewPostComments() {
    try {
      const selectedPostId = postsDropdown.value;
      const posts = await getPosts();
      const comments = await getComments();

      const post = posts[selectedPostId];
      const postCommentsArray = Object.values(comments).filter(
        (comment) => comment.postId === selectedPostId
      );

      postTitle.textContent = post.title;
      postBody.textContent = post.body;

      postComments.innerHTML = "";
      postCommentsArray.forEach((comment) => {
        const li = document.createElement("li");
        li.textContent = comment.text;
        postComments.appendChild(li);
      });
    } catch (error) {
      console.error("Error viewing post comments:", error);
    }
  }

  btnLoadPosts.addEventListener("click", loadPosts);
  btnViewPost.addEventListener("click", viewPostComments);
}

attachEvents();
