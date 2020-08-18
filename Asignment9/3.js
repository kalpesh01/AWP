function likeHere() {
    var lbvalue = document.querySelector("#likeBtnValue").innerHTML;
    var lbvalue = parseInt(lbvalue);

    lbvalue = lbvalue + 1;
    document.querySelector("#likeBtnValue").innerHTML = lbvalue;

}

function readText(e) {

    var userComment = e.parentElement.children[1].value;
    if (userComment != "") {

        var newElement = e.parentElement.parentElement.children[2].children[0].cloneNode(true);
        newElement.style.visibility = "visible";
        newElement.children[0].innerHTML = userComment;
        e.parentElement.children[1].value = "";

        e.parentElement.parentElement.children[2].insertBefore(newElement, e.parentElement.parentElement.children[2].children[0]);

        var errdiv = e.parentElement.parentElement.children[0].children[1];
        errdiv.style.visibility = "hidden";
    }
    else {
        var errdiv = e.parentElement.parentElement.children[0].children[1];
        errdiv.innerHTML = "!! Enter the comment Plzzz"
        errdiv.style.color = "WHITE";
        errdiv.style.visibility = "visible";
    }
}


function ondelete(ab) {
    ab.parentElement.parentElement.remove();
}