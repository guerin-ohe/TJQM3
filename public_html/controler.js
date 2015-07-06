// Controler constructor
function Controler() {
    console.log("create Controler !");
}

// Controler methods
// 

// refresh Main display 
Controler.prototype.onMainRefresh = function (e) {
    view.updateCounter(model.count);
    console.log("refresh main (" + model.count + ") !");
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

