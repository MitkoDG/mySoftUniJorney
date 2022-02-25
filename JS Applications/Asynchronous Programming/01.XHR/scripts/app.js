function loadRepos() {
   const username = document.getElementById('username').value
   const url = `https://api.github.com/users/${username}/repos`

   fetch(url)
   .then(res => {
      if (res.ok == false) {
         throw new Error(`${res.status} ${res.statusText}`)
      }
      return res.json()
   })
   .then(data => console.log(data))
   .catch(error => console.log(error))
}