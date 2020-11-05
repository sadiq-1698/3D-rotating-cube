const cube = document.getElementsByClassName('cube-container')[0];

cube.addEventListener('dragstart', dragStart);
cube.addEventListener('dragend', dragEnd);

function dragStart(){
    console.log("started");
}

function dragEnd(){
    console.log("ended");
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