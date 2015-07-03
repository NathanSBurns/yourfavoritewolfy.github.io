
$(document).ready(function() {
 /*  displays information about autoplay
    this function is executed on mouse over
*/
       $("#autoCheckDiv").hover(function() {
            $("#autoplayText").html("Autoplay (plays next track when this one ends)");
            $('#autoCheckDiv').css("width", "400px");},

            function() {
                $("#autoplayText").html("Autoplay")
            $('#autoCheckDiv').css("width", "100px");
        });

/*  transitions in between each image
    this function is executed on load
*/
    $("#gallery > div:gt(0)").hide();

    setInterval(function() { 
      $('#gallery > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#gallery');
    },  3000);

/*  Implenmeted in tune in page, but used here for eas of grading
    Slide down option for the IRC chat
    This fiction is an example of an on click event
*/
    $("#slideDown").click(function(){
        console.log("chat slide");
        $("#chatSlide").slideToggle("slow");
    });
});

var audio = new Array('Style/Audio/Le_Banquet.mp3', 'Style/Audio/Divinity.mp3', 'Style/Audio/Meltdown.mp3', 'Style/Audio/Mega_Man_3_Remix.mp3', 'Style/Audio/Semi-Automatic.mp3');


var index = 0;


window.onload = function() {
	document.getElementById("nextButton").onclick = nextTrack;
    document.getElementById("prevButton").onclick = prevTrack;
    trackUpdate();
    document.getElementById('audioPlayer').addEventListener('ended', autoCheck);
};

//plays next track
function nextTrack() {
    //resets the playlist if it reaches the last element
    if (index>=audio.length-1) {
        index=-1;
    }
    index++;

    //sets the track to the next element in the array
    document.getElementById('audioPlayer').innerHTML= 
       "<source src=\""+audio[index]+"\" type= \"audio/mpeg\">";
    trackUpdate();
    document.getElementById('audioPlayer').load();
    document.getElementById('audioPlayer').play();
//    audioPlayer.load();
}

//Plays previous track
function prevTrack() {
    //sets current track to last element in the array if it is below 0
    if (index<=0) {
        index=audio.length;
    }
    index--;
    //sets the track to the previous element in the array
    document.getElementById('audioPlayer').innerHTML= 
       "<source src=\""+audio[index]+"\" type= \"audio/mpeg\">";
    trackUpdate();
    document.getElementById('audioPlayer').load();
    document.getElementById('audioPlayer').play();
}

//plays next track after current one is finished if checkbox is checked
function autoCheck() {
    if (document.getElementById("autoCheck").checked) {
            nextTrack();
    document.getElementById('audioPlayer').play();
    }
}

//shows what track is playing.
function trackUpdate() {
    var track= audio[index].split("/");
    var trackName= track[track.length-1].replace(/.mp3/g , "");
    var trackName= trackName.replace(/_/g , " ");
    document.getElementById('currentTrack').innerHTML= 'Current Track: ' + "<b>" + trackName +  "</b>";
}
