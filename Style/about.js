window.onload = function() {
	document.getElementById("submit").onclick = tyMessage;
};

//Thanks the user for taking the time to send an e-mail.
function tyMessage() {
	if (document.getElementById("nameInput").value==="" || document.getElementById("messageInput").value==="") {
		alert("Please fill out the required fields.");
	} else {
		alert("Thank you for your e-mail.  We will read it as soon as possible.  :3");
	}
}