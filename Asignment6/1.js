function snd(ev) {
    if (ev.keyCode === 13) {
        var msg = document.querySelector("#textBox").value;
        var newElemet = document.querySelector("#card1").cloneNode(true);
        newElemet.style.backgroundColor = "white";
        newElemet.style.color = "black";
        newElemet.style.width = "100p%";
        // newElemet.style.height = "25px";
        // newElemet.style.marginTop = "20px";
        newElemet.style.visibility = "visible";

        newElemet.children[0].innerHTML = msg;

        const chatArea = document.querySelector("#chatAreaid");

        chatArea.appendChild(newElemet);
        document.querySelector("#textBox").value = "";
    }
}

function sendmsg() {
    var msg = document.querySelector("#textBox").value;
    var newElemet = document.querySelector("#card1").cloneNode(true);
    newElemet.style.backgroundColor = "green";
    newElemet.style.color = "black";
    newElemet.style.width = "100p%";
    // newElemet.style.height = "25px";
    // newElemet.style.marginTop = "20px";
    newElemet.style.visibility = "visible";

    newElemet.children[0].innerHTML = msg;

    const chatArea = document.querySelector("#chatAreaid");

    chatArea.appendChild(newElemet);
    document.querySelector("#textBox").value = "";
}