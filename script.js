const circle = document.getElementById("circle");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
let rotateValue = circle.style.transform;
let rotateSum;
function Action(){
    upButton.addEventListener("click", function(){
        rotateSum = rotateValue + "rotate(-90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
    });
    downButton.addEventListener("click", function(){
        rotateSum = rotateValue + "rotate(90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
    });

};
Action();

