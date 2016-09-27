//Do Not Modify the getMusic function
function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}


function drawSongs(songList) {
    var template = "";
    var songListElement = document.getElementById("tunage")
    for (var i = 0; i < songList.length; i++) {
        var tunage = songList[i]
        template += `<div id="tunage">
        <div class="track">
            <div class="img-container">
                <img id="albumArt" src="${tunage.albumArt}" alt="" />
            </div>
            <div class="text-container">
                <h1>${tunage.title}</h1>
                <p>${tunage.artist}</p>
                <p>${tunage.collection}</p>
                <p>${tunage.price}</p>
            </div>
        </div>
    </div>`
    }
    songListElement.innerHTML = template


    console.log(songList)
}

