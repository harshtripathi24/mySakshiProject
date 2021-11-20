document
  .getElementById("forgetPassForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
  });

function forgetPass() {
  const email = document.getElementById("email").value;
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      alert("Reset Link Send to Your Email");
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;
      // ..
    });
}
