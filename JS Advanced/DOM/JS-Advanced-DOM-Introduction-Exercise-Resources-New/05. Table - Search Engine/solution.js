function solve() {
  // testing how to add more rows and cells
  // let table = document.querySelector('tbody')
  // let newRow = table.insertRow(0);
  // let cell1 = newRow.insertCell(0)
  // let cell2 = newRow.insertCell(1)
  // let cell3 = newRow.insertCell(2)
  // cell1.textContent = 'DDG'
  // cell2.textContent = 'DDG2'
  // cell3.textContent = 'DDG3'

  document.querySelector("#searchBtn").addEventListener("click", onClick);

  let input = document.getElementById("searchField");
  let rows = document.querySelectorAll("tbody tr");



  function onClick() {

    for (const row of rows) {
      row.classList.remove('select')
      if (input.value !== '' && row.textContent.includes(input.value)) {
        console.log(row.textContent)
        row.className = 'select';
      }
    }
    input.value = '';
  }
}