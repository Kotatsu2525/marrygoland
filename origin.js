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
  let speed = 2;
  const colors = ["yellow", "lightgreen", "lightblue", "lightpink"];
  const items = 4;

  let x = 0;

  // 各ボールの初期位置のy座標をランダムに設定
  let yPositions = Array.from({ length: items }, () =>
    Math.floor(Math.random() * gameCanvas.height),
  );

  function drawCircle() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    for (let i = 0; i < items; i++) {
      ctx.beginPath();
      ctx.arc(x, yPositions[i], radius, 0, Math.PI * 2);
      ctx.fillStyle = colors[i];
      ctx.fill();
      ctx.closePath();
    }
  }

  function animate() {
    speed = Math.floor(Math.random() * 3) + 1;
    drawCircle();
    x += speed;

    // 左右の境界をチェックして位置をリセット
    if (x - radius > gameCanvas.width) {
      x = -radius;
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// StartGame関数を呼び出す
document.addEventListener("DOMContentLoaded", (event) => {
  StartGame();
});
