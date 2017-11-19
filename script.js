var container = document.querySelector(".parallax-container");
var bg = document.querySelector(".parallax-bg");
var move = document.querySelector(".parallax-move");

function shadow(event) {
    var width = container.offsetWidth;
    var height = container.offsetHeight;

    var walk = 50; // 50px

    var x = event.offsetX;
    var y = event.offsetY;
    var z = 0;

    var xWalk = Math.round((x / width * walk) - (walk / 2));
    var yWalk = Math.round((y / height * walk) - (walk / 2));

    bg.style.webkitTransform = `
translate3d(${xWalk/1.5}px, ${yWalk/1.5}px, ${z}px)`; 
    move.style.webkitTransform = `
translate3d(${xWalk}px, ${yWalk}px, ${z}px)`;
}

container.addEventListener("mousemove", shadow);