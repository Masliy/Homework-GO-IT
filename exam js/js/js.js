var startTimer;
var stopTimer;
var enemy = document.getElementById("enemy");
var step = 5; /*начальная позиция цели, margin-left: 30%;*/
var backgroundImage = ['url(img/one.png)', 'url(img/two.png)', 'url(img/three.png)'];
var frontEnemy = ['url(img/front.png)', 'url(img/gunmanfire.png)'];
var counterImage = 0;
/*function totalScore() {
    var total = 0;
    return total;
alert("Вы заработали: " + totalScore() + " очков");
}*/

function displayAll() {
    var counterGunmen = document.getElementById("gunmen");
    var counterYour = document.getElementById("your");
    counterGunmen.classList.remove("hide");
    counterYour.classList.remove("hide");
};


function timeToKill() {
    var fire = document.getElementById("fire");
    setTimeout('fire.classList.remove("hide")', 1000);
    setTimeout('enemy.style.backgroundImage = frontEnemy[1]', 1000);
    setTimeout("startTimer = Date.now()", 1000);
};




function enemyMove() {

    enemy.style.left = "50%";
    enemy.classList.remove("hide");
    if (step > -10) {
        step -= 1;
        enemy.style.marginLeft = step + "%";
    }
    if (counterImage > -1) {
        enemy.style.backgroundImage = backgroundImage[counterImage];
        counterImage++;
        if (counterImage > 3) {
            enemy.style.backgroundImage = backgroundImage[counterImage];
            counterImage = 0;
        } else if (step == -10) {
            counterImage = undefined;
            enemy.style.backgroundImage = frontEnemy[0];
            timeToKill();


            $("#enemy").click(function() {
                stopTimer = Date.now();
                console.log(stopTimer);
                /*console.log(stopTimer);*/
                var c = (((stopTimer - startTimer) / 1000).toFixed(2));
                if (c != NaN && c > 0) {
                    document.getElementById("your_time").innerHTML = c;
                };
            });
        }
    }
}








document.getElementById("start").onclick = function startGame() {

    var startGame = document.getElementById("start");
    startGame.classList.remove("visible");
    startGame.classList.add("hide");

    setTimeout(displayAll, 0);
    setInterval(enemyMove, 150);



}
