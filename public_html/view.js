// View
//

// View constructor
function View() {
    console.log("create view !");
}

// View methods
//

// update main counter
View.prototype.updateMainCounter = function (v) {
    $('#counter1').text(v);
}

// update display counter
View.prototype.updateDisplayCounter = function (v) {
    $('#counter2').text(v);
}
