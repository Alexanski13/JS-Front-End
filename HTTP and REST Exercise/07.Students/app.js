function attachEvents() {
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", createStudent);

  async function createStudent() {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const facultyNumber = document.querySelector(
      'input[name="facultyNumber"]'
    ).value;
    const grade = document.querySelector('input[name="grade"]').value;

    // Validate inputs
    if (!firstName || !lastName || !facultyNumber || !grade) {
      const notification = document.querySelector(".notification");
      notification.textContent = "All fields are required!";
      return;
    }

    const studentData = {
      firstName,
      lastName,
      facultyNumber,
      grade: Number(grade),
    };

    const response = await fetch(
      "http://localhost:3030/jsonstore/collections/students",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      }
    );

    if (response.ok) {
      getStudents();
      clearFormInputs();
    } else {
      const notification = document.querySelector(".notification");
      notification.textContent = "Error creating student.";
    }
  }

  async function getStudents() {
    const response = await fetch(
      "http://localhost:3030/jsonstore/collections/students"
    );
    const students = await response.json();

    const tableBody = document.querySelector("tbody");
    const tableRows = Object.values(students).map((student) => {
      return `
      <tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.facultyNumber}</td>
        <td>${student.grade}</td>
      </tr>
    `;
    });

    tableBody.innerHTML = tableRows.join("");
  }

  function clearFormInputs() {
    const formInputs = document.querySelectorAll(".inputs input");
    formInputs.forEach((input) => (input.value = ""));

    const notification = document.querySelector(".notification");
    notification.textContent = "";
  }

  // Load existing students on page load
  getStudents();
}

attachEvents();
