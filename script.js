var begin = document.getElementById("button__begin");
var welcomeCard = document.getElementsByClassName("welcomeCard")[0];
var select = document.getElementsByClassName("select")[0];

var selectPapi = document.getElementById("selectPapi");
var selectApple = document.getElementById("selectApple");
var selectStitches = document.getElementById("selectStitches");

var papiCard = document.getElementById("papiCard");
var appleCard = document.getElementById("appleCard");
var stitchesCard = document.getElementById("stitchesCard");

var papiFeedSelect = document.getElementById("papiFeedSelect");
var papiPlaySelect = document.getElementById("papiPlaySelect");
var papiSleepSelect = document.getElementById("papiSleepSelect");
var papiRestartSelect = document.getElementById("papiRestartSelect");

var appleFeedSelect = document.getElementById("appleFeedSelect");
var applePlaySelect = document.getElementById("applePlaySelect");
var appleSleepSelect = document.getElementById("appleSleepSelect");
var appleRestartSelect = document.getElementById("appleRestartSelect");

var stitchesFeedSelect = document.getElementById("stitchesFeedSelect");
var stitchesPlaySelect = document.getElementById("stitchesPlaySelect");
var stitchesSleepSelect = document.getElementById("stitchesSleepSelect");
var stitchesRestartSelect = document.getElementById("stitchesRestartSelect");

var papi__health = document.getElementById("papi__health")
var papi__hunger = document.getElementById("papi__hunger")
var papi__mood = document.getElementById("papi__mood")
var papi__energy = document.getElementById("papi__energy")

var apple__health = document.getElementById("apple__health")
var apple__hunger = document.getElementById("apple__hunger")
var apple__mood = document.getElementById("apple__mood")
var apple__energy = document.getElementById("apple__energy")

var stitches__health = document.getElementById("stitches__health")
var stitches__hunger = document.getElementById("stitches__hunger")
var stitches__mood = document.getElementById("stitches__mood")
var stitches__energy = document.getElementById("stitches__energy")

var health = 0;

begin.addEventListener("click", function() {
    welcomeCard.style.display = "none";
    select.style.display = "block";  
});

selectPapi.addEventListener("click", function() {
    select.style.display = "none";
    papiCard.style.display = "block";
})

selectApple.addEventListener("click", function() {
    select.style.display = "none";
    appleCard.style.display = "block";
})

selectStitches.addEventListener("click", function() {
    select.style.display = "none";
    stitchesCard.style.display = "block";
})

/* --------------------------------- Papi --------------------------------- */

papiFeedSelect.addEventListener("click", function() {
    papi__hunger.style.color = "seagreen"
    papi__hunger.innerHTML = "YAY! My tummy is full :)"
    health += 25;
    levelUp(papi__health)
})

papiPlaySelect.addEventListener("click", function() {
    papi__mood.style.color = "seagreen"
    papi__mood.innerHTML = "Thank you for playing with me :)"
    health += 25;
    levelUp(papi__health)
})

papiSleepSelect.addEventListener("click", function() {
    papi__energy.style.color = "seagreen"
    papi__energy.innerHTML = "zzZzZZzZZzZZZz.."
    health += 25;
    levelUp(papi__health)
})

papiRestartSelect.addEventListener("click", function() {
    health = 0;
    welcomeCard.style.display = "block";
    select.style.display = "none";
    papiCard.style.display = "none";
    appleCard.style.display = "none";
    stitchesCard.style.display = "none";
    //call function to reset statuses
    resetStatus(papi__health, papi__hunger, papi__mood, papi__energy);
});

/* --------------------------------- Apple --------------------------------- */

appleFeedSelect.addEventListener("click", function() {
    apple__hunger.style.color = "seagreen"
    apple__hunger.innerHTML = "YAY! My tummy is full :)"
    health += 25;
    levelUp(apple__health)
})

applePlaySelect.addEventListener("click", function() {
    apple__mood.style.color = "seagreen"
    apple__mood.innerHTML = "Thank you for playing with me :)"
    health += 25;
    levelUp(apple__health)
})

appleSleepSelect.addEventListener("click", function() {
    apple__energy.style.color = "seagreen"
    apple__energy.innerHTML = "zzZzZZzZZzZZZz.."
    health += 25;
    levelUp(apple__health)
})

appleRestartSelect.addEventListener("click", function() {
    health = 0;
    welcomeCard.style.display = "block";
    select.style.display = "none";
    papiCard.style.display = "none";
    appleCard.style.display = "none";
    stitchesCard.style.display = "none";
    //call function to reset statuses
    resetStatus(apple__health, apple__hunger, apple__mood, apple__energy);
});

/* --------------------------------- Stitches --------------------------------- */

stitchesFeedSelect.addEventListener("click", function() {
    stitches__hunger.style.color = "seagreen"
    stitches__hunger.innerHTML = "YAY! My tummy is full :)"
    health += 25;
    levelUp(stitches__health)
})

stitchesPlaySelect.addEventListener("click", function() {
    stitches__mood.style.color = "seagreen"
    stitches__mood.innerHTML = "Thank you for playing with me :)"
    health += 25;
    levelUp(stitches__health)
})

stitchesSleepSelect.addEventListener("click", function() {
    stitches__energy.style.color = "seagreen"
    stitches__energy.innerHTML = "zzZzZZzZZzZZZz.."
    health += 25;
    levelUp(stitches__health)
})

stitchesRestartSelect.addEventListener("click", function() {
    health = 0;
    welcomeCard.style.display = "block";
    select.style.display = "none";
    papiCard.style.display = "none";
    appleCard.style.display = "none";
    stitchesCard.style.display = "none";
    //call function to reset statuses
    resetStatus(stitches__health, stitches__hunger, stitches__mood, stitches__energy);
});

function levelUp(villager) {
    if (health === 25) {
        villager.style.color = "coral"
        villager.innerHTML = "Feeling kinda meh."
    }

    if (health === 50) {
        villager.style.color = "darkturquoise"
        villager.innerHTML = "I'm getting there."
    }

    if (health === 75) {
        villager.style.color = "seagreen"
        villager.innerHTML = "I feel GREAT"
    }
}

function resetStatus(health, hunger, mood, energy) {
    health.style.color = "coral";
    health.innerHTML = "Meh";
    energy.style.color = "coral";
    energy.innerHTML = "Needs Rest";
    mood.style.color = "coral";
    mood.innerHTML = "Bored";
    hunger.style.color = "coral";
    hunger.innerHTML = "Hungry";
}

