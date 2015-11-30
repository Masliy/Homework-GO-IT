var startTimer;
var stopTimer;
var enemy = document.getElementById("enemy");
var step = 5; /*начальная позиция цели, margin-left: 30%;*/
var leftSideEnemy = ['url(img/one.png)', 'url(img/two.png)', 'url(img/three.png)'];
var frontEnemy = ['url(img/front.png)', 'url(img/gunmanfire.png)', 'url(img/deadBody.png)', 'url(img/deadBody2.png)', 'url(img/heat.png)'];
var counterImage = 0;
var necessaryTime = 1.20;
var speed;
/*function totalScore() {
    var total = 0;
    return total;
alert("Вы заработали: " + totalScore() + " очков");
}*/

document.getElementById("start").onclick = function startGame() {

    var startGame = document.getElementById("start");
    startGame.classList.remove("visible");
    startGame.classList.add("hide");

    setTimeout(displayAll, 0);
    setInterval(enemyMove, 150);
}


function displayAll() {
    var counterGunmen = document.getElementById("gunmen");
    var counterYour = document.getElementById("your");
    counterGunmen.classList.remove("hide");
    counterYour.classList.remove("hide");
    shootHimBefore("gunmen_time", necessaryTime)
};


function timeToKill() {
    var fire = document.getElementById("fire");
    setTimeout('fire.classList.remove("hide")', 1000);
    setTimeout('enemy.style.backgroundImage = frontEnemy[1]', 1000);
    setTimeout("startTimer = Date.now()", 1000);
};

function shootHimBefore(id, necessaryTime) {
    document.getElementById(id).innerHTML = necessaryTime.toFixed(2);
};



function enemyMove() {

    enemy.style.left = "50%";
    enemy.classList.remove("hide");
    if (step > -10) {
        step -= 1;
        enemy.style.marginLeft = step + "%";
    }
    if (counterImage > -1) {
        enemy.style.backgroundImage = leftSideEnemy[counterImage];
        counterImage++;
        if (counterImage > 3) {
            enemy.style.backgroundImage = leftSideEnemy[counterImage];
            counterImage = 0;
        } else if (step == -10) {
            counterImage = undefined;
            enemy.style.backgroundImage = frontEnemy[0];
            timeToKill();


            $("#enemy").click(function() {
                stopTimer = Date.now();
                /*console.log(stopTimer);*/
                speed = (((stopTimer - startTimer) / 1000).toFixed(2));
                if (speed != NaN && speed > 0) {
                    document.getElementById("your_time").innerHTML = speed;
                };
                if (necessaryTime > speed) {
                    document.getElementById("fire").innerHTML = "ты выиграл";
                    enemy.style.backgroundImage = frontEnemy[3];
                } else if(necessaryTime < speed){
                    document.getElementById("fire").innerHTML = "трупак";
                }
            });
        }
    }


}
