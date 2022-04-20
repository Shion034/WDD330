
const lists = ["Week1 notes", "Week2 notes", "Week3 notes", "Week4 notes", "Week5 notes",
    "Week6 notes", "Week7 notes", "Week8 notes", "Week9 notes", "Week10 notes",
    "Week11 notes", "Week12 notes", "Week13 notes"];
const links = [
    { label: "Week1 notes", url: "week1/index.html" }
];

function createElement() {
    const lielement = documnet.createElement("li");
    const aelement = documnet.createElement("a");
    let lioutput = document.getElementById("lioutput");
    lioutput.appendChild(lielement);
}

function createArea(){
    var area = document.createElement("div");
    area.innerHTML = "追加要素";
    var demo = document.getElementById("demo");
    demo.appendChild(area);

}