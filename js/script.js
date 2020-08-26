/*eslint-env browser*/
/*exported increment*/
var player = {
    things: 0,
    thingsPerClick: 1
};

function increment() {
    'use strict';
    player.things += player.thingsPerClick;
    document.getElementById("counter").innerHTML = player.things;
}