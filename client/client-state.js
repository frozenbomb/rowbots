sessionStorage.setItem("client-id", "111")
sessionStorage.setItem('curr-turn', 0)

function createSendButton() {
    var button = document.createElement("button")
    button.setAttribute("style", "float:right;")
    var text = document.createTextNode("Send")
    button.append(text)

    return button
}