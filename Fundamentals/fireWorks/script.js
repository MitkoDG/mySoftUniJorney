const canvas = document.getElementById("canvas");
const cnv = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 0;
const particleArray = [];
const mouse = {
  x: undefined,
  y: undefined,
};
window.addEventListener("resize", function (e) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 2; i++) {
    particleArray.push(new Particle());
  }
});

canvas.addEventListener("click", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 10; i++) {
    particleArray.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${hue}, 100%, 50%)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.01;
  }
  draw() {
    cnv.fillStyle = this.color;
    cnv.beginPath();
    cnv.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    cnv.fill();
  }
}
// function createParticle() {
//   for (let i = 0; i < 1000; i++) {
//     particleArray.push(new Particle());
//   }
// }
// createParticle();

function handleParticle() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();

    for (let j = i; j < particleArray.length; j++) {
      const dx = particleArray[i].x - particleArray[j].x;
      const dy = particleArray[i].y - particleArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        cnv.beginPath();
        cnv.strokeStyle = particleArray[i].color;
        cnv.lineWidth = particleArray[i].size / 10;
        cnv.moveTo(particleArray[i].x, particleArray[i].y);
        cnv.lineTo(particleArray[j].x, particleArray[j].y);
        cnv.stroke();
      }
    }
    if (particleArray[i].size <= 0.3) {
      particleArray.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  cnv.clearRect(0, 0, canvas.width, canvas.height);
  // cnv.fillStyle = `rgba(0,0,0,0.02)`;
  // cnv.fillRect(0, 0, canvas.width, canvas.height);
  handleParticle();
  hue += 2;
  requestAnimationFrame(animate);
}
animate();
