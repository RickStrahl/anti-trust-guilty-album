window.player = {
    // baseUrl for songs: should end in /
    gitHubBaseUrl: "https://github.com/RickStrahl/anti-trust-guilty-album/raw/main/Albums/Guilty/mp3/",
    status: 'stopped',
    playerInstance: null,
    onEndedCallback: null,
    // for multi-song mode provide an array of song Urls
    // array of song objects: { link, title }
    songs: [],
    // set this index to 0 to loop through songs
    // -1 - single play mode
    // 0  - loop through songs based on activeIndex
    activeIndex: 0,
    // callback that is called when a song starts playing function(song)
    onSongChanged: null,
    initialize: function (playerSel) {
        player.instance = $(playerSel)[0];

        // if songs are set
        player.instance.addEventListener("ended", player._ended)
    },

    _ended: function(e) {
        var handled = false;
        if (player.onEndedCallback)
            handled = player.onEndedCallback(player.activeIndex, e);

        if (!handled && player.songs.length > 0) {
            player.next();
        }
    },
    startStop: function (pause) {
        if (player.status === "playing")
            if(pause) player.pause(); else player.stop();
        else    
            player.play();
    },
    playSongs(startIndex) {
        if(typeof startIndex === "number")
            player.activeIndex = startIndex;

        var src = player.songs[player.activeIndex];
        player.play(src);
    },
    next: function() {
        player.activeIndex++;
        if (player.activeIndex > player.songs.length - 1)
            player.activeIndex = 0;
        player.play(player.songs[player.activeIndex]);
    },
    prev: function(){
        player.activeIndex--;
        if (player.activeIndex < 0)
            player.activeIndex = player.songs.length-1;
        player.play(player.songs[player.activeIndex]);
    },
    play: function (src) {        
        if (!src)
            return;

        if (player.onSongChanged)
            player.onSongChanged(src);

        // fix up URL
        if (!src.startsWith('http'))
            src = player.gitHubBaseUrl +  src;            

        player.instance.src =  src;
        player.instance.play();
        player.status = 'playing';
        console.log(player.status);
    },
    resume: function() {        
        player.instance.play();
        player.status = 'playing';
        console.log(player.status);
    },
    stop: function () {
        player.status = 'stopped';
        player.instance.src = '';
        player.instance.removeEventListener("ended",player._ended);

        if (player.onSongChanged)
            player.onSongChanged('');
    },
    pause: function () {
        player.status = 'paused';        
        player.instance.pause();    
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
        else if (player.status === "paused") {
            player.iconInstance
                .removeClass("fa-stop-circle")
                .removeClass("fa-play-circle")
                .addClass("fa-pause-circle");
        }   
    }
}
 