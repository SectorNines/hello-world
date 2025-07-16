console.log("Script loaded successfully!");

let task = []; // Array to hold tasks
// Function to add a new task
document.addEventListener('DOMContentLoaded', function () {
    const addbutton = document.getElementById('#addbutton');
    const deletebutton = document.getElementById('#deletebutton');
    const textinput = document.getElementById('#textinput');
    const numberinput = document.getElementById('#numberinput');
    const dateinput = document.getElementById('#dateinput');
    const tablebody = document.getElementById('#tablebody');

  addButton.addEventListener('click', function (e) {
    e.preventDefault();

    const text = textInput.value.trim();
    const number = numberInput.value;
    const date = dateInput.value;

    if (!text || !number || !date) {
      alert('Semua input harus diisi!');
      return;
    }

    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="px-4 py-2">${text}</td>
      <td class="px-4 py-2">Rp ${parseInt(number).toLocaleString()}</td>
      <td class="px-4 py-2">${date}</td>
    `;
    tableBody.appendChild(row);

    // Kosongkan input
    textInput.value = '';
    numberInput.value = '';
    dateInput.value = '';
  });

  deleteButton.addEventListener('click', function (e) {
    e.preventDefault();
    const rows = tableBody.querySelectorAll('tr');
    if (rows.length > 1) {
      tableBody.removeChild(rows[rows.length - 1]);
    } else {
      alert('Tidak ada baris yang bisa dihapus.');
    }
  });
});








