// input fields from form
const cowInput = document.getElementById("cow");
const pigInput = document.getElementById("pig");
const mooseInput = document.getElementById("moose");
const colorInput = document.getElementById("pageColor");
// validate buttons
const validatePig = document.getElementById("evaluatePig");
const validateAll = document.getElementById("evaluateForm");

// eventListners
console.log(cowInput);
cowInput.addEventListener("keyup", evaluateCow);
validatePig.addEventListener("click", evaluatePig);
//validateAll.addEventListener("click", evaluateAll);

validateAll.addEventListener("click", evaluateAllInOne);

colorInput.addEventListener("change", changePageColor);

colorInput.value = "#FFFFFF";

let myStyles = document.getElementById("myCss");
console.log(myStyles.href);

// functions ------------------------------------------------------------


function evaluateCow() {

    if (cowInput.value == "ko" || pigInput.value == "gris" && mooseInput.value == "elg") {
        // user feedback
        cowInput.style.backgroundColor = "#99ff33";

    } else {

        cowInput.style.backgroundColor = "red";
    }

}


function evaluatePig() {
    //console.log("pig");

    if (pigInput.value == "gris") {

        pigInput.style.backgroundColor = "#99ff33";
    } else {

        pigInput.style.backgroundColor = "red";
    }
}

function evaluateAll() {
    //console.log("all");

    if (pigInput.value == "gris") {

        pigInput.style.backgroundColor = "#99ff33";
    } else {

        pigInput.style.backgroundColor = "red";
    }

    if (cowInput.value == "ko") {

        cowInput.style.backgroundColor = "#99ff33";
    } else {

        cowInput.style.backgroundColor = "red";
    }

    if (mooseInput.value == "elg") {

        mooseInput.style.backgroundColor = "#99ff33";
    } else {

        mooseInput.style.backgroundColor = "red";
    }



}


function evaluateAllInOne() {


    pigInput.style.backgroundColor = "#99ff33";
    cowInput.style.backgroundColor = "#99ff33";
    mooseInput.style.backgroundColor = "#99ff33";



    if (pigInput.value != "gris") {
        pigInput.style.backgroundColor = "red";
    }

    if (cowInput.value != "ko") {
        cowInput.style.backgroundColor = "red";
    }

    if (mooseInput.value != "elg") {

        mooseInput.style.backgroundColor = "red";
    }


}

function changePageColor() {
    console.log("change color");
    document.getElementsByTagName("body")[0].style.backgroundColor = colorInput.value;
}



// functions ------------------------------------------------------------



