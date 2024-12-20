namespace AlbumObjects
{    
    public class AlbumData
    {
        public string displayTitle { get; set; }
        public string title { get; set; }
        public string description {get; set; }
        public string songBaseUrl { get; set; }

        public string coverImage { get; set; } = "https://anti-trust.rocks/Guilty-Cover-Rectangle-Card.png";
        
        /// <summary>
        /// By line displayed after song list and band members
        /// </summary>
        public string albumInformation { get; set; }

        public string copyright { get; set;  }

        /// <summary>
        /// Notification message that gets displayed at the top of the album list as
        /// an 'alert' message
        /// </summary>
        public string notification {get; set; }


        public List<SongData> songs { get; set; } = new List<SongData>();

        public List<BandMember> bandMembers { get; set; } = new List<BandMember>();
    }

    public class BandMember
    {
        public string name { get; set;  }
        public string activity { get; set;  }
    }

    public class SongData
    {
        public string displayTitle { get; set; }
        public string title { get; set; }

        public bool dontShowTitle {get; set; }

        public string description {get; set;}
        public string credits { get; set; }
        public string players {get; set; }
        public string playTime { get; set; }
        public string file { get; set; }
        public DateTime lastUpdated { get; set;  }

        
        public string lyrics { get; set; }

        /// <summary>
        /// A notification box that shows up above the lyrics
        /// to alert the user to something important like
        /// a video is available etc.
        /// </summary>
        public string Notification {get; set; }

        /// <summary>
        /// Additional information that is shown below
        /// the lyrics in small text
        /// </summary>
        public string lyricNotes {get; set;}        

        /// <summary>
        /// The Url of the image that is displayed as the background images
        /// for the song. If not set, the album cover image is used.
        /// </summary>
        public string ImageUrl {get; set; }

        /// <summary>
        /// Official Album Cover Image for the song. This is the image        
        /// used for the actual MP3 song as album art.
        /// 
        /// Used to display next to the song. If not set uses
        /// the album's cover image.
        /// </summary>
        public string coverImageUrl {get; set; }
        
        public string groupStart {get; set; }

        public string link {get; set;}

        public string spotifyUrl {get; set; }
        public string amazonUrl {get; set;} 
        public string appleUrl {get; set;}
        public string googleUrl {get; set; }
        public string youTubeUrl {get; set; }

        public string embeddedVideoUrl {get; set; }
    }

}