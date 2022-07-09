function updateHeader(newHeading) {
  let heading = document.querySelector("h2");
  heading.innerHTML = newHeading;
}
function updateDiv(newDiv) {
  let div = document.querySelector("div");
  div.innerHTML = newDiv;
}
function becomeModelButton() {
  let name = prompt("What is your first and last name?");
  let email = prompt("What is your email address?");
  let age = prompt("How old are you?");
  if (age > 16) {
    updateHeader(
      `Hi, ${name}! Thank you for your submission. Your interest has been recieved, we will look into it and get back to you via email. 🌟`
    );
    updateDiv(``);
  } else {
    updateHeader(
      `Sorry, ${name}! You are not qualified for the age requirement. Please check our Junior Modelling section for available openings!🌠`
    );
    updateDiv(``);
  }
}
let applyButton = document.querySelector("button");
applyButton.addEventListener("click", becomeModelButton);
