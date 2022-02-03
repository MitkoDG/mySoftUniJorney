function search() {
   let userWord = document.getElementById('searchText').value;
   let townsElement = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('result');
   let count = 0;

   for (let town of townsElement) {
      if (town.textContent.includes(userWord) && userWord !== "") {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         count++;
      } else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal';
      }
   }
   match.textContent = `${count} matches found`;
   document.getElementById('searchText').value = '';
}
