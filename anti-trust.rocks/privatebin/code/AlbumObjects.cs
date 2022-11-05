namespace AlbumObjects
{    
    public class AlbumData
    {
        public string displayTitle { get; set; }
        public string title { get; set; }
        public string description {get; set; }
        public string songBaseUrl { get; set; }

        public string coverImage { get; set; } = "https://anti-trust.rocks/Guilty-Cover-Rectangle-Card.png";

        public List<SongData> songs { get; set; } = new List<SongData>();
    }

    public class SongData
    {
        public string displayTitle { get; set; }
        public string title { get; set; }
        public string credits { get; set; }
        public string players {get; set; }
        public string playTime { get; set; }
        public string file { get; set; }
        public string lyrics { get; set; }
        public string groupStart {get; set; }
        public string link {get; set;}
        public string spotifyUrl {get; set; }
        public string amazonUrl {get; set;} 
        public string appleUrl {get; set;}
        public string googleUrl {get; set; }
        public string youTubeUrl {get; set; }
    }

}