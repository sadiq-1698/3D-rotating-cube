const cube = document.getElementsByClassName("cube-container")[0];
const totalcssRules = document.styleSheets[0].cssRules.length;
const keyframes = document.styleSheets[0].cssRules[totalcssRules - 1];
let animation1 = "cube-rotation .4s linear infinite";

let X = 0;
let Y = 0;
let Z = 0;

let frameObject = {
    '0%' : ` 0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) }`,
    '100%' : `100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg) }`
};

// keyframes.findRule('50%')

cube.addEventListener("dragstart", dragStart);
cube.addEventListener("dragend", dragEnd);

cube.addEventListener("onmouseover", onMouseOver);

function dragStart(e) {
    let { _x, _y } = onMouseOver(e);
    X = _x % 360;
    Y = _y % 360;
    Z = (_x - _y) % 360;
    frameObject['0%'] = ` 0% { transform: rotateX(${X}deg) rotateY(${Y}deg) rotateZ(${Z}deg) }`;
    frameObject['100%'] = ` 100% { transform: rotateX(${(X + 90) % 360}deg) rotateY(${(Y + 90) % 360}deg) rotateZ(${(Z + 90) % 360}deg) }`
    keyframes.deleteRule('0%');
    keyframes.appendRule(frameObject['0%']);
    keyframes.deleteRule('100%');
}

function dragEnd() {
    console.log("ended");
    console.log(frameObject['0%']);
    console.log(frameObject['100%']);
    keyframes.appendRule(frameObject['100%']);
    cube.style.animation = animation1;
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

function accelerate() {}

function declerate() {}
