// Controler constructor
function Controler() {
    console.log("create Controler !");
}

// Controler methods
// 

// refresh Main display 
Controler.prototype.onMainRefresh = function (e) {
    view.updateMainCounter(model.count);
    console.log("refresh main (" + model.count + ") !");
};

// refresh Main display 
Controler.prototype.onDisplayRefresh = function (e) {
    view.updateDisplayCounter(model.count);
    console.log("refresh display (" + model.count + ") !");
};

// on ++ click 
Controler.prototype.onIncClick = function (e) {
    model.inc();
    view.updateCounter(model.count);
    console.log("on ++ click (" + model.count + ") !");
};

// on -- click 
Controler.prototype.onDecClick = function (e) {
    model.dec();
    view.updateCounter(model.count);
    console.log("on -- click (" + model.count + ") !");
};

