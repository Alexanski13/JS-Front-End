function create(words) {
  const container = document.querySelector("#content");
  words.forEach((word) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = word;
    p.style.display = "none";

    container.appendChild(div);
    div.appendChild(p);
    div.addEventListener("click", (e) => {
      const invisibleParagraph = e.currentTarget.querySelector("p");
      invisibleParagraph.style.display = "block";
    });
  });
}
