const GOOGLE_API_KEY = "AIzaSyAHQ6IsY_64bwAQzH421CRllxRLpkTcQko";

export const LIVE_CHAT_LIMIT = 25;


// export const YOUTUBE_API = "GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[AIzaSyC36gy7L8PUtd0Q95-CbkP46uzusPVgZSs]"
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;


export const YOUTUBE_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_GAMING_VIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&videoCategoryId=20&chart=mostPopular&key=" + GOOGLE_API_KEY;
export const YOUTUBE_MUSIC_VIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&videoCategoryId=10&chart=mostPopular&key=" + GOOGLE_API_KEY;
export const YOUTUBE_NEWS_VIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&videoCategoryId=25&chart=mostPopular&key=" + GOOGLE_API_KEY;
export const YOUTUBE_SPORTS_VIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&videoCategoryId=17&chart=mostPopular&key=" + GOOGLE_API_KEY;
export const YOUTUBE_CARS_VIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&videoCategoryId=2&chart=mostPopular&key=" + GOOGLE_API_KEY;
export const YOUTUBE_COMEDY_VIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&videoCategoryId=23&chart=mostPopular&key=" + GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=&key=" + GOOGLE_API_KEY;
