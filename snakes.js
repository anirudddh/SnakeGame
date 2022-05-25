const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
const scale = 10;
var snake;
var fruit;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.picklocation();
        var a1 = window.setInterval(() => {
            ctx.clearRect(0, 0, 300, 300);
            snake.update();
            snake.draw();
            fruit.draw();
            if (snake.eat(fruit)) {
                fruit.picklocation();
            }
            var x = snake.checkCollision();
            if (x === true) {
                var i = 0;
                var txt = 'Game Over. Final Score = ' + snake.score ;
                var speed = 100;

                function typeWrite() {
                    if (i < txt.length) {
                        document.getElementById("status").innerHTML += txt.charAt(i);
                        i++;
                        setTimeout(typeWrite, speed);
                    }
                }
                typeWrite();
                clearInterval(a1);
            }
        }, 150 / snake.level);
    window.setInterval(()=>{
        document.getElementById("Score").innerText = "Score:"+snake.score;
        document.getElementById("Level").innerText = "Level:"+snake.level;
    },50)
}());
window.addEventListener('keydown', ((evt)=>{
    const direction = evt.key.replace('Arrow','');
    snake.changeDirection(direction);
}));
document.getElementById("3").onclick = function () {
    snake.changeDirection('Up');
}
document.getElementById("4").onclick = function () {
    snake.changeDirection('Down');
}
document.getElementById("1").onclick = function () {
    snake.changeDirection('Left');
}
document.getElementById("2").onclick = function () {
    snake.changeDirection('Right');
}

