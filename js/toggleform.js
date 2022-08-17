
let myForm = document.getElementById("myForm");
let formButton = document.getElementById("toggleForm");

formButton.addEventListener("click", toggleFormFunc);


function toggleFormFunc() {

    console.log("disp: " + myForm.style.display);



    if (myForm.style.display == "none") {
        myForm.style.display = "inline-block";
        formButton.innerText = "Skjul form";

    } else {
        myForm.style.display = "none";
        formButton.innerText = "Vis form";
    }
}