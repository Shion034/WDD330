
//リンク
const links = [
    { label: "Week1 notes", url: "week1/index.html" },
    { label: "Week2 notes", url: "week2/index.html" },
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