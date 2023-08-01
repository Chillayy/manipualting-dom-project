let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let pContainer = document.getElementById("p-div");
let imgContainer = document.getElementById("img-div");

pButton.onclick = function () {
  pContainer.style.display = "block";
  imgContainer.style.display = "none";
  let newP = document.createElement("p");
  newP.innerHTML = "idk what to put here but hi";
  newP.style.backgroundColor = "black";
  newP.style.color = "white";
  pContainer.appendChild(newP);
};

imgButton.onclick = function () {
  imgContainer.style.display = "block";
  pContainer.style.display = "none";
  let newImage = document.createElement("img");
  newImage.src = "guts.png";
  newImage.style.width = "150px";
  imgContainer.appendChild(newImage);
};
