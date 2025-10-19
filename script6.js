//0
console.log("Aidaza N SE-2433");
alert("IDK BYE");

//1
let name = "Qiuyuan";
let rarity = 5;
let isFemale = false;
console.log("name: " + name + ", rarity: " + rarity + ", gender: " + (isFemale ? "female" : "male"));
console.log("52 + 15 =", 52 + 15);
console.log("10 / 2 =", 10 / 2);

//2
document.getElementById("changetext").onclick = function () {
  document.getElementById("ttext").textContent = "erm embcebbichvcdhcdh";
};

//3
const box = document.getElementById("stylebox");
document.getElementById("bgbtn").onclick = function () {
  box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "" : "lightblue";
};
document.getElementById("fontbtn").onclick = function () {
  box.style.fontSize = box.style.fontSize === "24px" ? "" : "24px";
};

//4
const list = document.getElementById("itemlist");
document.getElementById("additem").onclick = function () {
  const li = document.createElement("li");
  li.textContent = "New item";
  list.appendChild(li);
};
document.getElementById("removeitem").onclick = function () {
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
};

//5
const colorBox = document.getElementById("colorbox");
colorBox.onmouseover = function () {
  colorBox.style.backgroundColor = "pink";
};
colorBox.onmouseout = function () {
  colorBox.style.backgroundColor = "";
};

//6
const input = document.getElementById("textinput");
const display = document.getElementById("displayinput");
input.onkeyup = function () {
  display.textContent = input.value;
};

//7
const n = document.getElementById("n");
const m = document.getElementById("m");
const res = document.getElementById("calcharo")
document.getElementById("addbtn").onclick = function () {
  res.textContent = Number(n.value) + Number(m.value);
};
document.getElementById("subbtn").onclick = function () {
  res.textContent = Number(n.value) - Number(m.value);
};
document.getElementById("mulbtn").onclick = function () {
  res.textContent = Number(n.value) * Number(m.value);
};
document.getElementById("divbtn").onclick = function () {
  res.textContent = Number(m.value) === 0 ? "ERROR" : Number(n.value) / Number(m.value);
};