function commentHere() {

    let userComment = document.querySelector("#cmntBox1").value;

    if (userComment == null || userComment == "") {
        return;
    }
    else {
        const newElement = document.querySelector("#comments_refid").cloneNode(true);
        newElement.removeAttribute("id");
        newElement.style.visibility = "visible";
        newElement.children[0].innerHTML = userComment;

        const commentBox = document.querySelector("#commentBox");
        commentBox.insertBefore(newElement, commentBox.firstChild);
        document.querySelector("#cmntBox1").value = "";
    }

}

function deleteCmnt(parameter) {
    parameter.parentElement.remove();
}