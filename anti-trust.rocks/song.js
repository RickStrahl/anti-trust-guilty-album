// var songName =

window.player = {
    status: 'stopped',
    playerInstance: null,
    onEndedCallback: null,
    iconInstance: null,
    src: '',
    autoPlay: false,

    initialize: function (playerSel, iconSel, songName) {
        player.instance = $(playerSel)[0];
        player.iconInstance = $(iconSel);
        player.src = songName;
        if (player.autoPlay)
            player.play();
        player.instance.addEventListener("ended", player.onEnded)
    },
    onEnded: function() {
       player.stop();
    },
    startStop: function () {
        if (player.status === "playing")
            player.stop();
        else
            player.play();
    },
    play: function (src) {
        if (!src)
            src = player.src;
        if (!src)
            return;

        player.instance.src = src;
        console.log(player.instance.src, src);
        player.instance.play();
        player.status = 'playing';
        player.paintIcon();
        console.log(player.status);
    },
    stop: function () {
        player.instance.src = '';
        player.status = 'stopped';
        player.paintIcon();
        console.log(player.status);
    },
    paintIcon: function () {
         if (player.status === "playing") {
             player.iconInstance
                 .removeClass("fa-play-circle")
                 .addClass("fa-stop-circle");
         } else if (player.status === "stopped") {
             player.iconInstance
                 .removeClass("fa-stop-circle")
                 .addClass("fa-play-circle");
         }
    }
}

var model = {
    "title": "",
    "playTime": "",
    "credits": "",
    "file": "",
    "lyrics": "",
    player: player
};
player.initialize(".player", ".play-icon", window.Globals.songToPlay);


var song = getUrlEncodedKey("t");
song = song.replace(/-/g," ");

function getUrlEncodedKey(key, query) {
    if (!query)
        query = window.location.search;
    var re = new RegExp("[?|&]" + key + "=(.*?)&");
    var matches = re.exec(query + "&");
    if (!matches || matches.length < 2)
        return "";
    return decodeURIComponent(matches[1].replace("+", " "));
}




//player.play();

