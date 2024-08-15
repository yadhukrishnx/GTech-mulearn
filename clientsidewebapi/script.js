const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");
const username = document.querySelector("#user-name");
const personalGreeting = document.querySelector(".personal-greeting");
const storyParagraph = document.querySelector("#story");

submitBtn.addEventListener("click", () => {
  const name = nameInput.value;
  localStorage.setItem("name", name);
  nameDisplayCheck(name);
  updateStory(name);
});

forgetBtn.addEventListener("click", () => {
  localStorage.removeItem("name");
  nameDisplayCheck("");
  updateStory("");
});

function nameDisplayCheck(name) {
  if (name) {
    personalGreeting.textContent = `Welcome to our website, ${name}!`;
    forgetDiv.style.display = "block";
    rememberDiv.style.display = "none";
  } else {
    personalGreeting.textContent = "Welcome to our website";
    forgetDiv.style.display = "none";
    rememberDiv.style.display = "block";
  }
}

function updateStory(name) {
  if (name) {
    username.textContent = name;
  } else {
    username.textContent = "Anonymous";
  }
}

// Initial check
nameDisplayCheck(localStorage.getItem("name") || "");
updateStory(localStorage.getItem("name") || "");
