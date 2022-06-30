function cathegoryClickGraficscard(clickID) {
    if (document.getElementById(clickID).style.backgroundColor == "red") {
        document.getElementById(clickID).style.backgroundColor = "#24282f";

        setAllVisible();

    } else {

        document.querySelectorAll(".graficscard").forEach(element => {
            element.style.display = "block";
        });

        document.getElementById("btn_2").style.background = "#24282f";
        document.querySelectorAll(".mainboard").forEach(element => {
            element.style.display = "none";
        });

        document.getElementById("btn_3").style.background = "#24282f";
        document.querySelectorAll(".powersupply").forEach(element => {
            element.style.display = "none";
        });

        document.getElementById(clickID).style.backgroundColor = "Red";

    }
}

function cathegoryClickMainboard(clickID) {
    if (document.getElementById(clickID).style.backgroundColor == "red") {
        document.getElementById(clickID).style.backgroundColor = "#24282f";

        setAllVisible();

    } else {


        document.querySelectorAll(".mainboard").forEach(element => {
            element.style.display = "block";
        });

        document.getElementById(clickID).style.backgroundColor = "Red";

        document.getElementById("btn_1").style.background = "#24282f";
        document.querySelectorAll(".graficscard").forEach(element => {
            element.style.display = "none";
        });

        document.getElementById("btn_3").style.background = "#24282f";
        document.querySelectorAll(".powersupply").forEach(element => {
            element.style.display = "none";
        });

    }
}

function cathegoryClickPowerSupply(clickID) {
    if (document.getElementById(clickID).style.backgroundColor == "red") {
        document.getElementById(clickID).style.backgroundColor = "#24282f";

        setAllVisible();

    } else {

        document.getElementById(clickID).style.backgroundColor = "Red";

        document.querySelectorAll(".powersupply").forEach(element => {
            element.style.display = "block";
        });

        document.getElementById("btn_1").style.background = "#24282f";
        document.querySelectorAll(".graficscard").forEach(element => {
            element.style.display = "none";
        });

        document.getElementById("btn_2").style.background = "#24282f";
        document.querySelectorAll(".mainboard").forEach(element => {
            element.style.display = "none";
        });

    }
}

function setAllVisible() {
    document.querySelectorAll(".graficscard").forEach(element => {
        element.style.display = "block";
    });

    document.querySelectorAll(".mainboard").forEach(element => {
        element.style.display = "block";
    });

    document.querySelectorAll(".powersupply").forEach(element => {
        element.style.display = "block";
    });
}