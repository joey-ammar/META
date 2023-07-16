const h2 = document.createElement("h2");
h2.innerText = "This is a text";
h2.setAttribute("id", "sub-heading");
h2.setAttribute("class", "secondery");
document.body.appendChild(h2);

let h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  h1.style.color = "blue";
});
