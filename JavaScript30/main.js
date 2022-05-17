const links = [
    { label: "Day01", url: "Day01/day1.html"},
    { label: "Day02", url: "Day02/day2.html" },
    { label: "Day03", url: "Day03/day3.html" },
    { label: "Day04", url: "Day04/day4.html" },
    { label: "Day05", url: "Day05/day5.html" },
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