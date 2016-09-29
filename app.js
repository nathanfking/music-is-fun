//Do Not Modify the getMusic function
function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}


function drawSongs(songList) {
    var template = "";
    var songListElement = document.getElementById("tunage")
    for (var i = 0; i < 50; i++) {
        var tunage = songList[i]
        template += `
               <div class="col-sm-12 col-md-6 col-lg-4 col-lg-push-1 card">
                <img class="background-image" id="albumArt" src="${tunage.albumArt}" alt="" /></img>
                <li class="row-fluid">${tunage.artist}</li>
                <li class="row-fluid">${tunage.title}</li>
                <li class="row-fluid">${tunage.collection}</li>
                <li class="row-fluid">${tunage.price}</li>
                <audio class="sound" controls style="width=250px";  src="${tunage.preview} "><a href="${tunage.preview} " class="card-link ">Card link</a></audio>
            </div>`
    }
    songListElement.innerHTML = template


    console.log(songList)
}
document.addEventListener("play", function (event) {
    var selected = document.getElementsByClassName("sound");
    for (var i = 0; i < selected.length; i++) {
        var currentPlayer = selected[i]
        if (currentPlayer != event.target) {
            currentPlayer.pause()
            
     
        }
    }
},true);