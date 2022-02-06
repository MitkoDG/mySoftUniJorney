function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value)
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (const line of input) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

         for (const worker of workersData) {
            let [name, salary] = worker.split(' ');
            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            } 
            if (output.hasOwnProperty(restaurantName)){
               output[restaurantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(output);

      for (const entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);

         for (const [name, salary] of values) {
            totalSalary += salary;
            
         }
         avgSalary = totalSalary / values.length;
         if (avgSalary > currAvgSalary ) {
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }

      let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);
      let print = '';

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]}`);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`
      document.querySelector('#workers p').textContent = print;

   }
}

// alternative way

function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);
 
   function onClick() {
     //   TODO:
     const input = document.querySelector("textarea").value;
     const output1 = document.querySelector("#bestRestaurant").lastElementChild;
     const output2 = document.querySelector("#workers").lastElementChild;
     const data = JSON.parse(input);
     const restaurants = {};
     let bestSallary;
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
     console.log(typeof sortedWorkers[0].salary);
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