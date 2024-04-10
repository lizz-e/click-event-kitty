////// variable //////

var button = document.querySelector(".show-cat");
// console.log(button);
var cat = document.querySelector(".cat");
// console.log(cat);

////// user click buttons, function is triggered to show cat image //////

button.addEventListener("click", function() {
    // press the button and see message in console of its working
    // console.log("It's working!")
    // cat.classList.add("show");

    if (cat.classList.contains("show")) {
        // console.log("yes");
        cat.classList.remove("show");
        button.innerText = "Wait comeback!";
        button.classList.add("disappear");
    }else {
        // console.log("no");
        cat.classList.add("show");
        button.innerText = "Shoo cat!";
        button.classList.remove("disappear");
    }
});
