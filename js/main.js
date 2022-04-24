
//リンク
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
//querySelectorを使ってHTML内の要素を自由に選択・取得することができる。
const getOl = document.querySelector("ol");

//
links.forEach(function(item){
    //createElementを使って要素をHTML内に追加していく
    let liCreator = document.createElement("li");
    let aCreator = document.createElement("a");

    //setAttributeで要素自体に何かを追加することができるようだ←
    aCreator.setAttribute("href",item.url);
    aCreator.textContent = item.label;

    //appendChildをつかってHTML内に表示するように命令
    liCreator.appendChild(aCreator);
    getOl.appendChild(liCreator);
});