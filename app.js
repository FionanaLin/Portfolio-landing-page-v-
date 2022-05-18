//opening animation
const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastＷord = document.querySelector("#fourteenth");
const animation = document.querySelector("div.animation");
lastＷord.addEventListener("animationend", () => {
  animation.style =
    "transition: all 2s ease; opacity: 0; pointer-events: none;";
});

//Dynamic header
let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "#b98759BF";
    header.style.color = "white";
    header.style.boxShadow = "0 8px 8px -4px #736c6ca1";
    headerAnchor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    headerAnchor.forEach((a) => {
      a.style.color = "";
    });
  }
});

//RWD Navbar
const toggleButton = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("links")[0];

toggleButton.addEventListener("click", (e) => {
  navbarLinks.classList.toggle("active");
});

//cards
let tictactoe = "<h3>MeowMeow Tic Tac Toe</h3>";
let catInTheRain = "<h3>Cat in the Rain</h3>";
let pexels = "<h3>Photo Website</h3>";
let todo = "<h3>Fiona's Todo list</h3>";
let hawaii = "<h3>Hawaii Project</h3>";

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");

// card1
card1.addEventListener("mouseenter", (e) => {
  cardTitle1.innerHTML = "- HTML / CSS 手刻頁面樣式</br> - JavaScript 互動效果";
});
card1.addEventListener("mouseleave", (e) => {
  cardTitle1.innerHTML = tictactoe;
});

// card2
card2.addEventListener("mouseenter", (e) => {
  cardTitle2.innerHTML = "- CSS (SCSS) 動畫";
});
card2.addEventListener("mouseleave", (e) => {
  cardTitle2.innerHTML = catInTheRain;
});

// card3
card3.addEventListener("mouseenter", (e) => {
  cardTitle3.innerHTML = "- React製作前端界面</br>- Fetch Pexels API";
});
card3.addEventListener("mouseleave", (e) => {
  cardTitle3.innerHTML = pexels;
});

// card4
card4.addEventListener("mouseenter", (e) => {
  cardTitle4.innerHTML =
    "- HTML / CSS 手刻頁面樣式</br>- JavaScript 互動效果</br>- localStorage 保存list中資料";
});
card4.addEventListener("mouseleave", (e) => {
  cardTitle4.innerHTML = todo;
});

// card5
card5.addEventListener("mouseenter", (e) => {
  cardTitle5.innerHTML =
    "- HTML / CSS 手刻頁面樣式</br>- dynamic header 應用</br>- RWD應用，效能美感兼具";
});
card5.addEventListener("mouseleave", (e) => {
  cardTitle5.innerHTML = hawaii;
});
