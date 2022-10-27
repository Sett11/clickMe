window.onload = function() {
    let count = 0;
    let message = "You clicked me ";
    let div = document.getElementById("message");
    let button = document.getElementById("clickme");
    button.onclick = function() {
        count++;
        div.innerHTML = message + count + " times!";
    };
};





let direction = 'вправо';
let offset = 0;
let intervalLength = 20;
let clicks = 0;

$("#heading").offset({ left: offset, top: offset });

let moveHeading = function() {
    if (direction === 'вправо') {
        $("#heading").offset({ left: offset });
        offset++;
        if (offset > 300) {
            offset = 0;
            direction = 'вниз';
        }
    } else if (direction === 'вниз') {
        $("#heading").offset({ top: offset });
        offset++;
        if (offset > 300) {
            offset = 300;
            direction = 'влево';
        }
    } else if (direction === 'влево') {
        $("#heading").offset({ left: offset });
        offset--;
        if (offset < 0) {
            offset = 300;
            direction = 'вверх';
        }
    } else if (direction === 'вверх') {
        $("#heading").offset({ top: offset });
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = 'вправо';
        }
    }
};

let intervalId = setInterval(moveHeading, intervalLength);

$("#heading").click(function() {
    clearInterval(intervalId);
    intervalLength /= 2;
    clicks++;

    if (clicks > 10) {
        $("#heading").text("ooops...");
        $("#par").text("Ты прекрасен, мудило...");
    } else {
        intervalId = setInterval(moveHeading, intervalLength)

    }
});