const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 50, y = 50;
let speed = 5;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") y -= speed;
  if (e.key === "ArrowDown") y += speed;
  if (e.key === "ArrowLeft") x -= speed;
  if (e.key === "ArrowRight") x += speed;
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "lime";
  ctx.fillRect(x, y, 20, 20);
  requestAnimationFrame(gameLoop);
}

gameLoop();
