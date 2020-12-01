function technology() {
  var technology = document.getElementById("technology");
  var agribusiness = document.getElementById("agribusiness");
  var health = document.getElementById("health");
  var business = document.getElementById("business");
  if ((technology.style.display = "none")) {
    technology.style.display = "block";
    agribusiness.style.display = "none";
    health.style.display = "none";
    business.style.display = "none";
  }
}

function agribusiness() {
  var technology = document.getElementById("technology");
  var agribusiness = document.getElementById("agribusiness");
  var health = document.getElementById("health");
  var business = document.getElementById("business");
  if ((agribusiness.style.display = "none")) {
    technology.style.display = "none";
    agribusiness.style.display = "block";
    health.style.display = "none";
    business.style.display = "none";
  }
}

function health() {
  var technology = document.getElementById("technology");
  var agribusiness = document.getElementById("agribusiness");
  var health = document.getElementById("health");
  var business = document.getElementById("business");
  if ((health.style.display = "none")) {
    technology.style.display = "none";
    agribusiness.style.display = "none";
    health.style.display = "block";
    business.style.display = "none";
  }
}

function business() {
  var technology = document.getElementById("technology");
  var agribusiness = document.getElementById("agribusiness");
  var health = document.getElementById("health");
  var business = document.getElementById("business");
  if ((business.style.display = "none")) {
    technology.style.display = "none";
    agribusiness.style.display = "none";
    health.style.display = "none";
    business.style.display = "block";
  }
}

var header = document.getElementById("btndiv");
var btns = header.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

function moreHistory() {
  var moreHistory = document.getElementById("moreHistory");
  if ((moreHistory.style.display = "block")) {
    moreHistory.style.display = "none";
  }
  if ((moreHistory.style.display = "none")) {
    moreHistory.style.display = "block";
  }
}

function hide() {
  var myElement = document.getElementById("hide");
  if (myElement) myElement.style.display = "none";
  showLink.style.display = "block";
  hideLink.style.display = "none";
}

function show() {
  var myElement = document.getElementById("show");
  if (myElement) myElement.style.display = "block";
  showLink.style.display = "none";
  hideLink.style.display = "block";
}

(function () {
  var button = document.querySelector(".moreHistoryButton");
  var box = document.querySelector(".moreHistory");
  var history = document.querySelector(".history");

  button.addEventListener("click", function () {
    box.classList.toggle("moreHistoryShow");
    history.classList.toggle("historyBottom");
    box.classList.toggle("scale-in-ver-top");
  });
})();