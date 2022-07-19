const links = [
    { label: "01 - JavaScript Drum Kit", url: "Day01/day1.html"},
    { label: "02 - JS and CSS Clock", url: "Day02/index.html" },
    { label: "03 - CSS Variables", url: "Day03/index.html" },
    { label: "04 - Array Cardio Day 1", url: "Day04/index.html" },
    { label: "05 - Flex Panel Gallery", url: "Day05/index.html" },
    { label: "06 - Type Ahead", url: "Day06/index.html" },
    { label: "07 - Array Cardio Day 2", url: "Day07/index.html" },
    { label: "08 - Fun with HTML5 Canvas", url: "Day08/index.html" },
    { label: "09 - Dev Tools Domination", url: "Day09/index.html" },
    { label: "10 - Hold Shift and Check Checkboxes", url: "Day10/index.html" },
    { label: "11 - Custom Video Player", url: "Day11/index.html" },
    { label: "12 - Key Sequence Detection", url: "Day12/index.html" },
    { label: "13 - Slide in on Scroll", url: "Day13/index.html" },
    { label: "14 - JavaScript References VS Copying", url: "Day14/index.html" },
    { label: "15 - LocalStorage", url: "Day15/index.html" },
    { label: "16 - Mouse Move Shadow", url: "Day16/index.html" },
    { label: "17 - Sort Without Articles", url: "Day17/index.html" },
    { label: "18 - Adding Up Times with Reduce", url: "Day18/index.html" },
    { label: "19 - Webcam Fun", url: "Day19/index.html" },
    { label: "20 - Speech Detection", url: "Day20/index.html" },
    { label: "21 - Geolocation", url: "Day21/index.html" },
    { label: "22 - Follow Along Link Highlighter", url: "Day22/index.html" },
    { label: "23 - Speech Synthesis", url: "Day23/index.html" },
    { label: "24 - Sticky Nav", url: "Day24/index.html" },

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