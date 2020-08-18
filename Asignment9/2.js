var counter = 0;

function likeHere() {
    let like = document.querySelector("#likebtn");
    counter++; // 1
    like.innerHTML = "Like" + counter;
}

function readHere() {

    var userComment = document.querySelector("#textBox1").value;

    if (userComment != "") {
        let newElement = document.querySelector(".card").cloneNode(true);
        newElement.children[0].innerHTML = userComment;

        var cardContainer = document.querySelector(".container2");

        cardContainer.insertBefore(newElement, cardContainer.firstChild);

        document.querySelector("#textBox1").value = "";

        var errtxt = document.querySelector("#err1");



        errtxt.style.visibility = "hidden";

    }
    else {


        var errtxt = document.querySelector("#err1");


        errtxt.innerHTML = "plzz enter the comment"
        errtxt.style.visibility = "visible";
    }



}

function del(abc) {
    abc.parentElement.parentElement.firstChild.remove();
}

