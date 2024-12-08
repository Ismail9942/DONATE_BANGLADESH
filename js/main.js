function getNumbetValue(id) {
  const element = document.getElementById(id).innerText;
  const elementValue = Number(element);
  return elementValue;
}

function getElementId(id) {
  const elmentId = document.getElementById(id);
  return elmentId;
}

function blogHandleEvent(elment) {
  window.location.href = elment;
}

function toggleHandler(element, contentId) {
  const angleDown = element.querySelector(".fa-angle-down");
  const angleUp = element.querySelector(".fa-angle-up");
  const contentDiv = document.getElementById(contentId);

  if (contentDiv.classList.contains("hidden")) {
    const contentMap = {
      "blog-content-1":
        "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of objects, where each node in the tree corresponds to a part of the document, such as elements, attributes, and text.",
      "blog-content-2":
        "To select an element from the DOM, JavaScript provides multiple methods based on the requirements. Here are the most common ways to select elements:",
      "blog-content-3":
        "Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to handle events for its current and future child elements. Instead of adding event listeners to multiple child elements, the event is  to the parent.",
      "blog-content-4":
        "You can manipulate an element's attributes (e.g., src, href, class, id) using various DOM methods.",
    };

    contentDiv.innerHTML = `<p class="w-2/3">${contentMap[contentId]}</p>`;
    contentDiv.classList.remove("hidden");
    angleDown.classList.add("hidden");
    angleUp.classList.remove("hidden");
  } else {
    contentDiv.innerHTML = "";
    contentDiv.classList.add("hidden");
    angleDown.classList.remove("hidden");
    angleUp.classList.add("hidden");
  }
}

function handleClickListener(input, increment, decrement) {
  const inputValue = getElementId(input).value;
  const number = Number(inputValue);
  const incrementValue = getNumbetValue(increment);
  const decrementValue = getNumbetValue(decrement);

  if (decrementValue - number < 0) {
    return alert("Your Low Balance!");
  }

  if (Number.isNaN(number) || number < 0) {
    alert("Invalid a Number!");
    return;
  } else {
    const incrementPrice = number + incrementValue;
    getElementId(increment).innerText = incrementPrice;
    const newDecrementPrice = decrementValue - number;
    getElementId(decrement).innerText = newDecrementPrice;
  }
}

const mainContainer = getElementId("main_container");
const historyContainer = getElementId("history_section");

function handleMain(donate, history) {
  const btnDonate = getElementId(donate);
  const btnHistory = getElementId(history);
  mainContainer.classList.remove("hidden");
  historyContainer.classList.add("hidden");

  btnDonate.classList.add("bg-btnColor");
  btnHistory.classList.remove("bg-btnColor");
}
function handleHistory(donate, history) {
  const btnDonate = getElementId(donate);
  const btnHistory = getElementId(history);

  historyContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");

  btnHistory.classList.add("bg-btnColor");
  btnDonate.classList.remove("bg-btnColor");
}

function myFunction(input, text) {
  const inputText = getElementId(input).value;
  let today = new Date();
  let second = today.getSeconds();
  let minutes = today.getMinutes();
  let our = today.getHours();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  p1.classList.add("my-4");
  p2.classList.add("my-2");
  p1.innerText = `${inputText} Taka Donated for at ${text}`;
  p2.innerText = `${our}:${minutes}:${second} GMT ${day} Day ${month} Month  ${year} Year (Bangladesh Standart Time)`;
  historyContainer.appendChild(p1);
  historyContainer.appendChild(p2);
}
