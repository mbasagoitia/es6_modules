import { WishList } from "./wishlist";

const form = document.querySelector("#submitForm");
const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");

const makeOutput = document.querySelector("#car-make");
const modelOutput = document.querySelector("#car-model");
const yearOutput = document.querySelector("#car-year");

const removeButton = document.querySelector("#rmvBtn");

const list = document.querySelector("#wishListContainer ul");

let wishList = new WishList;

function showCarDetails(car) {

    makeOutput.textContent = car.make;
    modelOutput.textContent = car.model;
    yearOutput.textContent = car.year;

    removeButton.removeAttribute("disabled");
    removeButton.setAttribute("data-carId", car.id);
    
}

function updateDOMList () {

    list.innerHTML = "";

    for (let car of wishList.list) {
        let li = document.createElement("li");
        li.textContent = `${car.make} ${car.model}`;
        li.addEventListener("click", () => showCarDetails(car));
        list.appendChild(li);
    }
}

function addCar (event) {
    event.preventDefault();
    wishList.add(makeInput.value, modelInput.value, yearInput.value);
    updateDOMList();
    clearInputs();
}

form.addEventListener("submit", addCar);

function removeCar () {
    let carId = Number(removeButton.getAttribute("data-carId"));
    wishList.remove(carId);
    updateDOMList();
    makeOutput.textContent = "";
    modelOutput.textContent = "";
    yearOutput.textContent = "";
    removeButton.setAttribute("disabled", true);
}

removeButton.addEventListener("click", removeCar);

function clearInputs () {
    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
}