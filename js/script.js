////// variable //////

var button = document.querySelector(".show-cat");
// console.log(button);
var cat = document.querySelector(".cat");
// console.log(cat);

////// user click buttons, function is triggered to show cat image //////

button.addEventListener("click", function() {
    // press the button and see message in console of its working
    // console.log("It's working!")
    cat.classList.add("show");
});
