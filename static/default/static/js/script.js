const hello_world = "Hello, world!";
const time = 100;
document.addEventListener("DOMContentLoaded", () => {
    console.log(hello_world);
    setTimeout(() => {
       console.log("After",time,"ms"); 
    }, time);
});