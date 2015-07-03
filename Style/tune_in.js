/*	Slide down option for the IRC chat
	This fiction is an example of an on click event
*/

$(document).ready(function() {

	$("#slideDown").click(function(){
		console.log("chat slide");
		$("#chatSlide").slideToggle("slow");
	});

});

window.onload = function() {
	document.getElementById("newTab").onclick = newTab;
	document.getElementById("newWindow").onclick = newWindow;
};

//plays next track
function newTab() {
    window.open('https://kiwiirc.com/client/irc.pawpet.tv/?&theme=relaxed#pawpet', '_blank');
}

//plays next track
function newWindow() {
    window.open('https://kiwiirc.com/client/irc.pawpet.tv/?&theme=relaxed#pawpet', 'newwindow', 'width=500, height=400');
}