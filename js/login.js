const password = "putri123";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === password) {
    sessionStorage.setItem("loggedIn", "true");
    showContent();
  } else {
    alert("Password salah cuy!");
  }
}

function showContent() {
  document.getElementById("lockScreen").classList.add("hidden");
  document.getElementById("mainContent").classList.remove("hidden");
}

window.onload = function () {
  if (sessionStorage.getItem("loggedIn") === "true") {
    showContent();
  }
};
