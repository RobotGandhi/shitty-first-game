var player = {
    things: 0
};

function increment() {
    player.things += 1;
    document.getElementById("counter").innerHTML = player.things;
}