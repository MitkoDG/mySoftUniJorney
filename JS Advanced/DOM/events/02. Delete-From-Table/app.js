// function deleteByEmail() {
//   let emailInputElement = document.querySelector('input[name="email"]');

//   let emailCellElement = document.querySelectorAll("tr td:nth-of-type(2)");
//   let resultElement = document.getElementById("result");
//   let emailElements = Array.from(emailCellElement);
//   let targetElement = emailElements.find(
//     (x) => x.textContent == emailInputElement.value
//   );
//   // targetElement.parentNode.removeChild(targetElement) the old way of deleting

//   if (targetElement) {
//       targetElement.parentNode.remove();
//       resultElement.textContent = 'Deleted.'

//   } else {
//     resultElement.textContent = 'Not found'
//   }
// }

function deleteByEmail() {
  const email = document.querySelector('input[name="email"]').value;

  const rows = Array.from(document.querySelectorAll('tbody tr'))

  let deleted = false;
  for (const row of rows) {
   if (row.children[1].textContent == email) {
     row.parentNode.removeChild(row);
     deleted = true
     document.getElementById('result').textContent = 'Deleted.';
   }
  }
  if (!deleted) {
    document.getElementById('result').textContent = 'Not found.';
  }

}