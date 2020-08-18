let counter = 1;
function increment() {
    counter = counter + 1;
    document.querySelector("#counterid").innerHTML = counter;
}

function decrement() {

    counter = counter - 1;
    document.querySelector("#counterid").innerHTML = counter;

}