const links = [
    { label: "Day01", url: "Day01/day1.html"},
    { label: "Day02", url: "Day02/index.html" },
    { label: "Day03", url: "Day03/index.html" },
    { label: "Day04", url: "Day04/index.html" },
    { label: "Day05", url: "Day05/index.html" },
    { label: "Day06", url: "Day06/index.html" },
    { label: "Day07", url: "Day07/index.html" },
    { label: "Day08", url: "Day08/index.html" },
    { label: "Day09", url: "Day09/index.html" },
]

const getol = document.querySelector("ol");

links.forEach (function (item){
    const Createli = document.createElement("li");
    const CreateA = document.createElement("a");

    CreateA.setAttribute("href", item.url);
    CreateA.textContent = item.label;

    getol.appendChild(Createli);
    Createli.appendChild(CreateA);
})