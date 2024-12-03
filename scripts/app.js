function sayGoodbye(){
    console.log("Goodbye")
}

function sayHello(){
    console.log("hello");
    sayGoodbye();
}

window.onload = sayHello;