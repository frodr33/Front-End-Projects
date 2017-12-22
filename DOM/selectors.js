// 4 different ways to select the first <p>

document.getElementsByTagName('p')[0];
document.getElementsById("first");
document.getElementsByClassName("special")[0];
document.querySelector("#first");
document.querySelector("h1 + p");