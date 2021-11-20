document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.replace("../Homepage.html");
  }
});

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;
    });
}

async function googleLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  await firebase
    .auth()
    .signInWithPopup(provider)
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;
    });
}
