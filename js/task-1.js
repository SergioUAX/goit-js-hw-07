const categories = document.querySelector("#categories");
console.log("Number of categories: " + categories.childElementCount);
categories.classList.add("task1-categories-ul");

const categoriesArray = categories.querySelectorAll(".item");
categoriesArray.forEach(item => {
    console.log("Category: " + item.querySelector("h2").textContent);
    console.log("Elements: " + item.querySelectorAll("li").length);
    item.querySelector("h2").classList.add("task1-categories-header");
    item.querySelector("ul").classList.add("task1-category-ul");
});
