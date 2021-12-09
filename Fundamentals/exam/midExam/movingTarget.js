function movingTarget(input) {
    let seq = input.shift().split(' ').map(Number);
  
    for (const el of input) {
      let commandInfo = el.split(' ');
      let command = commandInfo[0];
      let index = +commandInfo[1];
  
      if (command === 'Shoot') {
        let power = +commandInfo[2];
        if (index >= 0 && index < seq.length) {
          seq[index] -= power;
          if (seq[index] <= 0) seq.splice(index, 1);
        }
      } else if (command === 'Add') {
        let value = +commandInfo[2];
        if (index >= 0 && index < seq.length) {
          if (value > 0) seq.splice(index, 0, value);
        } else console.log('Invalid placement!');
      } else if (command === 'Strike') {
        let radius = +commandInfo[2];
        let start = index - radius;
        let end = index + radius;
        let isValid = true;
        for (let i = start; i <= end; i++) {
          if (i < 0 || i >= seq.length) isValid = false;
        }
        if (isValid) {
          if ((index === 0, radius === 0)) seq.splice(index, 1);
          seq.splice(start, end);
        } else console.log('Strike missed!');
      } else if (command === 'End') {
        console.log(seq.join('|'));
        break;
      }
    }
  }
//   seq.splice(start, end); тук end трябва да е броят на елементите, които искаш да изтриеш(в случай (2,0) няма да работи), след като започваш от start пробвай на мястото на end да сложиш (radius*2)(елементи от ляво и елементи от дясно) +1(даденият индекс, който също трябва да изтриеш)