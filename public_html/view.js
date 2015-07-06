// View
//

// View constructor
function View() {
    console.log("create view !");
}

// View methods
//
View.prototype.updateCounter = function (v) {
    $('#counter1').text(v);
}

