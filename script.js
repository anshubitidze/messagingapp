var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var newMessage = document.createElement("ol");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";

})