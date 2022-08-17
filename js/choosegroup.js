document.getElementById("chooseGroupButton").addEventListener("click", chooseGroup);


function chooseGroup() {
    console.log("choose group");

    let myGroup = Math.floor(Math.random() * 4) + 1;
    document.getElementById("group").innerText = "gruppe: " + myGroup + " skal fremlægge";
}