// Model
//

// Model constructor 
function Model() {
    this.count = 0;
    console.log("create Model (" + this.count + ") !");
}

// inc
Model.prototype.inc = function () {
    this.count = this.count + 1;
}

// dec
Model.prototype.dec = function () {
    this.count = this.count - 1;
}

