const GOOGLE_API_KEY = "AIzaSyC_sw7u10JDma2utbkyCRLZWR4BiGHpIik";

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
export const LIVE_CHAT_COUNT = 4;

// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
