function StartGame() {
    const canvas = document.getElementById('gameCanvas');
    let ctx = canvas.getContext('2d');

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    canvas.width = windowWidth - windowWidth / 10;
    canvas.height = windowHeight - windowWidth / 10;
    canvas.style.backgroundColor = "#E6E4EE";

    class Circle {
        constructor(xpos, ypos, radius, color, text) {
            this.xpos = xpos;
            this.ypos = ypos;
            this.radius = radius;
            this.color = color;
            this.text = text;
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = "#00000030";
            ctx.stroke();
            ctx.fillStyle = "#000";
            ctx.font = `${this.radius / 2}px Arial`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(this.text, this.xpos, this.ypos);
            ctx.closePath();
            console.log("CircleNo." + this.text + " OK!!");
        }
    }

    let Circle1 = new Circle(50, 50, 30, '#E5E5FF', "1");
    let Circle2 = new Circle(100, 100, 40, "#CED7DC", "2");
    let Circle3 = new Circle(164, 164, 50, "#FFB6C1", "3");
    let Circle4 = new Circle(242, 242, 60, "#FFFACD", "4");
    let Circle5 = new Circle(334, 334, 70, "#98FB98", "5");
    let Circle6 = new Circle(440, 440, 80, "#D8BFD8", "6");
    Circle1.draw(ctx);
    Circle2.draw(ctx);
    Circle3.draw(ctx);
    Circle4.draw(ctx);
    Circle5.draw(ctx);
    Circle6.draw(ctx);
}