// Filter Cards
document.querySelectorAll(".show-more").forEach(function (p) {
  p.querySelector("button").addEventListener("click", function () {
    p.classList.toggle("show");
  });
});

// Cards Filters
(function (){
  "use strict";
  
  let btnAll = document.getElementById("all"),
      btnFound = document.getElementById("found"),
      btnLost = document.getElementById("lost"),
      foundCards = document.querySelectorAll(".found"),
      lostCards = document.querySelectorAll(".lost"),
      allCards = document.querySelectorAll(".card__item");
 
  // Filter All
  btnAll.onclick = function() {
    btnFound.classList.remove("active--btn");
    btnLost.classList.remove("active--btn");
    btnAll.classList.add('active--btn');
    for (let cards of allCards) { cards.style.display = "block"; }
  }
  // Filter Found
  btnFound.onclick = function() {
    btnAll.classList.remove("active--btn");
    btnLost.classList.remove("active--btn");
    btnFound.classList.add("active--btn");
    for (let cards of lostCards) { cards.style.display = "none"; }
    for (let cards of foundCards) { cards.style.display = "block"; }
  };
  // Filter Lost
  btnLost.onclick = function() {
    btnAll.classList.remove("active--btn");
    btnFound.classList.remove("active--btn");
    btnLost.classList.add('active--btn');
    for (let cards of foundCards) { cards.style.display = "none"; }
    for (let cards of lostCards) { cards.style.display = "block"; }
  };
}());

// Blog Posts
document.querySelectorAll(".post__desc .show-more").forEach(function (p) {
  p.querySelector("button").addEventListener("click", function () {
    p.classList.toggle("show");
    this.textContent = p.classList.contains("show") ? "Прочети по-малко" : "Прочети повече";
  });
});