function processUserInput(mycallback) {
    let name = "Hammad Khalil";
    mycallback(name);

}
function greetUser(name) {
    console.log(`Hello, ${name}`);

}

processUserInput(greetUser);