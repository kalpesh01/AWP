// simple function
function myfunction(e) {

    e.parentElement.children[4].innerHTML = "i Am simple Function";
    // console.log("Simple Function");

}


// call Back Function

/* pass a function in anyother function as parameter 
is Called CallBack Funtion*/
var myfunction1 = function (e) {
    e.parentElement.children[4].innerHTML = "Hello i am Call Back Function";
}

// Anonymous function Or Arrow function

var myfunction2 = (e) => {
    e.parentElement.children[4].innerHTML = "Hello i am Anonymous Or Arrow function";
}

var myfunction3 = (e) => {
    e.parentElement.children[4].innerHTML = "";
}