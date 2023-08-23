// // 4 Pillars of DOM ✅
// // 1. Selection of an element
// var a = document.querySelector("h1");
// // 2. changing HTML
// a.innerHTML = "Hacker hai bhai hacker";
// // 3. chaning CSS
// a.style.color = "Yellow";
// a.style.backgroundColor = "pink";
// // 4. Event listener
// a.addEventListener("click", function () {
//   a.innerHTML = "Hacker has been eliminated";
//   a.style.color = "pink";
//   a.style.backgroundColor = "yellow";
// });

// mini practice project

// var flag = 0;

// var bulb = document.querySelector("#bulb");
// var btn = document.querySelector("button");
// var state = document.querySelector("h1");
// btn.addEventListener("click", function () {
//   if (flag == 0) {
//     bulb.style.backgroundColor = "yellow";
//     btn.innerText = "OFF";
//     state.innerText = "Lights ON!";
//     flag = 1;
//   } else {
//     bulb.style.backgroundColor = "transparent";
//     btn.innerText = "ON";
//     state.innerText = "Lights OFF!";
//     flag = 0;
//   }
// });

var h = document.querySelectorAll("h2");
console.log(h);

h.forEach(function (e) {
  console.log(e);
});

let box = document.querySelector("#box");
box.innerHTML = "<h1>B4 I was a h1</h1>";
// box.textContent = "<h1>B4 I was a h1</h1>";
