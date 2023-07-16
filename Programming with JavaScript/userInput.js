/*
let answer = prompt("What is your name?");
if (typeof answer === "string") {
  let h1 = document.createElement("h1");
  h1.innerText = answer;
  document.body.innerText = "";
  document.body.appendChild(h1);
}*/
// using html forms
let h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change";
let input = document.createElement("input");
input.setAttribute("type", "text");

document.body.innerText = "";
document.body.appendChild(h1);
document.body.appendChild(input);

/**Change deals with input value */
input.addEventListener("change", function () {
  h1.innerText = input.value;
});

/**ANother exercise */
let h12 = document.createElement("h1");
let arr = ["Example Domain", "First Click", "Second Click", "Third Click"];
function handleClicks() {
  switch (h12.innerText) {
    case arr[0]:
      h12.innerText = arr[0];
      break;

    case arr[1]:
      h12.innerText = arr[1];
      break;

    case arr[2]:
      h12.innerText = arr[2];
      break;

    case arr[3]:
      h12.innerText = arr[3];
      break;

    default:
      h12.innerText = arr[0];
      break;
  }
}

h12.addEventListener("click", handleClicks);
