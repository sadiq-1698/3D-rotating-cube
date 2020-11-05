const cube = document.getElementsByClassName('cube-container')[0];
const totalcssRules = document.styleSheets[0].cssRules.length;
const keyframes = document.styleSheets[0].cssRules[totalcssRules - 1];
let animation1 = "cube-rotation 1s linear infinite";

let X = 0;
let Y = 0;
let Z = 0;

// keyframes.findRule('50%')

cube.addEventListener('dragstart', dragStart);
cube.addEventListener('dragend', dragEnd);

cube.addEventListener('onmouseover', onMouseOver);

function dragStart(e) {
    console.log("started");
    let {_x , _y} = onMouseOver(e);
    X = _x % 360;
    Y = _y % 360;
    Z = (_x - _y) % 360;
    cube.style.transform = `rotateX(${X}deg) rotateY(${Y}deg) rotateZ(${Z}deg)`;
}

function dragEnd() {
    console.log(X + " " + Y + " " + Z);
    console.log("ended");
}

function onMouseOver(e) {
    _x = e.clientX;
    _y = e.clientY;
    return {
        _x,
        _y
    };
}


// rotate based on mouse positions
// var arrowRects = cube.getBoundingClientRect();
// var arrowX = arrowRects.left + arrowRects.width / 2;
// var arrowY = arrowRects.top + arrowRects.height / 2;

// addEventListener("mousemove", function(event) {
//     cube.style.transform = "rotate(" + Math.atan2(event.clientY - arrowY, event.clientX - arrowX, ) + "rad)";
// });





function accelerate() {

}

function declerate() {

}