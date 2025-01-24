/*
console.log("test.js is loaded");
const testArray = [];
testArray.push([1, 2, 3]);
testArray.push(["a", "b", "c"]);
console.log("all : " + testArray);
console.log("0 :" + testArray[0]);
console.log("0,0 : " + testArray[0][0]);
console.log("1 : " + testArray[1]);
console.log("1,0 : " + testArray[1][0]);
*/
var allCircles = [];

for (let i = 0; i < 10; i++) {
    var CircleInformation = [];
    let xposition = Math.random() * 300;
    CircleInformation.push(xposition);
    let yposition = Math.random() * 100;
    CircleInformation.push(yposition);
    let Rdius = 20;
    CircleInformation.push(Rdius);
    let allColors = ["red", "blue", "green", "yellow", "orange", "pink"];
    let ColorNumber = Math.floor(Math.random() * allColors.length);
    let Color = allColors[ColorNumber];
    CircleInformation.push(Color);
    let text = 1;
    CircleInformation.push(text);
    let speed = Math.random() * 20;
    CircleInformation.push(speed);

    allCircles.push(CircleInformation);
    /*
            console.log("xposition" + xposition);
            console.log("yposition" + yposition);
            console.log("Rdius" + Rdius);
            console.log("Color" + Color);
            console.log("text" + text);
            console.log("speed" + speed);
            */
}
console.log(allCircles);
CircleCount = allCircles.length;
console.log(CircleCount);




