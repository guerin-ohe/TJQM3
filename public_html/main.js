// main

// init app
function init() {
    //handle main refresh
    $(document).on("pageshow", "#main", controler.onMainRefresh);

    //handle click on ++
    $(document).on("click", "#inc", controler.onIncClick);

    //handle click on --
    $(document).on("click", "#dec", controler.onDecClick);
}


