const cowInput = document.getElementById("cow");
const pigInput = document.getElementById("pig");
const mooseInput = document.getElementById("moose");

const evaluatePigButton = document.getElementById("evaluatePig");
evaluatePigButton?.addEventListener("click", evaluatePigFunvtion);

const headlines = document.getElementsByClassName("overskrifter");

cowInput.addEventListener("keyup", validateCow);


function validateCow() {
    console.log(cowInput.value);
    if (cowInput.value == "ko") {
        console.log("weeeeee");
    }


}

function evaluatePigFunvtion() {
    console.log("PIG");

}