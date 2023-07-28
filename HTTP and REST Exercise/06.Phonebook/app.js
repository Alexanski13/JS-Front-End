// app.js
function attachEvents() {
  const loadBtn = document.getElementById("btnLoad");
  const createBtn = document.getElementById("btnCreate");
  const phonebookList = document.getElementById("phonebook");
  const personInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");

  const baseURL = "http://localhost:3030/jsonstore/phonebook";

  // Function to create a new entry in the phonebook
  async function createEntry() {
    const person = personInput.value;
    const phone = phoneInput.value;

    if (!person || !phone) {
      alert("Both Person and Phone fields are required.");
      return;
    }

    const data = {
      person,
      phone,
    };

    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create entry.");
      }

      // Clear input fields and reload the phonebook
      personInput.value = "";
      phoneInput.value = "";
      loadPhonebook();
    } catch (error) {
      console.error(error.message);
    }
  }

  // Function to delete an entry from the phonebook
  async function deleteEntry(key) {
    try {
      const response = await fetch(`${baseURL}/${key}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete entry.");
      }

      // Reload the phonebook after successful deletion
      loadPhonebook();
    } catch (error) {
      console.error(error.message);
    }
  }

  // Function to load phonebook entries from the server
  async function loadPhonebook() {
    try {
      const response = await fetch(`${baseURL}`);
      const data = await response.json();

      // Clear the phonebook list before adding entries
      phonebookList.innerHTML = "";

      // Batch processing to improve performance
      const fragment = document.createDocumentFragment();
      for (const key in data) {
        const { person, phone } = data[key];
        const listItem = document.createElement("li");
        listItem.innerText = `${person}: ${phone}`;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteEntry(key));
        listItem.appendChild(deleteBtn);
        fragment.appendChild(listItem);
      }
      phonebookList.appendChild(fragment);
    } catch (error) {
      console.error(error.message);
    }
  }

  // Event listeners
  loadBtn.addEventListener("click", loadPhonebook);
  createBtn.addEventListener("click", createEntry);

  // Initial load of the phonebook
  loadPhonebook();
}

attachEvents();
