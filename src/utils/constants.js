const GOOGLE_API_KEY = "AIzaSyAHQ6IsY_64bwAQzH421CRllxRLpkTcQko";


// export const YOUTUBE_API = "GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[AIzaSyC36gy7L8PUtd0Q95-CbkP46uzusPVgZSs]"
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;