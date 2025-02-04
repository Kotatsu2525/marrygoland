function StartGame() {
  const gameCanvas = document.getElementById("gameCanvas");
  const ctx = gameCanvas.getContext("2d");

  function resizeCanvas() {
    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const radius = 20;
  const colors = ["yellow", "lightgreen", "lightblue", "lightpink"];
  const items = 4;

  // ボールの情報を持つオブジェクトの配列を作成
  const balls = [];
  for (let i = 0; i < items; i++) {
    balls.push({
      x: Math.random() * gameCanvas.width,
      y: Math.random() * gameCanvas.height,
      color: colors[i % colors.length],
      speedX: (Math.random() - 0.5) * 10, // -5から5の範囲のランダムな速度
      speedY: (Math.random() - 0.5) * 10, // -5から5の範囲のランダムな速度
    });
  }

  function drawBalls() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    balls.forEach((ball) => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = ball.color;
      ctx.fill();
      ctx.closePath();
    });
  }

  function updateBalls() {
    balls.forEach((ball) => {
      ball.x += ball.speedX;
      ball.y += ball.speedY;

      // ボールがキャンバスの端に達したら反対側に戻す
      if (ball.x - radius > gameCanvas.width) {
        ball.x = -radius;
      }
      if (ball.x + radius < 0) {
        ball.x = gameCanvas.width + radius;
      }
      if (ball.y - radius > gameCanvas.height) {
        ball.y = -radius;
      }
      if (ball.y + radius < 0) {
        ball.y = gameCanvas.height + radius;
      }
    });
  }

  function animate() {
    drawBalls();
    updateBalls();
    requestAnimationFrame(animate);
  }

  animate();
}

// StartGame関数を呼び出す
document.addEventListener("DOMContentLoaded", (event) => {
  StartGame();
});
