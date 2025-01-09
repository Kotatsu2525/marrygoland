function StartGame() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let angle = 0;
    const colors = ["red", "green", "blue", "yellow"];
    const items = 4;

    function drawGame() {
        const radius = Math.min(canvas.width, canvas.height) / 3;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < items; i++) {
            const itemAngle = angle + (i * (2 * Math.PI) / items);
            const x = centerX + radius * Math.cos(itemAngle);
            const y = centerY + radius * Math.sin(itemAngle);

            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2);
            ctx.fillStyle = colors[i];
            ctx.fill();
            ctx.closePath();
        }

        angle += 0.01;
    }

    function animate() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        ctx.beginPath();
        ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
        ctx.strokeStyle = "gray";
        ctx.stroke();
        ctx.closePath();

        const angle2 = Date.now() / 1000;
        const x2 = centerX + Math.cos(angle2) * 100;
        const y2 = centerY + Math.sin(angle2) * 100;

        ctx.beginPath();
        ctx.arc(x2, y2, 20, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();

        drawGame();
        requestAnimationFrame(animate);
    }

    animate();

    let targetColor = colors[Math.floor(Math.random() * colors.length)];
    console.log("target Color is " + targetColor);

    canvas.addEventListener("click", (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

        if (distance < 20) {
            console.log("You clicked the center");
        }
    });
}

// StartGame関数を呼び出す
document.addEventListener("DOMContentLoaded", (event) => {
    StartGame();
});
