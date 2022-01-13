function solve() {
    document.querySelector("#btnSend").addEventListener("click", onClick);
  
    function onClick() {
      //   TODO:
      const input = document.querySelector("textarea").value;
      const output1 = document.querySelector("#bestRestaurant").lastElementChild;
      const output2 = document.querySelector("#workers").lastElementChild;
      const data = JSON.parse(input);
      const restaurants = {};
      let avarageSalary = [];
  
      for (const res of data) {
        let [restaurant, ...rest] = res.split(" - ");
        const workers = rest.map((worker) => {
          const w = worker.split(", ");
          w.forEach((item) => {
            const [name, salary] = item.split(" ");
            if (!restaurants.hasOwnProperty(restaurant))
              restaurants[restaurant] = [];
            restaurants[restaurant].push({ name, salary });
          });
        });
      }
  
      for (const i in restaurants) {
        let currAvarage = restaurants[i].reduce((acc, curr) => {
          return +curr.salary + acc;
        }, 0);
        currAvarage /= restaurants[i].length;
        currAvarage = currAvarage;
        avarageSalary.push({ name: i, avarage: currAvarage });
      }
  
      const bestRestaurant = avarageSalary.sort(
        (a, b) => b.avarage - a.avarage
      )[0];
  
      const sortedWorkers = restaurants[bestRestaurant.name].sort(
        (a, b) => b.salary - a.salary
      );
  
      output1.textContent = `Name: ${
        bestRestaurant.name
      } Average Salary: ${bestRestaurant.avarage.toFixed(
        2
      )} Best Salary: ${(+sortedWorkers[0].salary).toFixed(2)}`;
  
      for (const worker of sortedWorkers) {
        output2.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }
    }
  }