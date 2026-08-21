function hamburger() {
  var x = document.getElementById("topnav-id");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}