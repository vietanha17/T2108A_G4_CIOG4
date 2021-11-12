var sx = document.getElementById('sx'); //Element to hold screenX
var sy = document.getElementById('sy'); //Element to hold screenX
var px = document.getElementById('px'); //Element to hold screenX
var py = document.getElementById('py'); //Element to hold screenX
var cx = document.getElementById('cx'); //Element to hold screenX
var cy = document.getElementById('cy'); //Element to hold screenX

function showPosition(event) {
    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientY;
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);
