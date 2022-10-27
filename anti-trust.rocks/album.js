
$("ol>li>a,ol>li").click( function(e) {
    e.preventDefault();
    play(e, this); 
});
  

function play(event, el) {      
    
    var song = "";

    if (el.nodeName == "A")
    {
        song = el.href; 
        window.location = song;
    }
    else {
        song = $(el).find("a")[0].href;
        window.location = song;
    }
           
}
