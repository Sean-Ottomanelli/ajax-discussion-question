const fullname = document.getElementById("fullname");

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

let button = document.querySelector("button");


button.addEventListener("click", () => {

  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then((response) => {
      let name = response.results[0].name.first + " " + response.results[0].name.last;
      // debugger
      // console.log(finalArray)
      fullname.innerText = name
    })



})

