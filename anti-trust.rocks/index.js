$("ol>li>a,ol>li").click(function(e) {
    e.preventDefault();
    var el = this;

    var song = "";

    if (el.nodeName === "A") {
        song = el.href;
        window.location = song;
    } else {
        song = $(el).find("a")[0].href;
        window.location = song;
    }
});

// detect media keys
if (navigator.mediaSession) {    
    navigator.mediaSession.setActionHandler('nexttrack',function() {
        if (!player.songs) 
            playAll();                    
        else 
            player.next();        
    });
    navigator.mediaSession.setActionHandler('previoustrack',function() {
        if (!player.songs) 
            playAll();                    
        else 
            player.prev();        
    });
    navigator.mediaSession.setActionHandler('pause',function() {
        player.startStop(true);
        paintIcon();
    });
    navigator.mediaSession.setActionHandler('stop',function() {
        player.startStop(true);
        paintIcon();
    });
    navigator.mediaSession.setActionHandler('play',function() {        
        if (!player.songs) 
            playAll();                    
        else {
            if (player.status == "paused")
                player.resume();
            else
                player.play(player.songs[player.activeIndex]);
        }
        paintIcon();
    });
}


paintIcon();

function playAll() {
    $.get("album.json?1.11",function(album) {        
        var player = window.player;
        album.songs.forEach(function(song) {
            player.songs.push(song.file);
        });

        player.onSongChanged = function(song) {
            var title = "";
            if (song) {
                title = song.substr(3).replace(".mp3","");
            }
            $("#SongPlaying").text(title);
            paintIcon();
        }

        player.initialize("#Player");
        player.playSongs();

        paintIcon();
    });
}

function paintIcon() {
    if (player.status === "playing") {
        $("#Play").hide();
        $("#Pause").hide();
        $("#Stop").show();
        $("#Next").show();
    }
    else if (player.status === "stopped") {
        console.log("stopped status");
        $("#Play").show();
        $("#Pause").hide();
        $("#Stop").hide();
        $("#Next").hide();
    }
    else if (player.status === "paused") {
        console.log("paused status");
        $("#Pause").show();
        $("#Play").hide();
        $("#Stop").hide();
        $("#Next").hide();
    }
}