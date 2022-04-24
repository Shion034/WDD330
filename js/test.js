
let text ="";
const lists = ["Week1 notes", "Week2 notes", "Week3 notes", "Week4 notes", "Week5 notes",
    "Week6 notes", "Week7 notes", "Week8 notes", "Week9 notes", "Week10 notes",
    "Week11 notes", "Week12 notes", "Week13 notes"];

lists.forEach(myFunction);
const links = [
    { label: "Week1 notes", url: "week1/index.html" },
    { label: "Week2 notes", url: "week2/index.html" },
    { label: "Week3 notes", url: "Week3/index.html" },
    { label: "Week4 notes", url: "Week4/index.html" },
    { label: "Week5 notes", url: "Week5/index.html" },
    { label: "Week6 notes", url: "Week6/index.html" },
    { label: "Week7 notes", url: "Week7/index.html" },
    { label: "Week8 notes", url: "Week8/index.html" },
    { label: "Week9 notes", url: "Week9/index.html" },
    { label: "Week10 notes", url: "Week10/index.html" },
];

document.getElementById("demo").innerHTML = text;
function myFunction(item){
    text += item + "<br>";
}




function addlinkElement(){
    const linkelement = documnet.createElement("a");

}
    function addliElement() {
    const lielement = documnet.createElement("li");
    let lioutput = document.getElementById("lioutput").innerHTML = addliElement();
    lioutput.appendChild(lielement);
}