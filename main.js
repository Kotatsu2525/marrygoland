let animationId;

function StartGame() {
    const canvas = document.getElementById('gameCanvas');
    let ctx = canvas.getContext('2d');

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    if (windowWidth > windowHeight) {
        if (windowWidth > 1000) {
            canvas.width = windowWidth - windowWidth / 10;
            canvas.height = windowHeight - windowWidth / 10;
        } else {
            canvas.width = windowWidth;
            canvas.height = windowHeight;
        }
    } else {
        if (windowHeight > 1000) {
            canvas.width = windowWidth - windowHeight / 10;
            canvas.height = windowHeight - windowHeight / 10;
        } else {
            canvas.width = windowWidth;
            canvas.height = windowHeight;
        }
    }
    canvas.style.backgroundColor = "#E6E4EE";
    console.log("canvas.width   " + canvas.width);
    console.log("canvas.height   " + canvas.height);

    ctx.beginPath();
    ctx.fillStyle





    class Circle {
        constructor(xpos, ypos, radius, color, text, speed, count) {
            this.xpos = xpos;
            this.ypos = ypos;
            this.radius = radius;
            this.color = color;
            this.text = text;
            this.speed = speed || 1;
            this.dx = 1 * this.speed;
            this.dy = 1 * this.speed;
            this.count = count;
        }

        draw(ctx) {
            // 円を描いて塗ります!!!
            ctx.beginPath();
            ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = "#00000030";
            ctx.stroke();
            // 文字書く!!!
            ctx.beginPath();
            ctx.fillStyle = "#000";
            ctx.font = `${this.radius / 2}px Arial`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(this.text, this.xpos, this.ypos);
        }

        drawww(ctx) {
            // 円を描いて塗ります!!!
            ctx.beginPath();
            ctx.moveTo(this.xpos, this.ypos);
            ctx.arc(this.xpos, this.ypos, this.radius, 30 * (Math.PI / 180), 330 * (Math.PI / 180), false);
            ctx.closePath();
            ctx.globalAlpha = 0.6;
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.globalAlpha = 0.3;
            ctx.strokeStyle = "#000000";
            ctx.stroke();
            // 文字書く!!!
            ctx.beginPath();
            ctx.fillStyle = "#000";
            ctx.font = `${this.radius / 2}px Arial`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(this.text, this.xpos, this.ypos);
            ctx.closePath();
        }

        animationDraw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.draw(ctx);
            this.xpos += this.dx;
            this.ypos += this.dy;
            if (this.xpos > canvas.width || this.xpos < 0) {
                this.xpos = 0;
            }
            if (this.ypos > canvas.height || this.ypos < 0) {
                this.ypos = 0;
            }
        }

        animationDrawww() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.drawww(ctx);
            this.xpos -= this.dx;
            this.ypos -= this.dy;
            if (this.xpos < 0 || this.xpos < 0) {
                this.xpos = canvas.width;
            }
            if (this.ypos < 0 || this.ypos < 0) {
                this.ypos = canvas.height;
            }
        }
    }




    class Img {
        constructor(src, xpos, ypos, maxwidth, maxheight, speed, range) {
            this.xpos = xpos;
            this.ypos = ypos;
            this.maxwidth = maxwidth;
            this.maxheight = maxheight;
            this.speed = speed || 10;
            this.range = range || 200;
            this.YrangePlus = this.ypos + this.range;
            this.YrangeMinus = this.ypos - this.range;
            this.dx = 1 * this.speed;
            this.dy = 1 * this.speed;
            this.gravity = 0.1;
            this.src = src;
            this.image = new Image();
            this.image.src = this.src;
            this.isFlipped = false;
            this.isAngle = false;
            this.angle = 0;
        }

        drawImg(ctx) {
            ctx.beginPath();
            let width = this.image.waidth;
            let height = this.image.height;

            if (width > this.maxwidth || height > this.maxheight) {
                let aspectRatio = width / height;
                if (width > height) {
                    width = this.maxwidth;
                    height = this.maxwidth / aspectRatio;
                } if (width < height) {
                    height = this.maxheight;
                    width = this.height * aspectRatio;
                } else {
                    if (this.maxwidth > this.maxheight) {
                        width = this.maxwidth;
                        height = this.maxwidth / aspectRatio;
                    } if (this.maxwidth < this.maxheight) {
                        height = this.maxheight;
                        width = this.height * aspectRatio;
                    } else {
                        width = this.maxwidth;
                        height = this.maxheight;
                    }
                }
                console.log("animationing!!!");
                //console.log("width   " + width + "height   " + height);
            }
            ctx.save();
            if (this.isFlipped) {
                ctx.scale(-1, 1);
                ctx.drawImage(this.image, -this.xpos - width, this.ypos, width, height);
                console.log("Flipped!!");
            } else {
                ctx.drawImage(this.image, this.xpos, this.ypos, width, height);
            }
            /*if (this.isAngle) {
                ctx.restore();
                ctx.rotate(this.angle * Math.PI / 180);
                ctx.drawImage(this.image, this.xpos, this.ypos, width, height);
                console.log("Angle!!");
            }*/
            ctx.restore();

        }

        animationImage() {
            this.image.onload = () => {
                //console.log("animationImage!!");
            };
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.drawImg(ctx);
            this.xpos += this.dx;
            this.ypos += this.dy;
            if (this.ypos > this.YrangePlus - this.maxheight) {
                this.dy += -this.gravity;
                //this.dy = -this.dy;
                this.isAngle = !this.isAngle;
                this.angle = -45;
            }
            if (this.ypos < this.YrangeMinus) {
                this.dy += this.gravity;
                //.dy = -this.dy;
                this.isAngle = !this.isAngle;
                this.angle = 45;
                this.gravity = this.gravity;
            }
            if (this.xpos > canvas.width) {
                this.dx = -this.dx;
                this.isFlipped = !this.isFlipped;
            }
            if (this.xpos < -this.maxwidth) {
                this.dx = -this.dx;
                this.isFlipped = !this.isFlipped;
            }
            //console.log("xpos   " + this.xpos);
            //console.log("ypos   " + this.ypos);
        }
    }















    document.getElementById("Circle").addEventListener("click", function () {
        HowMuhcCircle = Math.floor(Math.random() * 36);
        var allCircles = [];
        for (let i = 0; i < HowMuhcCircle; i++) {
            var CircleInformation = [];
            let xposition = Math.random() * canvas.width;
            CircleInformation.push(xposition);
            let yposition = Math.random() * canvas.height;
            CircleInformation.push(yposition);
            let Rdius = Math.random() * (50 - 10) + 10;
            CircleInformation.push(Rdius);
            let allColors = ["red", "blue", "green", "yellow", "purple", "pink"];
            let ColorNumber = Math.floor(Math.random() * allColors.length);
            let Color = allColors[ColorNumber];
            CircleInformation.push(Color);
            let text = 1 + i;
            CircleInformation.push(text);
            let speed = Math.random() * 2;
            CircleInformation.push(speed);

            allCircles.push(CircleInformation);
        }
        console.log(allCircles);
        CircleCount = allCircles.length;
        console.log("図形の個数は~~...." + CircleCount);

        let Circles = [];
        for (let i = 0; i < CircleCount; i++) {
            let newCircle = new Circle(allCircles[i][0], allCircles[i][1], allCircles[i][2], allCircles[i][3], allCircles[i][4], allCircles[i][5], CircleCount);
            Circles.push(newCircle);
            newCircle.draw(ctx);
        }
        let animationCircle = function () {
            for (let i = 0; i < Circles.length; i++) {
                Circles[i].animationDraw();
            }
            animationId = requestAnimationFrame(animationCircle);
        }
        animationCircle();
    });




    document.getElementById("AddImage").addEventListener("click", function () {
        console.log("AddImage clicked");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let img = "A.png";
        //let randomY = Math.random() * canvas.height;
        let randomY = canvas.height / 2;
        let newImag = new Img(img, 0, randomY, 100, 100, 3, 12.5);
        newImag.drawImg(ctx);
        let animationImg = function () {
            newImag.animationImage();
            animationId = requestAnimationFrame(animationImg);
        }
        animationImg();
    });



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



    document.getElementById("packman").addEventListener("click", function () {
        console.log("packman clicked");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let randomX = Math.random() * canvas.width;
        let randomY = Math.random() * canvas.height;
        let newCircle = new Circle(randomX, randomY, 20, "#000000", 1, 1);
        newCircle.drawww(ctx);
        console.log("Packmans!!!");

        let animationPackman = function () {
            animationId = requestAnimationFrame(animationPackman);
            newCircle.animationDrawww();
        }
        animationPackman();
    });



    document.getElementById("StopAnimation").addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log("StopAnimation!!");
        cancelAnimationFrame(animationId);
    })
    alert("Game Start!!");



    document.getElementById("DisplayBaseline").addEventListener("click", function () {
        console.log("DisplayBaseline");
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.strokeStyle = "#000";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.strokeStyle = "#000";
        ctx.stroke();
        let nowlineY = 0;
        for (let i = 0; i < canvas.width; i++) {
            nowlineY += 100;
            ctx.beginPath();
            ctx.moveTo(0, nowlineY);
            ctx.lineTo(canvas.width, nowlineY);
            ctx.strokeStyle = "red";
            ctx.stroke();
        }
        let nowlineX = 0;
        for (let i = 0; i < canvas.height; i++) {
            nowlineX += 100;
            ctx.beginPath();
            ctx.moveTo(nowlineX, 0);
            ctx.lineTo(nowlineX, canvas.height);
            ctx.strokeStyle = "red";
            ctx.stroke();
        }

    });

}