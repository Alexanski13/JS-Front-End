window.addEventListener("load", solve);

function solve() {
  const studentNameInput = document.getElementById("student");
  const universityInput = document.getElementById("university");
  const scoreInput = document.getElementById("score");
  const nextButton = document.getElementById("next-btn");
  const previewList = document.getElementById("preview-list");
  const candidatesList = document.getElementById("candidates-list");

  nextButton.addEventListener("click", function () {
    const studentName = studentNameInput.value.trim();
    const university = universityInput.value.trim();
    const score = scoreInput.value.trim();

    if (studentName === "" || university === "" || score === "") {
      return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add("application");
    listItem.innerHTML = `
            <article>
                <h4>${studentName}</h4>
                <p>University: ${university}</p>
                <p>Score: ${score}</p>
            </article>
            <button class="action-btn edit">Edit</button>
            <button class="action-btn apply">Apply</button>
        `;

    previewList.appendChild(listItem);
    studentNameInput.value = "";
    universityInput.value = "";
    scoreInput.value = "";
    nextButton.disabled = true;

    listItem.querySelector(".edit").addEventListener("click", () => {
      studentNameInput.value = studentName;
      universityInput.value = university;
      scoreInput.value = score;
      previewList.removeChild(listItem);
      nextButton.disabled = false;
    });

    listItem.querySelector(".apply").addEventListener("click", () => {
      candidatesList.appendChild(listItem);
      listItem.removeChild(listItem.querySelector(".edit"));
      listItem.removeChild(listItem.querySelector(".apply"));
      nextButton.disabled = false;
    });
  });
}
