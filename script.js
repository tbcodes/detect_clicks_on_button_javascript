// Created By Truzz Blogg
// Follow us on Youtube: https://www.youtube.com/c/TonyLatreTechBlog/videos
// Follow us on Youtube: https://www.youtube.com/c/TruzzBlogg/videos

let btn1 = document.querySelector('#clickbtn');
let showclicks = document.querySelector('#showdata');
let counter = 0;

function printClick() {
    counter++;
    console.log("You clicked the button!!!")
    showclicks.innerHTML = "Number of clicks: " + counter;
}

btn1.addEventListener('click', printClick);
