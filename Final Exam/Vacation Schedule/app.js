document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("list");
  const addButton = document.getElementById("add-vacation");
  const editButton = document.getElementById("edit-vacation");
  const nameInput = document.getElementById("name");
  const daysInput = document.getElementById("num-days");
  const dateInput = document.getElementById("from-date");

  let selectedVacationId = null;

  addButton.addEventListener("click", addVacation);
  editButton.addEventListener("click", editVacation);

  loadVacations();

  function loadVacations() {
    fetch("http://localhost:3030/jsonstore/tasks/")
      .then((response) => response.json())
      .then((data) => {
        listContainer.innerHTML = "";
        Object.entries(data).forEach(([id, vacation]) => {
          const vacationItem = createVacationItem(id, vacation);
          listContainer.appendChild(vacationItem);
        });
      })
      .catch((error) => {
        console.error("Error loading vacations:", error);
      });
  }

  function createVacationItem(id, vacation) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("container");
    itemDiv.dataset.id = id;
    itemDiv.innerHTML = `
          <h2>${vacation.name}</h2>
          <h3>${vacation.date}</h3>
          <h3>${vacation.days}</h3>
          <button class="change-btn">Change</button>
          <button class="done-btn">Done</button>
        `;
    itemDiv
      .querySelector(".change-btn")
      .addEventListener("click", () => editForm(id, vacation));
    itemDiv
      .querySelector(".done-btn")
      .addEventListener("click", () => deleteVacation(id));
    return itemDiv;
  }

  function addVacation() {
    const name = nameInput.value;
    const days = Number(daysInput.value);
    const date = dateInput.value;

    if (name && days && date) {
      const newVacation = { name, days, date };

      fetch("http://localhost:3030/jsonstore/tasks/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newVacation),
      })
        .then(() => {
          loadVacations();
          clearInputs();
        })
        .catch((error) => {
          console.error("Error adding vacation:", error);
        });
    }
  }

  function editForm(id, vacation) {
    selectedVacationId = id;

    const vacationItemToRemove = document.querySelector(`[data-id="${id}"]`);
    listContainer.removeChild(vacationItemToRemove);

    nameInput.value = vacation.name;
    daysInput.value = vacation.days;
    dateInput.value = vacation.date;

    addButton.disabled = true;
    editButton.disabled = false;
  }

  function editVacation() {
    if (!selectedVacationId) return;

    const updatedVacation = {
      name: nameInput.value,
      days: Number(daysInput.value),
      date: dateInput.value,
    };

    fetch(`http://localhost:3030/jsonstore/tasks/${selectedVacationId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedVacation),
    })
      .then(() => {
        selectedVacationId = null;
        addButton.disabled = false;
        editButton.disabled = true;
        loadVacations();
        clearInputs();
      })
      .catch((error) => {
        console.error("Error editing vacation:", error);
      });
  }

  function deleteVacation(id) {
    fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        loadVacations();
      })
      .catch((error) => {
        console.error("Error deleting vacation:", error);
      });
  }

  function clearInputs() {
    nameInput.value = "";
    daysInput.value = "";
    dateInput.value = "";
  }
});
